import Product from "./controllers/product"
import { useEffect } from "react"
import { IProduct } from "./types"
import { useAppDispatch, useAppSelector } from "./store"

import { addOneProduct, removeOneProduct, setProduct, setProducts, updateOneProduct } from "./reducers/product"
interface IQueryOptions {
    howMany: 'many' | 'one',
    id?: number,
}

export function useQuery(options: IQueryOptions) {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.product.products)
    useEffect(() => {
        if (options.howMany === "many") {
            if (selector.length === 0) {
                Product.getAll()
                    .then((res) => {
                        dispatch(setProducts(res.data))
                    })
            }
        }

        if (options.howMany === "one") {
            Product.getOne(options.id!)
                .then((res) => {
                    dispatch(setProduct(res.data))
                })
        }
    }, [])
}


interface IUseMutateProps {
    data?: Omit<IProduct, "rating" | "id">,
    id?: number,
    method: 'PUT' | "POST" | "DELETE"
}

interface useMutateResponse {
    click: (options: IUseMutateProps) => void
}

export function useMutate(): useMutateResponse {
    const dispatch = useAppDispatch()

    const click = (options: IUseMutateProps): void => {
        if (options.method === "POST") {
            Product.addOne(options.data!)
                .then((res) => {
                    dispatch(addOneProduct(res.data))
                })
            return
        }

        if (options.method === "DELETE") {
            Product.removeOne(options.id!)
                .then(() => {
                    dispatch(removeOneProduct(options.id!))
                })
            return
        }

        if (options.method === "PUT") {
            Product.updateOne(options.id!, options.data!)
                .then((res) => {
                    dispatch(updateOneProduct({
                        id: options.id!,
                        data: res.data
                    }))
                })

            return
        }
    }

    return {
        click
    }
}