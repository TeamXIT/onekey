import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../config/apiConfig';

type ProductState = {
    screen: {
        isBusy: boolean,
        error: string
    },
    data: {
        products: any[],
        productById: any,
        success: boolean
    }
}

const initialState: ProductState = {
    screen: {
        isBusy: false,
        error: '',
    },
    data: {
        products: [],
        productById: {},
        success: false
    }
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setBusy: (state, { payload }) => {
            state.screen.isBusy = payload;
        },
        setError: (state, { payload }) => {
            state.screen.error = payload;
        },
        setProducts: (state, { payload }) => {
            state.data.products = payload;
        },
        setProductById: (state, { payload }) => {
            state.data.productById = payload;
        },
        setSuccess: (state, { payload }) => {
            state.data.success = payload;
        },
    }
})

export const {
    setBusy,
    setError,
    setProducts,
    setProductById,
    setSuccess
} = productSlice.actions

export default productSlice.reducer
