import { FC, PropsWithChildren } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './LayOutWithSideBar.module.scss';
import { Outlet } from 'react-router-dom';



const LayOutWithSideBar: FC = () => {
  return (
    <div className={styles.layout}>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}
export default LayOutWithSideBar;