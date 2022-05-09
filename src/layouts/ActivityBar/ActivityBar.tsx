import { FC } from 'react'
import cn from 'classnames'
import styles from './ActivityBar.module.scss'

interface Props {}
const ActivityBar: FC<Props> = ({}: Props) => {
	return (
		<div className={cn(styles.wrapper)}>
			<p>ActivityBar</p>
		</div>
	)
}

export default ActivityBar
