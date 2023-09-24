import Product from "./controllers/product"
import { useEffect, useState } from "react"
import { IProduct } from "./types"
import { useAppDispatch } from "./store"
import { setProduct, setProducts } from "./reducers/product"
interface IQueryOptions {
    howMany: 'many' | 'one',
    id?: number,
}

export function useQuery(options: IQueryOptions) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        setIsLoading(true)
        if (options.howMany === "many") {
            Product.getAll()
                .then((res) => {
                    setIsLoading(false)
                    dispatch(setProducts(res.data))
                })
        }

        if (options.howMany === "one") {
            // Product.getOne(options.id!)
            //     .then((res) => {
            //         setIsLoading(false)
            //         dispatch(setProduct(res.data))
            //     })
        }
    }, [])

    return isLoading
}