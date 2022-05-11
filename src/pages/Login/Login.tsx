import { FC } from 'react'
import styles from './Login.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form';


type LoginCredentials = {
  login: string,
  password: string
}

const LoginPage: FC = () => {

  const {register, handleSubmit, watch} = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  }


  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
        <input type="text" className={styles.loginInput} {...register('login', {required: true})}/>
        <input type="password" className={styles.passwordInput} {...register('password', {required: true})}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default LoginPage