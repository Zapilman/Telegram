import { FC, useRef } from 'react';
import {BsSearch} from 'react-icons/bs'

import cn from 'classnames'
import styles from './Search.module.scss'
import { keyboardKey } from '@testing-library/user-event';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  onChange?: () => void,
  customStyles?: string,
  searchIconLeft?: boolean
}

type formData = {
  search: string;
}
const Search: FC<Props> = ({onChange, customStyles = '', searchIconLeft=false}: Props) => {
  const {register, handleSubmit, setValue, getValues} = useForm<formData>();

  const onSubmit = (data: formData) => {
    sendData(data);
    setValue('search', '');
  }

  const pressEnterHandler = (e: keyboardKey) => {
    if (e.key === 'Enter') {
      sendData(getValues('search'))
    }
  }

  const sendData = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
          className={cn(styles.wrapper, customStyles, {[styles.SearchIconLeft] : searchIconLeft})}>
      <input
        type="text"
        placeholder={'Search'}
        onKeyPress={pressEnterHandler}
        {...register('search')}
      />
      <button type='submit'>
        <BsSearch/>
      </button>
    </form>
  )
}

export default Search;