import React, { useEffect } from 'react'
import { useQuery } from '../../hooks'
import { useAppDispatch } from '../../store'
import { setProducts } from '../../reducers/product'
import Product from '../../controllers/product'
const Products = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        Product.getAll()
            .then((res) => {
                dispatch(setProducts(res.data))
                console.log(res.data);
            })
    }, [])


    return (
        <h1>All</h1>
    )
}

export default Products

function dispatch(arg0: { payload: import("../../types").IProduct[]; type: "product/setProducts" }) {
    throw new Error('Function not implemented.')
}
