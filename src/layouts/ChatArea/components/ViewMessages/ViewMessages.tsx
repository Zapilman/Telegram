import { FC, RefObject, useRef } from 'react'

import MessageItem from '../../../../components/MessageItem/MessageItem'
import { MessageType } from '../../../../types/MessageItemTypes'

import styles from './ViewMessages.module.scss'

interface Props {
	messages: MessageType[]
	chatBoxRef?: RefObject<HTMLDivElement>
}

const ViewMessages: FC<Props> = ({ messages, chatBoxRef }: Props) => {
	return (
		<div className={styles.wrapper} ref={chatBoxRef}>
			<div className={styles.chatBox}>
				{messages.map((message: MessageType, index: number) => {
					return (
						<div key={index}>
							<MessageItem
								messageText={message.text}
								isFromUser={message.authorName === 'Sara'}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ViewMessages
