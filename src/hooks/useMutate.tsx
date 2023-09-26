import Product from "../controllers/product"
import { addOneProduct, removeOneProduct, updateOneProduct } from "../reducers/product"
import { useAppDispatch } from "../store"
import { IProduct } from "../types"

interface IUseMutateProps {
    data?: Omit<IProduct, "rating" | "id">,
    id?: number,
    method: 'PUT' | "POST" | "DELETE" | "GET" | "GET_ONE"
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
