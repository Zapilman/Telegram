import { FC } from 'react'

import ActivityBar from '../../layouts/ActivityBar/ActivityBar'
import ChatArea from '../../layouts/ChatArea/ChatArea'
import { io } from 'socket.io-client'
import LayOutWithSideBar from '../../layouts/LayOutWithSideBar/LayOutWithSideBar';

const MainPage: FC = () => {
  const socket = io('http://localhost:3001', {
    reconnection: false,
  })
  return (
    <LayOutWithSideBar>
      <ActivityBar/>
      <ChatArea socket={socket}/>
    </LayOutWithSideBar>
  )
}

export default MainPage
