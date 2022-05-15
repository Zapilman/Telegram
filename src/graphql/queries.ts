import { gql } from '@apollo/client'

export const getAllMessages = gql`
	query {
		messages {
			text
			authorName
		}
	}
`
