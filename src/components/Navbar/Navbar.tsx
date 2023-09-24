import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from '../../store'
const Navbar = () => {
    const navigate = useNavigate()
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 py-3 px-5 mb-4 border-bottom">
            <h1 onClick={() => {
                navigate('/')
            }}>Brand</h1>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {!isAuth ?
                    <Link className="py-2 link-body-emphasis text-decoration-none" to='/login'>Login</Link>
                    :
                    <Link className='py-2 link-body-emphasis text-decoration-none' to={'/'}>Products</Link>}
            </nav>
        </div>
    )
}

export default Navbar