import { IProduct } from "../types";
import axios from "./axios";


const Product = {
    getAll() {
        return axios.get('/products')
    },
}

// class Product {
//     static getAll() {
//         return axios.get<IProduct[]>('https://fakestoreapi.com/products')
//     }

//     static getOne(id: number) {
//         return axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
//     }

//     static addOne() {
//         return axios.post('https://fakestoreapi.com/products')
//     }
// }

export default Product