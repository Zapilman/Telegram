import { FC } from 'react'
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import useAuth from '../../auth/authContext';

const LoginPage: FC = () => {
	const { register, handleSubmit } = useForm();
	const {loading, error, login} = useAuth();

	const onSubmit = (data: any) => {
		login(data.login, data.password);
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
				<input
					type='text'
					className={styles.loginInput}
					{...register('login', { required: true })}
				/>
				<input
					type='password'
					className={styles.passwordInput}
					{...register('password', { required: true })}
				/>
				<input type='submit' />
			</form>
		</div>
	)
}

export default LoginPage
