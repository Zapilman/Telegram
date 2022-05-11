import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'

import styles from './ChatArea.module.scss'

import MessageInput from '../../components/MessageInput/MessageInput'
import ViewMessages from './components/ViewMessages/ViewMessages'
import { MessageType } from '../../types/MessageItemTypes'

interface Props {}
const ChatArea: FC<Props> = ({}: Props) => {
	const [messages, setMessages] = useState<MessageType[]>([
		{ text: 'hi', isUserFrom: false },
		{ text: 'hi', isUserFrom: true },
		{ text: 'how are you?', isUserFrom: true },
		{ text: 'i am fine, what about you?', isUserFrom: false },
	])
	const chatBoxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (chatBoxRef.current !== null) {
			chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
			console.log(chatBoxRef.current.scrollHeight)
			console.log(chatBoxRef.current)
		}
	}, [messages.length])

	const addMessage = (message: MessageType) => {
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
