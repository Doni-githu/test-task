import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { IProduct } from "../types"
import Product from "../controllers/product"
import { useAppDispatch } from "../store"
import { setProduct } from "../reducers/product"

export function useProduct(id: number): UseQueryResult<IProduct, unknown> {
    const dispatch = useAppDispatch()
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => Product.getOne(id),
        retry: 5,
        select: (data) => data.data,
        enabled: !!id,
        onSuccess(data) {
            dispatch(setProduct(data))
        }
    })
}