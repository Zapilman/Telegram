import { FC, LegacyRef, useRef, useState } from 'react'
import cn from 'classnames'
import styles from './MessageInput.module.scss'
import { keyboardKey } from '@testing-library/user-event'
import { MessageType } from '../../types/MessageItemTypes'

interface Props {
	sendMessage: (message: string) => void
	onChange?: () => void
	whoIsTyping?: string
}

const MessageInput: FC<Props> = ({
	sendMessage,
	onChange,
	whoIsTyping = '',
}: Props) => {
	const messageInputRef = useRef<HTMLInputElement | null>(null)
	const onChangeHandler = () => {
		//console.log(messageInputRef.current?.value)

		onChange && onChange()
	}

	const sendMessageHandler = () => {
		if (
			messageInputRef.current !== null &&
			messageInputRef.current.value !== ''
		) {
			sendMessage(messageInputRef.current.value)
			messageInputRef.current.value = ''
		}
	}

	const clickEnterHandler = (e: keyboardKey) => {
		if (e.key === 'Enter') {
			sendMessageHandler()
		}
	}

	return (
		<div className={cn(styles.wrapper)}>
			<p>
				{whoIsTyping} {whoIsTyping && 'is typing...'}
			</p>
			<div className={styles.inputGroup}>
				<div className={styles.messageContainer}>
					<input
						ref={messageInputRef}
						type='text'
						onChange={onChangeHandler}
						onKeyDown={clickEnterHandler}
					/>
				</div>
				<div className={styles.microBtn}>
					<button onClick={sendMessageHandler}>send</button>
				</div>
			</div>
		</div>
	)
}

export default MessageInput
