import { Navigate } from 'react-router-dom'
import { FC } from 'react'
import useAuth from '../auth/authContext';

interface Props {
  component: JSX.Element
}

const ProtectedRoute: FC<Props> = ({component}: Props) => {

  const {user} = useAuth();

  /*if (!user) {
    return <Navigate to='/login'/>
  }*/

  return component
}

export default ProtectedRoute
