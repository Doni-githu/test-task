import { useAppSelector } from '../../store'
import { useQuery } from '../../hooks'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams()
    const id = Number(params.id)
    useQuery({
        howMany: 'one',
        id
    })

    const product = useAppSelector((state) => state.product.product)
    return (
        <>
            <div className='text-center mb-5'>
                <img src={product?.image} alt="" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '12px' }}>
                <h1 className="text-center mt-3">{product?.title}</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className='text-center'>
                        <p>{product?.description}</p>
                    </div>
                    <div className='text-center'>
                        <p>{product?.price}</p>
                        <p>{product?.category}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product