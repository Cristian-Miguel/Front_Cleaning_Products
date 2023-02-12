import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/LoginPage'
import Main from '../views/pages/MainPage'
import Sell from '../views/pages/SellPage'
import Admin from '../views/pages/AdminPage'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="Login" element={<Login/>} />
            <Route path="/"     element={<Main/>} />
            <Route path="Sell"  element={<Sell/>} />
            <Route path="Admin" element={<Admin/>} />
        </Routes>
    )
}

export default AppRouter;