import React from 'react'
import { Routes, Route } from "react-router-dom"
import LoginView from '../../views/LoginView'
import ProductsView from '../../views/ProductsView'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginView />} />
            <Route path='/' element={<ProductsView />} />
        </Routes>
    )
}

export default AppRouter