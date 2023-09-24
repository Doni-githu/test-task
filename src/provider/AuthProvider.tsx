import { ReactNode, useEffect } from "react"
import { useAppDispatch } from "../store"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import Navbar from "../components/Navbar/Navbar"
import { successLogin } from "../reducers/auth"
interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [cookies] = useCookies(['token'])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!cookies.token) {
            navigate('/login', { replace: true })
        } else {
            dispatch(successLogin())
        }
    }, [])

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default AuthProvider