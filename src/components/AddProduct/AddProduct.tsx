import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { IProduct } from '../../types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import { useMutate } from '../../hooks'



const schame = yup.object({
    title: yup.string().required("Title is required"),
    price: yup.string().required("Price is required"),
    description: yup.string().required("Description is required"),
    image: yup.string().required("Image is required"),
    category: yup.string().required("Category is required"),
})

interface MyFormData extends Omit<IProduct, "id" | "rating"> {

}

const AddProduct = () => {
    const navigate = useNavigate()
    const { addProduct } = useMutate()
    const { register, handleSubmit, formState: { errors } } = useForm<MyFormData>({
        defaultValues: {},
        resolver: yupResolver(schame)
    })

    const submit: SubmitHandler<MyFormData> = async (data: MyFormData) => {
        addProduct(data)
        navigate('/')
    }

    const error: SubmitErrorHandler<MyFormData> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <div className="form-floating">
                <input type="text" className={`form-control ${errors.title?.message ? 'is-invalid' : ''}`} id='username' {...register('title', { required: true })} />
                <label htmlFor="username">Title: </label>
                <p className='error'>{errors.title?.message}</p>
            </div>
            <div className="form-floating">
                <textarea
                    className={`form-control ${errors.description?.message ? 'is-invalid' : ''}`}
                    id='description'
                    placeholder=''
                    {...register('description', { required: true })}
                ></textarea>
                <label htmlFor="description">Description: </label>
                <p className='error'>{errors.title?.message}</p>
            </div>
            <div className="form-floating">
                <input
                    type="number"
                    className={`form-control ${errors.price?.message ? 'is-invalid' : ''}`}
                    id='price'
                    {...register('price', { required: true })}
                />
                <label htmlFor="price">Price: </label>
                <p className='error'>{errors.price?.message}</p>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className={`form-control ${errors.image?.message ? 'is-invalid' : ''}`}
                    id='Image' {...register('image', { required: true })} />
                <label htmlFor="Image">Image: </label>
                <p className='error'>{errors.image?.message}</p>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className={`form-control ${errors.category?.message ? 'is-invalid' : ''}`}
                    id='Category' {...register('category', { required: true })} />
                <label htmlFor="Image">Category: </label>
                <p className='error'>{errors.category?.message}</p>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    )
}

export default AddProduct