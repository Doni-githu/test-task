import { IProduct } from '../../types'
import { useMutate } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setProduct } from '../../reducers/product'
interface ItemProps {
    product: IProduct
}
const Item = ({ product }: ItemProps) => {
    const { click } = useMutate()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return <>
        <div className="col">
            <div className="card shadow-sm">
                <img src={product.image} className="img" style={{ objectPosition: 'center center', objectFit: 'contain' }} height={'280px'} />
                <div className="card-body">
                    <p className="card-text fw-bold">{product.title}</p>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between flex-column align-items-start">
                        <small className="text-muted fs-5">{product.price}$</small>
                        <small className="text-muted fs-5">{product.category}</small>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group">
                        <button className='btn btn-primary' onClick={() => {
                            navigate("/" + product.id)
                        }}>Detail</button>
                        <button className='btn btn-danger' onClick={() => {
                            click({ id: product.id, method: 'DELETE' })
                        }}>Delete</button>
                        <button className='btn btn-success' onClick={() => {
                            dispatch(setProduct(product))
                            navigate(`/edit/${product.id}`)
                        }}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Item