import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IUser } from '../types';

interface AuthState {
    isAuth: boolean;
    isLoading: boolean
}

const initialState: AuthState = {
    isAuth: false,
    isLoading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLogin: (state: AuthState) => {
            state.isLoading = true
        },
        successLogin: (state: AuthState) => {
            state.isLoading = false
            state.isAuth = true
        }
    },
});

export const { startLogin, successLogin } = authSlice.actions;
export default authSlice.reducer;