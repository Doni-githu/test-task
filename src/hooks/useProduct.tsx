import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { IProduct } from "../types"
import Product from "../controllers/product"

export function useProduct(id: number): UseQueryResult<IProduct, unknown> {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => Product.getOne(id),
        retry: 5,
        select: (data) => data.data,
        enabled: !!id,
    })
}