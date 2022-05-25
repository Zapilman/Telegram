import { FC } from 'react';
import {MdEmail, MdPassword} from 'react-icons/md';
import cn from 'classnames';
import styles from './InputField.module.scss';
interface Props {
  type: string,
  register: any,
  customStyles?: string,
  placeHolder: string,
}

const InputField: FC<Props> = ({type, register, customStyles, placeHolder}: Props) => {
  return (
    <div className={cn(styles.wrapper, customStyles)}>
      {type === 'password' ? <MdPassword/> : <MdEmail/>}
      <input type={type === 'password' ? 'password' : 'text'} placeholder={placeHolder} {...register}/>
    </div>
  )
}

export default InputField;