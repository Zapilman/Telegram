import { FC } from 'react';
import styles from './DialogItem.module.scss';
import { DialogType } from '../../types/DialogType';
import { useNavigate } from 'react-router-dom';

interface Props {
  dialog: DialogType,
}


const DialogItem: FC<Props> = ({dialog}: Props): JSX.Element => {
  const navigate = useNavigate();

  return <li className={styles.dialogInfo} onClick={() => navigate('/#qweqweqw')}>
    <div className={styles.dialogPicture}>
      <img src={dialog.picture} alt="user photo"/>
    </div>
    <div className={styles.dialogContent}>
      <div className={styles.info}>
        <h6 className={styles.name}>{dialog.name}</h6>
        <span className={styles.messageTimeStat}>16:50</span>
      </div>
      <div className={styles.additionalInfo}>
        <p className={styles.messagePreview}>{dialog.messagePreview}</p>
        <span className={styles.newMessagesCount}>4</span>
      </div>
    </div>
  </li>
};

export default DialogItem;