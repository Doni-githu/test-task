import { useMutation } from "@tanstack/react-query"
import { useAppDispatch } from "../store"
import { CreatingProduct, IProduct } from "../types"
import Product from "../controllers/product"
import { updateOneProduct } from "../reducers/product"

interface UsePutProduct {
    id: number,
    data: CreatingProduct
}

export const usePutProduct = () => {
    const dispatch = useAppDispatch()
    return useMutation(['products'], ({ id, data }: UsePutProduct) => Product.updateOne(id, data), {
        onSuccess(data2) {
            let payloadData = data2.data as IProduct
            dispatch(updateOneProduct({ id: payloadData.id, data: payloadData }))
        }
    })
}