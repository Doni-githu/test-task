import { useProduct } from '../../hooks/useProduct'
import { useParams } from 'react-router-dom'
import Loader from '../ui/Loader'
import { useAppSelector } from '../../store'

const Product = () => {
    const params = useParams()
    const id = Number(params.id)
    const {isFetching} = useProduct(id)
    const product = useAppSelector((state) => state.product.product)
    if (isFetching && !product) {
        return <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '5rem' }}>
            <Loader />
        </div>
    }
    

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