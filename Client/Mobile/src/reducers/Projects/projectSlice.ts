import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API_BASE_URL from '../config/apiConfig';

type ProductState = {
    screen: {
        isBusy: boolean,
        error: string
    }
    data: {
        products: any[]
        productById: any
    }
}

const initialState: ProductState = {
    screen: {
        isBusy: false,
        error: ''
    },
    data: {
        products: [],
        productById: {}
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
        setProduuctById: (state, { payload }) => {
            state.data.productById = payload;
        },

    },
})

export const {
    setBusy,
    setError,
    setProducts,
    setProduuctById,
} = productSlice.actions


export const fetchAllProducts = (recLimit = 10, pageNumber = 1) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.get(`${API_BASE_URL}/products/get-all?limit=${recLimit}&page=${pageNumber}`)
        .then((response) => {
            console.log('FetchAll api:', response)
            dispatch(setError(''));
            dispatch(setProducts(response.data));
        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}

export const fetchProductById = (productId: Number) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.get(`${API_BASE_URL}/products/get-by-id${productId}`)
        .then((response) => {
            console.log('FetchById api:', response)
            dispatch(setError(''));
            dispatch(setProduuctById(response.data));
        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}

export const createNewProduct = (productData: JSON) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.post(`${API_BASE_URL}/product/create`, productData)
        .then((response) => {
            console.log('Create api:', response.data)
            dispatch(setError(''));
        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}

export const updateExistingProduct = (updatedProductData: JSON) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.put(`${API_BASE_URL}/products/update`, updatedProductData)
        .then((response) => {
            console.log('Update api:', response)
            dispatch(setError(''));

        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}

export const deleteExistingProduct = (productId: Number) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.delete(`${API_BASE_URL}/products/delete?product_id=${productId}`)
        .then((response) => {
            console.log('Delete api:', response)
            dispatch(setError(''));

        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}

export default productSlice.reducer
