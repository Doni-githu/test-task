import { useProducts } from '../../hooks/useProducts'
import { useAppSelector } from '../../store'
import Item from '../Item/Item'
import Loader from '../ui/Loader'

const Products = () => {
    const { isFetching } = useProducts()
    const data = useAppSelector((state) => state.product.products)
    if (isFetching) {
        return <Loader />
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {data && data.map((item) => (
                    <Item key={item.id} product={item} />
                ))}
            </div>
        </>
    )
}

export default Products