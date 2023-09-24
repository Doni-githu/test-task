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

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state:ProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
        setProduct: (state: ProductState, action: PayloadAction<IProduct>) => {
            state.product = action.payload
        }
    },
});

export const { setProduct, setProducts} = productSlice.actions;
export default productSlice.reducer;