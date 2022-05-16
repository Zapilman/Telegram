import { FC, useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { BiNews, BiPhotoAlbum, BiLogOutCircle } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import cn from 'classnames'
import styles from './Sidebar.module.scss'

interface Props {}
const Sidebar: FC<Props> = ({}: Props) => {
	const [isClosed, setIsClosed] = useState<boolean>(false)

	return (
		<nav className={cn(styles.sidebarWrapper, { [styles.close]: isClosed })}>
			<header>
				<div className={styles.imageText}>
					<span className={styles.image}>
						<img
							src='https://cdn.iconscout.com/icon/free/png-256/telegram-1884625-1596844.png'
							alt='logo'
						/>
					</span>
					<span className={cn(styles.text, { [styles.fadeOut]: isClosed })}>
						Telegram
					</span>
				</div>
				<span
					className={styles.rightArrowIcon}
					onClick={() => setIsClosed(prevState => !prevState)}
				>
					<AiOutlineArrowRight />
				</span>
			</header>
			<div className={styles.menuBar}>
				<div className={styles.menu}>
					<ul className={styles.optionList}>
						<li className={cn(styles.option, { [styles.fadeOut]: isClosed })}>
							<CgProfile />
							<span>My Profile</span>
						</li>
						<li className={cn(styles.option, { [styles.fadeOut]: isClosed })}>
							<BiNews />
							<span>News</span>
						</li>
						<li className={cn(styles.option, { [styles.fadeOut]: isClosed })}>
							<BsFillChatDotsFill />
							<span>Chat</span>
						</li>
						<li className={cn(styles.option, { [styles.fadeOut]: isClosed })}>
							<FaUserFriends />
							<span>Friends</span>
						</li>
						<li className={cn(styles.option, { [styles.fadeOut]: isClosed })}>
							<BiPhotoAlbum />
							<span>Photo</span>
						</li>
					</ul>
				</div>
				<div className={styles.bottomContent}>
					<ul className={styles.optionList}>
						<li className={cn(styles.option, { [styles.fadeOut]: isClosed })}>
							<BiLogOutCircle />
							<span>Log Out</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Sidebar
