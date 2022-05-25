import { FC } from 'react'
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form'
import useAuth from '../../auth/authContext';
import InputField from './components/InputField/InputField';

type FormData = {
	password: string;
	login: string;
}

const LoginPage: FC = () => {
	const { register, handleSubmit } = useForm<FormData>();
	const {loading, error, login} = useAuth();

	const onSubmit = (data: FormData) => {
		console.log(data);
		//login(data.login, data.password);
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
				<h2>Login</h2>

				<InputField
					type={'text'}
					placeHolder={'login...'}
					customStyles={styles.loginInput}
					register={{...register('login', {required: true})}}
				/>
				<InputField
					type={'password'}
					placeHolder={'password...'}
					customStyles={styles.passwordInput}
					register={{...register('password', {required: true})}}
				/>
				<div className={styles.additionalOptions}>
					<label>
						<input type="checkbox"/>
						<span>remember me</span>
					</label>
					<a href="#">forgot password</a>
				</div>
				<input type='submit' />
			</form>
		</div>
	)
}

export default LoginPage
