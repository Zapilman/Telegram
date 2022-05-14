import { Navigate } from 'react-router-dom'
import { Component, FC } from 'react'

interface Props {
	component: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ component }: Props) => {
	const isAuth = true

	if (!isAuth) {
		return <Navigate to='/login' />
	}

	return component
}

export default ProtectedRoute
