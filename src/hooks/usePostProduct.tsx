import { UseMutationResult, useMutation } from "@tanstack/react-query"
import { CreatingProduct, IProduct } from "../types"
import Product from "../controllers/product"
import { AxiosResponse } from "axios"
import { useAppDispatch } from "../store"
import { addOneProduct } from "../reducers/product"
export const usePostProduct = (): UseMutationResult<AxiosResponse<IProduct, any>, unknown, CreatingProduct, unknown> => {
    const dispatch = useAppDispatch()
    return useMutation(['products'], (data: CreatingProduct) => Product.addOne(data), {
        onSuccess({ data }) {
            dispatch(addOneProduct(data))
        }
    })
}