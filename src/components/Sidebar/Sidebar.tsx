import { FC, useState } from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { BiLogOutCircle, BiNews, BiPhotoAlbum } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import cn from 'classnames'
import styles from './Sidebar.module.scss'
import { NavLink } from 'react-router-dom';

interface Props {
}

const Sidebar: FC<Props> = ({}: Props) => {
  const [isClosed, setIsClosed] = useState<boolean>(false)
  return (
    <nav className={cn(styles.sidebarWrapper, {[styles.close]: isClosed})}>
      <header>
        <div className={styles.imageText}>
					<span className={styles.image}>
						<img
              src='https://cdn.iconscout.com/icon/free/png-256/telegram-1884625-1596844.png'
              alt='logo'
            />
					</span>
          <span className={cn(styles.text, {[styles.fadeOut]: isClosed})}>
						Telegram
					</span>
        </div>
        <span
          className={cn(styles.rightArrowIcon, {[styles.closed]: !isClosed})}
          onClick={() => setIsClosed(prevState => !prevState)}
        >
					<AiOutlineArrowRight/>
				</span>
      </header>
      <div className={styles.menuBar}>
        <div className={styles.menu}>
          <ul className={styles.optionList}>
            <li className={styles.option}>
              <NavLink to='/profile' end className={({isActive}) => cn({[styles.fadeOut]: isClosed, [styles.active]: isActive})}>
                <CgProfile/>
                <span>My Profile</span>
              </NavLink>
            </li>
            <li className={cn(styles.option, {[styles.fadeOut]: isClosed})}>
              <NavLink to='/news' end className={({isActive}) => cn({[styles.fadeOut]: isClosed, [styles.active]: isActive})}>
                <BiNews/>
                <span>News</span>
              </NavLink>

            </li>
            <li className={cn(styles.option, {[styles.fadeOut]: isClosed})}>
              <NavLink to='/' end className={({isActive}) => cn({[styles.fadeOut]: isClosed, [styles.active]: isActive})}>
                <BsFillChatDotsFill/>
                <span>Chat</span>
              </NavLink>

            </li>
            <li className={cn(styles.option, {[styles.fadeOut]: isClosed})}>
              <NavLink to='/friends' end className={({isActive}) => cn({[styles.fadeOut]: isClosed, [styles.active]: isActive})}>
                <FaUserFriends/>
                <span>Friends</span>
              </NavLink>

            </li>
            <li className={cn(styles.option, {[styles.fadeOut]: isClosed})}>
              <NavLink to='/photos' end className={({isActive}) => cn({[styles.fadeOut]: isClosed, [styles.active]: isActive})}>
                <BiPhotoAlbum/>
                <span>Photo</span>
              </NavLink>

            </li>
          </ul>
        </div>
        <div className={styles.bottomContent}>
          <ul className={styles.optionList}>
            <li className={cn(styles.option, {[styles.fadeOut]: isClosed})}>
              <NavLink to='/kek' className={({isActive}) => cn({[styles.fadeOut]: isClosed, [styles.active]: isActive})}>
                <BiLogOutCircle/>
                <span>Log Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
