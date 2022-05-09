import { FC } from 'react'
import cn from 'classnames'

import styles from './ChatArea.module.scss'

import MessageInput from '../../components/MessageInput/MessageInput'

interface Props {}
const ChatArea: FC<Props> = ({}: Props) => {
	return (
		<div className={cn(styles.wrapper)}>
			<div className={cn(styles.chatContainer)}>
				<MessageInput />
			</div>
		</div>
	)
}

export default ChatArea
