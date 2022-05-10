import { FC } from 'react'
import styles from './MessageItem.module.scss'

interface Props {
	messageText: string
}
const MessageItem: FC<Props> = ({ messageText }: Props) => {
	return <p className={styles.messageWrapper}>{messageText}</p>
}

export default MessageItem
