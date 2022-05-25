import MainPage from './pages/Main/Main'
import LoginPage from './pages/Login/Login'
import './assets/styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedPage from './hoc/ProtectedRoute'
import NewsPage from './pages/NewsPage/NewsPage';
import { AuthProvider } from './auth/authContext';
import LayOutWithSideBar from './layouts/LayOutWithSideBar/LayOutWithSideBar';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={'/'} element={<LayOutWithSideBar/>}>
            <Route index element={<ProtectedPage component={<MainPage/>}/>}/>
            <Route path={'/news'} element={<ProtectedPage component={<NewsPage/>}/>}/>
          </Route>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path='*' element={<p>There's nothing here: 404!</p>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
