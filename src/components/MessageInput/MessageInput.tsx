import { FC, LegacyRef, useRef } from 'react'
import cn from 'classnames'
import styles from './MessageInput.module.scss'
import { keyboardKey } from '@testing-library/user-event'
import { MessageType } from '../../types/MessageItemTypes'

interface Props {
	sendMessage: (message: MessageType) => void
}

const MessageInput: FC<Props> = ({ sendMessage }: Props) => {
	const messageInputRef = useRef<HTMLInputElement | null>(null)

	const messageOnChangeHandler = () => {
		console.log(messageInputRef.current?.value)
	}

	const sendMessageHandler = () => {
		if (
			messageInputRef.current !== null &&
			messageInputRef.current.value !== ''
		) {
			sendMessage({ text: messageInputRef.current.value, isUserFrom: true })
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
			<div className={styles.inputGroup}>
				<div className={styles.messageContainer}>
					<input
						ref={messageInputRef}
						type='text'
						onChange={messageOnChangeHandler}
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
