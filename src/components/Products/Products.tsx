import { useQuery } from '../../hooks'
import { useAppSelector } from '../../store'
import Item from '../Item/Item'
const Products = () => {
    useQuery({ howMany: 'many' })
    const products = useAppSelector((state) => state.product.products)

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {products.map((item) => (
                    <Item key={item.id} product={item} />
                ))}
            </div>
        </>
    )
}

export default Products