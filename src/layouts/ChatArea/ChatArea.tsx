import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { io, Socket } from 'socket.io-client'

import styles from './ChatArea.module.scss'

import MessageInput from '../../components/MessageInput/MessageInput'
import ViewMessages from './components/ViewMessages/ViewMessages'
import { MessageType } from '../../types/MessageItemTypes'

interface Props {}
const ChatArea: FC<Props> = ({}: Props) => {
	const [messages, setMessages] = useState<MessageType[]>([])
	const chatBoxRef = useRef<HTMLDivElement>(null)

	let socket = io('http://localhost:3001')

	useEffect(() => {
		socket.on('connect', () => {
			console.log('connected')
			socket.emit('join', { authorName: 'Sara' })
		})

		socket.on('message', (res: MessageType) => {
			setMessages(prevState => [...prevState, res])
		})

		socket.emit('findAllMessages', {}, (response: MessageType[]) => {
			setMessages(prevState => [...response])
		})

		return () => {
			socket.close()
		}
	}, [])

	useEffect(() => {
		if (chatBoxRef.current !== null) {
			chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
			console.log(chatBoxRef.current.scrollHeight)
			console.log(chatBoxRef.current)
		}
	}, [messages.length])

	const addMessage = (message: string) => {
		socket.emit('createMessage', { text: message, authorName: 'Sara' })
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
