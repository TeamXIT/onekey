import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios, { AxiosError } from 'axios';
import API_BASE_URL from '../config/apiConfig';

interface ProductState {
    isBusy: boolean;
    error: string | null;
    success: boolean;
}

const initialState: ProductState = {
    isBusy: false,
    error: null,
    success: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setBusy(state, action: PayloadAction<boolean>) {
            state.isBusy = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        setSuccess(state, action: PayloadAction<boolean>) {
            state.success = action.payload;
        },
    },
});

export const { setBusy, setError, setSuccess } = productSlice.actions;

export const getPropertyType = (propertyType: string): AppThunk => async (dispatch) => {
    console.log(propertyType)
    dispatch(setBusy(true));
    try {
        const response = await axios.post(`${API_BASE_URL}/product/getPropertyType`, { propertyType });
        console.log(response.data);
        dispatch(setSuccess(true));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 404) {
                dispatch(setError('Resource not found. Please check your request.'));
            } else {
                handleError(error, dispatch);
            }
        } else {
            handleError(error, dispatch);
        }
    } finally {
        dispatch(setBusy(false));
    }
};

interface CreateProductRequest {
    projectName: string;
    propertySeller: string;
    propertyType: string;
    dynamic_properties: Array<{
        name: string;
        value_type: string;
        value: string;
    }>;
    owner_id: number;
}

export const createProduct = (productData: CreateProductRequest): AppThunk => async (dispatch) => {
    dispatch(setBusy(true));
    try {
        const propertyTypeResponse = await axios.get(`${API_BASE_URL}/product/get-property-type`, { propertyType: productData.propertyType });
        console.log(propertyTypeResponse)
        const dynamic_properties = propertyTypeResponse.data;
        
        const response = await axios.post(`${API_BASE_URL}/product/create`, {
            ...productData,
            dynamic_properties,
        });
        
        dispatch(setSuccess(true));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 404) {
                dispatch(setError('Resource not found. Please check your request.'));
            } else {
                handleError(error, dispatch);
            }
        } else {
            handleError(error, dispatch);
        }
    } finally {
        dispatch(setBusy(false));
    }
};

const handleError = (error: any, dispatch: any) => {
    console.error('An error occurred:', error);
    dispatch(setError('An error occurred. Please try again later.'));
};

export default productSlice.reducer;
