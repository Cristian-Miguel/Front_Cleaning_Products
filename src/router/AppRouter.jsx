import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/LoginPage'
import Main from '../views/pages/MainPage'
import Sell from '../views/pages/SellPage'
import Admin from '../views/pages/AdminPage'
import Navbar from '../ui/Components/Navbar'

const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="Login" element={<Login/>} />
                <Route path="/"     element={<Main/>} />
                <Route path="Home" element={<Main/>} />
                <Route path="Management" element={<Admin/>} />

                <Route path="Sell"  element={<Sell/>} />
                <Route path="Customer"  element={<Sell/>} />

                <Route path="Admin" element={<Admin/>} />
                <Route path="Management" element={<Admin/>} />
            </Routes>
        </>
    )
}

export default AppRouter;