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
        AuthToken:string
        Success:boolean
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
        AuthToken:'',
        Success: false
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
        setSuccess: (state, { payload }) => {
            state.data.Success = payload;
    },
}})

export const {
    setBusy,
    setError,
    setProducts,
    setProduuctById,
    setSuccess
} = productSlice.actions

export const fetchAllProducts = (recLimit = 10, pageNumber = 1) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.get(`${API_BASE_URL}/product/get-all?limit=${recLimit}&page=${pageNumber}`)
        .then((response) => {
            console.log('FetchAll api:', response)
            dispatch(setError(''));
            dispatch(setProducts(response.data));
        })
        .catch((error) => {
            console.log(error)
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}

export const fetchProductById = (productId: Number) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.get(`${API_BASE_URL}/product/get-by-id${productId}`)
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

export const createNewProduct = (productData: JSON,authToken: string, userId: any) => async (dispatch: any) => {
    productData.owner_id = userId;
    console.log(userId);
    console.log("createNewProduct payload: ", productData);
    dispatch(setBusy(true));
       await axios.post(`${API_BASE_URL}/product/create`, productData, {
        headers: {
          Authorization: authToken,
        },
      }).then((response) => {
            console.log('Create api:', response.data);
            dispatch(setError(''));
            dispatch(setSuccess(true));
        })
        .catch((error) => {
            console.log('Error:', error)
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}
export const updateExistingProduct = (updatedProductData: JSON) => async (dispatch: any) => {
    dispatch(setBusy(true));
    await axios.put(`${API_BASE_URL}/product/update`, updatedProductData)
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
    await axios.delete(`${API_BASE_URL}/product/delete?product_id=${productId}`)
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
