import { FC } from 'react'
import cn from 'classnames'
import styles from './ActivityBar.module.scss'
import { DialogType } from '../../types/DialogType';
import DialogItem from '../../components/DialogItem/DialogItem';
import { useNavigate } from 'react-router-dom';


interface Props {
}

const ActivityBar: FC<Props> = ({}: Props) => {
  const fakeData: DialogType[] = [
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message', newMessagesCount: 3},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'no messages yet'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'no messages yet'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'no messages yet'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'},
    {name: 'telegram', picture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png', messagePreview: 'message'}
  ]


  return (
    <div className={cn(styles.wrapper)}>
      <ul className={styles.dialogList}>
        {fakeData.map((dialog: DialogType, index: number) => {
          return <DialogItem dialog={dialog} key={index}/>
        })}
      </ul>
    </div>
  )
}

export default ActivityBar
