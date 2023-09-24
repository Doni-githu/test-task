import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { ILoginData } from '../../types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useCookies } from "react-cookie"
import Auth from '../../controllers/auth'
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from '../../store'
import { startLogin, successLogin } from '../../reducers/auth'

const schame = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
})

const Login = () => {
    const [cookies, setCookie] = useCookies(['token'])
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: yupResolver(schame)
    })

    const submit: SubmitHandler<ILoginData> = async (data: ILoginData) => {
        dispatch(startLogin())
        const response = await Auth.login(data)
        setCookie('token', response.data.token)
        dispatch(successLogin())
        navigate('/')
    }

    const error: SubmitErrorHandler<ILoginData> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <div className="form-floating">
                <input type="text" className={`form-control ${errors.username?.message ? 'is-invalid': ''}`} id='username' {...register('username', { required: true })} />
                <label htmlFor="username">Username: </label>
                <p className='error'>{errors.username?.message}</p>
            </div>
            <div className="form-floating">
                <input type="password" className='form-control' id='password' {...register('password', { required: true })} />
                <label htmlFor="password">Password: </label>
                <p className='error'>{errors.password?.message}</p>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    )
}

export default Login