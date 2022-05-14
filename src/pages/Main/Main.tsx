import { FC } from 'react'
import cn from 'classnames'

import ActivityBar from '../../layouts/ActivityBar/ActivityBar'
import ChatArea from '../../layouts/ChatArea/ChatArea'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import styles from './Main.module.scss'
import { io } from 'socket.io-client'

const MainPage: FC = () => {
	const socket = io('http://localhost:3001', {
		reconnection: false,
	})
	return (
		<div className={cn(styles.mainWrapper)}>
			<Sidebar />
			<ActivityBar />
			<ChatArea socket={socket} />
		</div>
	)
}

export default MainPage
