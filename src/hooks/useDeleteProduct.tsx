import { useMutation } from "@tanstack/react-query"
import { useAppDispatch } from "../store"
import Product from "../controllers/product"
import { removeOneProduct } from "../reducers/product"

export const useDeleteProduct = () => {
    const dispatch = useAppDispatch()
    return useMutation(['products'], (id: number) => Product.removeOne(id), {
        onSuccess({ data }) {
            dispatch(removeOneProduct(data.id))
        }
    })
}