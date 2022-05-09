import { FC } from 'react'
import cn from 'classnames'

import ActivityBar from '../../layouts/ActivityBar/ActivityBar'
import ChatArea from '../../layouts/ChatArea/ChatArea'
import Sidebar from '../../layouts/Sidebar/Sidebar'

import styles from './Main.module.scss'

const MainPage: FC = () => {
	return (
		<div className={cn(styles.mainWrapper)}>
			<Sidebar />
			<ActivityBar />
			<ChatArea />
		</div>
	)
}

export default MainPage
