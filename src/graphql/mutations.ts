import { gql } from '@apollo/client';


export const SIGN_IN = gql`
  mutation($userCredentialsInput: userCredentialsInput!){
  signIn(userCredentialsInput: $userCredentialsInput) {
    accessToken {
      token, 
      expiresIn
    },
    user {
      firstName,
      secondName,
      id
    }
  }
}
`;