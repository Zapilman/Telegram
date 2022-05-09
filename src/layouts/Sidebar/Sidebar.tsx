import { FC } from 'react'
import cn from 'classnames'
import styles from './Sidebar.module.scss'

interface Props {}
const Sidebar: FC<Props> = ({}: Props) => {
	return <div className={cn(styles.sidebarWrapper)}>sidebar</div>
}

export default Sidebar
