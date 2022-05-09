import { FC } from 'react'
import cn from 'classnames'
import styles from './MessageInput.module.scss'

interface Props {}
const MessageInput: FC<Props> = ({}: Props) => {
	return (
		<div className={cn(styles.wrapper)}>
			<input type='text' />
		</div>
	)
}

export default MessageInput
