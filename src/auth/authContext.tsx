import React, { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { UserType } from '../types/UserType';
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useLazyQuery, useMutation } from '@apollo/client';
import { getUserInfoToken } from '../graphql/queries';
import { SIGN_IN } from '../graphql/mutations';

interface AuthContextType {
  user?: UserType,
  loading: boolean,
  error?: any,
  login: (login: string, password: string) => void,
  logout: () => void
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: { children: ReactNode }): JSX.Element => {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const [getUserInfo, {data, error: queryError, called}] = useLazyQuery(getUserInfoToken);
  const [signIn, {data: signInData}] = useMutation(SIGN_IN);

  const navigate = useNavigate();



  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token && !called) {
      getUserInfo({variables: {token}})
        .then(r => {
        const {firstName, secondName, login} = r.data.getUserInfo;
        setUser({
          firstName, secondName, login
        })
      })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoadingInitial(false))
    } else{
      setLoadingInitial(false)
    }

  }, [])

  const login = (login: string, password: string) => {
    setLoading(true);

    signIn({
      variables: {
        userCredentialsInput: {
          login, password
        }
      }
    }).then(r => {
      console.log(r.data.signIn);
      const {firstName, secondName, login} = r.data.signIn.user;
      const token = r.data.signIn.accessToken.token;
      setUser({
        firstName, secondName, login
      })
      setLoading(false);
      Cookies.set('accessToken', token)
      navigate('/')
    })
  }

  const signUp = () => {

  }

  const logout = () => {
    //send query to logout api
    Cookies.remove('accessToken');
    setUser(undefined);
    navigate('/login')
  }

  const memoedValue = useMemo(() => ({
    user,
    loading,
    error,
    login,
    logout
  }), [user, loading, error])

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}