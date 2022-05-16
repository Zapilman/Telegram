import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { Socket } from 'socket.io-client'

import styles from './ChatArea.module.scss'

import MessageInput from '../../components/MessageInput/MessageInput'
import ViewMessages from './components/ViewMessages/ViewMessages'
import { MessageType } from '../../types/MessageItemTypes'
import { addMessage, onTypingMessage } from './logic'
import { useQuery } from '@apollo/client'
import { getAllMessages } from '../../graphql/queries'

interface Props {
	socket: Socket
}
const ChatArea: FC<Props> = ({ socket }: Props) => {
	const [messages, setMessages] = useState<MessageType[]>([])
	const [isTyping, setIsTyping] = useState<boolean>(false)
	const [whoIsTyping, setWhoIsTyping] = useState('')
	const chatBoxRef = useRef<HTMLDivElement>(null)
	const { loading, data } = useQuery(getAllMessages)

	//waiting for messages and setting them up to the state
	useEffect(() => {
		if (!loading && data) {
			setMessages(prevState => [
				...prevState,
				...[
					...data.messages.map((message: MessageType) => ({
						text: message.text,
						authorName: message.authorName,
					})),
				],
			])
		}
	}, [loading])

	useEffect(() => {
		socket.on('connect', () => {
			console.log('connected')
			socket.emit('join', { authorName: 'Sara' })
		})

		socket.on('message', (res: MessageType) => {
			console.log(res)
			setMessages(prevState => [...prevState, res])
		})

		socket.on('typing', (res: any) => {
			setWhoIsTyping(res.isTyping ? 'Sara' : '')
		})

		return () => {
			socket.close()
		}
	}, [])

	useEffect(() => {
		if (chatBoxRef.current !== null) {
			chatBoxRef.current.scrollTo(0, chatBoxRef.current.scrollHeight)
		}
	}, [messages.length])

	useEffect(() => {
		let timer: any
		if (isTyping) {
			socket.emit('typing', { isTyping: true })
			timer = setTimeout(() => {
				socket.emit('typing', { isTyping: false })
				setIsTyping(false)
			}, 2000)
		}
		return () => {
			timer && clearTimeout(timer)
		}
	}, [isTyping, socket])

	return (
		<div className={cn(styles.wrapper)}>
			<div className={cn(styles.chatContainer)}>
				<ViewMessages messages={messages} chatBoxRef={chatBoxRef} />
				<MessageInput
					whoIsTyping={whoIsTyping}
					onChange={() => onTypingMessage(setIsTyping)}
					sendMessage={(message: string) => addMessage(message, socket)}
				/>
			</div>
		</div>
	)
}

export default ChatArea
