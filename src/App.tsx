import MainPage from './pages/Main/Main'
import LoginPage from './pages/Login/Login'
import './assets/styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedPage from './hoc/ProtectedRoute'
import NewsPage from './pages/NewsPage/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/news'} element={<ProtectedPage component={<NewsPage/>}/>}/>
        <Route path={''} element={<ProtectedPage component={<MainPage/>}/>}/>

        <Route path='*' element={<p>There's nothing here: 404!</p>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
