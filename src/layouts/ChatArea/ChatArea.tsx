import { FC, useRef, useState } from 'react'
import cn from 'classnames'

import styles from './ChatArea.module.scss'

import MessageInput from '../../components/MessageInput/MessageInput'
import ViewMessages from './components/ViewMessages/ViewMessages'

interface Props {}
const ChatArea: FC<Props> = ({}: Props) => {
	const [messages, setMessages] = useState<string[]>(['hi'])
	const chatBoxRef = useRef<HTMLDivElement>(null)

	const addMessage = (message: string) => {
		if (chatBoxRef.current !== null) {
			chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
			console.log(chatBoxRef.current.scrollHeight)
			console.log(chatBoxRef.current)
		}
		setMessages(prevState => [...prevState, message])
	}

	return (
		<div className={cn(styles.wrapper)}>
			<div className={cn(styles.chatContainer)}>
				<ViewMessages messages={messages} chatBoxRef={chatBoxRef} />
				<MessageInput sendMessage={addMessage} />
			</div>
		</div>
	)
}

export default ChatArea
