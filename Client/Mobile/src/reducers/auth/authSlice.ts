import { Message } from 'react-native-gifted-chat';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import API_BASE_URL from '../config/apiConfig';
import axios from 'axios';
import { AppThunk } from '../store';

type AuthState = {
    screen: {
        isBusy: boolean;
        error: string;
    };
    data: {
        MobileNumber: string;
        AuthToken: string;
        UserType: string;
        UserId: string;
        isNewUser: boolean;
        responsePhoneNumber: string;
    };
};

const initialState: AuthState = {
    screen: {
        isBusy: false,
        error: ''
    },
    data: {
        MobileNumber: '',
        AuthToken: '',
        UserType: '',
        UserId: '',
        isNewUser: false,
        responsePhoneNumber: ''
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setBusy: (state, action: PayloadAction<boolean>) => {
            state.screen.isBusy = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.screen.error = action.payload;
        },
        setAuthentication: (state, action: PayloadAction<string>) => {
            state.data.AuthToken = action.payload;
        },
        setMobileNumber: (state, action: PayloadAction<string>) => {
            state.data.MobileNumber = action.payload;
        },
        setUserId: (state, action: PayloadAction<string>) => {
            state.data.UserId = action.payload;
        },
        setUserType: (state, action: PayloadAction<string>) => {
            state.data.UserType = action.payload;
        },
        setIsNewUser: (state, action: PayloadAction<boolean>) => {
            state.data.isNewUser = action.payload;
        },
        setResponsePhoneNumber: (state, action: PayloadAction<string>) => {
            state.data.responsePhoneNumber = action.payload;
        }
    }
});

export const {
    setBusy,
    setError,
    setAuthentication,
    setMobileNumber,
    setUserId,
    setUserType,
    setIsNewUser,
    setResponsePhoneNumber
} = authSlice.actions;

const handleError = (error: any, dispatch: any) => {
    if (axios.isAxiosError(error)) {
        console.error(error)
        if (error.response) {
            console.log(error);
            // Server responded with a status code outside of 2xx
            const errorMessage = error.response.data?.response.Message || 'An error occurred';
            dispatch(setError(errorMessage));
        } else {
            // Request was made but no response received
            dispatch(setError('Network Error: Please check your internet connection'));
        }
    }
};


export const sendOtp = (mobileNumber: string): AppThunk => async dispatch => {
    dispatch(setBusy(true)); // Set loading state

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign-up/sendOtp`, { mobileNumber });
        console.log(response.data)

        // Handle successful response
        dispatch(setError('')); // Clear any previous errors
        dispatch(setMobileNumber(mobileNumber)); // Store mobile number in state
        dispatch(setIsNewUser(response.data.isNewUser)); // Set isNewUser flag
        dispatch(setResponsePhoneNumber(mobileNumber)); // Store response phone number in state
    } catch (error) {
        handleError(error, dispatch); // Handle Axios errors
    } finally {
        dispatch(setBusy(false)); // Reset loading state
    }
};

export const verifyOtp = (otp:string) => async (dispatch, getState) => {
    dispatch(setBusy(true));
    try {
        const mobileNumber = getState().auth.data.responsePhoneNumber;
        console.log(mobileNumber,otp)
        const response = await axios.post(`${API_BASE_URL}/auth/sign-up/verifyOtp`, { mobileNumber, otp });
        dispatch(setIsNewUser(true));
        dispatch(setError(''));
        dispatch(setBusy(false));
        return response;
    } catch (error) {
        handleError(error, dispatch);
        dispatch(setBusy(false));
        throw error;
    }
};


export const setPassword = ( password: string, confirmPassword: string): AppThunk => async(dispatch, getState) => {
    dispatch(setBusy(true));
    try {
        const mobileNumber = getState().auth.data.responsePhoneNumber;
        await axios.put(`${API_BASE_URL}/auth/sign-up/set-password`, { mobileNumber, password, confirmPassword });
        dispatch(setError(''));
    } catch (error) {
        handleError(error, dispatch);
    }
    dispatch(setBusy(false));
};

export const selectUserRole = ( roleIdOrroleName: any): AppThunk => async(dispatch, getState)=> {
    dispatch(setBusy(true));
    try {
        const mobileNumber = getState().auth.data.responsePhoneNumber;
        const response = await axios.put(`${API_BASE_URL}/auth/select-role`, { mobileNumber, roleIdOrroleName });
        dispatch(setError(''));
        dispatch(setUserType(roleIdOrroleName));
    } catch (error) {
        console.error('Error selecting role:', error);
        dispatch(setError('Failed to select role'));
    }
    dispatch(setBusy(false));
};

export const signInWithPassword = (mobileNumber: string, password: string): AppThunk => async dispatch => {
    dispatch(setBusy(true));
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, { mobileNumber, password });

        // Handle successful sign-in
        dispatch(setError(''));
        dispatch(setAuthentication(response.data.token));
        dispatch(setUserId(response.data.user_id));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;

            if (axiosError.response && axiosError.response.status === 404) {
                dispatch(setError('User not found. Please check your credentials.'));
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
export const signInWithOtp = ( otp: string): AppThunk => async (dispatch,getState) => {
    dispatch(setBusy(true));
    try {
        const mobileNumber = getState().auth.data.responsePhoneNumber;
        const fullNumber = mobileNumber.number.toString();

        const response = await axios.post(`${API_BASE_URL}/auth/sign-in/verifyOtp`, { fullNumber, otp });
        dispatch(setError(''));
        dispatch(setAuthentication(response.data.token));
        dispatch(setUserId(response.data.user_id));
    } catch (error) {
        handleError(error, dispatch);
    }
    dispatch(setBusy(false));
};

export default authSlice.reducer;
function getState() {
    throw new Error('Function not implemented.');
}

