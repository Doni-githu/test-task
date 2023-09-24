import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../types';

interface ProductState {
    products: IProduct[];
    product: IProduct | null,
    isLoading: boolean
}

const initialState: ProductState = {
    product: null,
    products: [],
    isLoading: false
};

interface UpdatePayloadAction {
    id: number,
    data: IProduct
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state: ProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
        setProduct: (state: ProductState, action: PayloadAction<IProduct>) => {
            state.product = action.payload
        },
        addOneProduct: (state: ProductState, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload]
        },
        removeOneProduct: (state: ProductState, action: PayloadAction<number>) => {
            const filtered = state.products.filter(item => item.id !== action.payload)
            state.products = filtered
        },
        updateOneProduct: (state: ProductState, action: PayloadAction<UpdatePayloadAction>) => {
            const newProducts = state.products.map((item) => {
                if(item.id === action.payload.id){
                    return action.payload.data
                }
                return item
            })
            state.products = newProducts
        }
    },
});

export const { setProduct, setProducts, addOneProduct, removeOneProduct, updateOneProduct} = productSlice.actions;
export default productSlice.reducer;