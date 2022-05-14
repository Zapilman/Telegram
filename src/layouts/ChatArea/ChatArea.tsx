import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { Socket } from 'socket.io-client'

import styles from './ChatArea.module.scss'

import MessageInput from '../../components/MessageInput/MessageInput'
import ViewMessages from './components/ViewMessages/ViewMessages'
import { MessageType } from '../../types/MessageItemTypes'
import { addMessage, onTypingMessage } from './logic'
import useDebounce from '../../hooks/useDebounce'

interface Props {
	socket: Socket
}
const ChatArea: FC<Props> = ({ socket }: Props) => {
	const [messages, setMessages] = useState<MessageType[]>([])
	const [isTyping, setIsTyping] = useState<boolean>(false)
	const [pep, setPep] = useState('')
	const chatBoxRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		socket.on('connect', () => {
			console.log('connected')
			socket.emit('join', { authorName: 'Sara' })
		})

		socket.on('message', (res: MessageType) => {
			setMessages(prevState => [...prevState, res])
		})

		socket.on('typing', (res: any) => {
			setPep(res.isTyping ? 'Sara' : '')
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
					whoIsTyping={pep}
					onChange={() => onTypingMessage(setIsTyping)}
					sendMessage={(message: string) => addMessage(message, socket)}
				/>
			</div>
		</div>
	)
}

export default ChatArea
