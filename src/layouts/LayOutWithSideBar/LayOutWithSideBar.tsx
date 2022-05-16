import { FC, PropsWithChildren } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './LayOutWithSideBar.module.scss';

interface Props {

}

const LayOutWithSideBar: FC<PropsWithChildren<Props>> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Sidebar/>
      {children}
    </div>
  )
}
export default LayOutWithSideBar;