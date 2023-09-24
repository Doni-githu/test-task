import Product from "./controllers/product"
import { useEffect, useState } from "react"
import { IProduct } from "./types"
import { useAppDispatch, useAppSelector } from "./store"
import { addOneProduct, removeOneProduct, setProduct, setProducts, updateOneProduct } from "./reducers/product"
interface IQueryOptions {
    howMany: 'many' | 'one',
    id?: number,
}

export function useQuery(options: IQueryOptions) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.product.products)
    useEffect(() => {
        setIsLoading(true)
        if (options.howMany === "many") {
            if (selector.length === 0) {
                Product.getAll()
                    .then((res) => {
                        setIsLoading(false)
                        dispatch(setProducts(res.data))
                    })
            }
        }

        if (options.howMany === "one") {
            Product.getOne(options.id!)
                .then((res) => {
                    setIsLoading(false)
                    console.log(res.data);
                    
                    dispatch(setProduct(res.data))
                })
        }
    }, [])

    return isLoading
}

interface useMutateResponse {
    addProduct: (data: Omit<IProduct, "rating" | "id">) => void,
    removeProduct: (id: number) => void,
    updateProduct: (id: number, data: Omit<IProduct, "id" | "rating">) => void
}
export function useMutate(): useMutateResponse {
    const dispatch = useAppDispatch()
    const addProduct = (data: Omit<IProduct, "rating" | "id">) => {
        Product.addOne(data)
            .then((res) => {
                dispatch(addOneProduct(res.data))
            })
    }


    const removeProduct =  (id: number) => {
        Product.removeOne(id)
            .then((res) => {
                dispatch(removeOneProduct(id))
            })
    }
    
    const updateProduct = (id:number, data: Omit<IProduct, "id" | "rating">) => {
        Product.updateOne(id, data)
            .then((res) => {
                dispatch(updateOneProduct({
                    id: id,
                    data: res.data
                }))
            })
    }
    return {
        addProduct,
        removeProduct,
        updateProduct
    }
}