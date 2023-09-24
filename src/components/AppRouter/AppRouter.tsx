import { Routes, Route } from "react-router-dom"
import LoginView from '../../views/LoginView'
import ProductsView from '../../views/ProductsView'
import AddProductView from '../../views/AddProductView'
import ProductView from '../../views/ProductView'
import EditProductView from '../../views/EditProductView'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginView />} />
            <Route path='/' element={<ProductsView />} />
            <Route path='/add' element={<AddProductView />} />
            <Route path='/:id' element={<ProductView />} />
            <Route path='/edit/:id' element={<EditProductView />} />
        </Routes>
    )
}

export default AppRouter