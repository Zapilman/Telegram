import { FC } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import cn from 'classnames'
import styles from './Sidebar.module.scss'

interface Props {}
const Sidebar: FC<Props> = ({}: Props) => {
	return (
		<nav className={styles.sidebarWrapper}>
			<header>
				<div className={styles.imageText}>
					<span className={styles.image}>
						<img
							src='https://cdn.iconscout.com/icon/free/png-256/telegram-1884625-1596844.png'
							alt='logo'
						/>
					</span>
					<span className={styles.text}>Telegram</span>
				</div>
				<span className={styles.rightArrowIcon}>
					<AiOutlineArrowRight />
				</span>
			</header>
			<div className={styles.menuBar}>
				<div className={styles.menu}>menu</div>
				<div className={styles.bottomContent}>bootom</div>
			</div>
		</nav>
	)
}

export default Sidebar
