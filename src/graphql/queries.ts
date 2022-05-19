import { gql } from '@apollo/client'

export const getAllMessages = gql`
	query {
		messages {
			text
			authorName
		}
	}
`

export const getUserInfoToken = gql`
 query($token: String!){
  getUserInfo(token: $token) {
    firstName,
    secondName,
    login
  }
}
`
