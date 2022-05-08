import { FC } from 'react'
import styles from './Main.module.scss'
import '../../styles/global.scss'

const MainPage: FC = () => {
	return (
		<div className={styles.mainContainer}>
			<p>some text</p>
			<button>kkek</button>
		</div>
	)
}

export default MainPage
