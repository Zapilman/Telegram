import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import useDebounce from '../../hooks/useDebounce'

export const addMessage = (message: string, socket: Socket) => {
	socket.emit('createMessage', { text: message, authorName: 'Sara' })
}

export const onTypingMessage = (setIsTyping: (value: boolean) => void) => {
	setIsTyping(true)
}
