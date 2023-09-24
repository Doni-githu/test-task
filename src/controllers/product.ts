import { IProduct } from "../types";
import axios from "./axios";

class Product {
    static getAll() {
        return axios.get<IProduct[]>('/products')
    }

    static getOne(id: number) {
        return axios.get<IProduct>(`/products/${id}`)
    }

    static addOne(data: Omit<IProduct, "id" | "rating">) {
        return axios.post<IProduct>('/products', data)
    }

    static updateOne(id: number, data: Omit<IProduct, "id" | "rating">) {
        return axios.put<IProduct>(`/products/${id}`, data)
    }


    static removeOne(id: number) {
        return axios.delete<IProduct>(`/products/${id}`)
    }


}

export default Product