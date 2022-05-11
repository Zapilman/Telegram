import { FC } from 'react'
import styles from './MessageItem.module.scss'
import cn from 'classnames'

interface Props {
	messageText: string
	isFromUser: boolean
}
const MessageItem: FC<Props> = ({ messageText, isFromUser }: Props) => {
	return (
		<div
			className={cn(styles.messageWrapper, {
				[styles.messageWrapper_outer]: isFromUser,
			})}
		>
			<p className={styles.messageText}>{messageText}</p>
		</div>
	)
}

export default MessageItem
