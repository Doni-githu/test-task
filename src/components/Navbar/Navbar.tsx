import { Link, useNavigate } from "react-router-dom"
import { useAppSelector } from '../../store'
import { useCookies } from 'react-cookie'
const Navbar = () => {
    const navigate = useNavigate()
    const removeCookie = useCookies(['token'])[2]
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 py-3 px-5 mb-4 border-bottom">
            <h1 onClick={() => {
                if (isAuth) {
                    navigate('/')
                }
            }}>Brand</h1>

            <nav className="d-inline-flex mt-2 gap-4 mt-md-0 ms-md-auto">
                {!isAuth ?
                    <Link className="py-2 link-body-emphasis text-decoration-none" to='/login'>Login</Link>
                    :
                    <>
                        <Link className='py-2 link-body-emphasis text-decoration-none' to={'/Add'}>Add</Link>
                        <Link className='py-2 link-body-emphasis text-decoration-none' to={'/'}>Products</Link>
                        <a className='py-2 link-body-emphasis text-decoration-none text-danger' onClick={() => {
                            removeCookie('token')
                            navigate('/login')
                        }}>Log out</a>

                    </>}
            </nav>
        </div>
    )
}

export default Navbar