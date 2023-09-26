import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { IProduct } from "../types"
import Product from "../controllers/product"
import { useAppDispatch } from "../store"
import { setProducts } from "../reducers/product"

export function useProducts(): UseQueryResult<IProduct[], null> {
    const dispatch = useAppDispatch()
    return useQuery({
        queryKey: ['products'],
        queryFn: () => Product.getAll(),
        select: (result) => result.data,
        cacheTime: 5000,
        onSuccess(data){
            dispatch(setProducts(data))
        }
    })
}
