import { FC, RefObject, useRef } from 'react'

import MessageItem from '../../../../components/MessageItem/MessageItem'

import styles from './ViewMessages.module.scss'

interface Props {
	messages: string[]
	chatBoxRef?: RefObject<HTMLDivElement>
}

const ViewMessages: FC<Props> = ({ messages, chatBoxRef }: Props) => {
	return (
		<div className={styles.wrapper} ref={chatBoxRef}>
			<div className={styles.chatBox}>
				{messages.map((message: string) => {
					return <MessageItem messageText={message} />
				})}
			</div>
		</div>
	)
}

export default ViewMessages
