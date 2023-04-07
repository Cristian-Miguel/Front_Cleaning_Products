import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/LoginPage'
import Main from '../views/pages/MainPage'
import Management from '../views/pages/ManagementPage'
import Sell from '../views/pages/SellPage'
import Customer from '../views/pages/CustomerPage'
import Products from '../views/pages/ProductsPage'
import Inventory from '../views/pages/InventoryPage'
import Formula from '../views/pages/FormulaPage'
import NewProduct from '../views/pages/NewProductPage'
import RawMaterial from '../views/pages/RawMaterialPage'
import Provider from '../views/pages/ProviderPage'
import Users from '../views/pages/UsersPage'
import Navbar from '../ui/Components/Navbar'

const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="Login" element={<Login/>} />
                <Route path="/"     element={<Main/>} />

                <Route path="Home" element={<Main/>} />
                <Route path="Management" element={<Management/>} />

                <Route path="Sell"  element={<Sell/>} />
                <Route path="Customer"  element={<Customer/>} />

                <Route path="Products" element={<Products/>} />
                <Route path="Inventory" element={<Inventory/>} />

                <Route path="Formula" element={<Formula/>} />
                <Route path="New_product" element={<NewProduct/>} />

                <Route path="Raw_material" element={<RawMaterial/>} />
                <Route path="Provider" element={<Provider/>} />

                <Route path="Users" element={<Users/>} />
            </Routes>
        </>
    )
}

export default AppRouter;