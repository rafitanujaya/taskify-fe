import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './styles/index.css'
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import App from './layouts/app';
import DashboardPage from './pages/DashboardPage';
import TaskboardPage from './pages/TaskboardPage';
import ChatPage from './pages/ChatPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='login' element={<LoginPage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='app' element={<App/>}>
          <Route path='' element={<DashboardPage/>}/>
          <Route path='taskboard' element={<TaskboardPage/>}/>
          <Route path='chatbot' element={<ChatPage/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
