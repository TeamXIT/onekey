import { createSlice } from '@reduxjs/toolkit'
import API_BASE_URL from '../config/apiConfig';
import axios from 'axios';

type AuthState = {
    //This is must for every slice to indicate screen status
    screen: {
        isBusy: boolean,
        error: string
    }
    //In data we add all API responce values
    data: {
        SigninAuthToken: string
        SignupAuthToken: string
    }
}

const initialState: AuthState = {
    screen: {
        isBusy: false,
        error: ''
    },
    data: {
        SigninAuthToken: '',
        SignupAuthToken: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setBusy: (state, { payload }) => {
            state.screen.isBusy = payload;
        },
        setError: (state, { payload }) => {
            state.screen.error = payload;
        },
        setSigninAuthentication: (state, { payload }) => {
            state.data.SigninAuthToken = payload;
        },
        setSignupAuthentication: (state, { payload }) => {
            state.data.SignupAuthToken = payload;
        },
    },
})

export const {
    setBusy,
    setError,
    setSigninAuthentication,
    setSignupAuthentication,
} = authSlice.actions

export const UserSignin = (_username: string, _password: string) => async (dispatch: any) => {
    dispatch(setBusy(true));
    try {
        let credentials = {
            username: _username,
            password: _password,
        }
        const responce = await axios.post(`${API_BASE_URL}/auth/sign-in`, credentials);
        if (responce.status === 200) {
            dispatch(setError(''));
            dispatch(setSigninAuthentication(responce.data));
        }
        else {
            dispatch(setError(responce.data));
        }
        dispatch(setBusy(false));
    } catch (error) {
        dispatch(setBusy(false));
    }
}
export const UserSignup = (_username: string, _email: string, _password: string, _confirmPassword: string) => async (dispatch: any) => {
    dispatch(setBusy(true));
    try {
        let credentials = {
            username: _username,
            email: _email,
            password: _password,
            confirmPassword: _confirmPassword
        }
        const responce = await axios.post(`${API_BASE_URL}/auth/sign-up`, credentials)
        if (responce.status === 200) {
            dispatch(setError(''));
            dispatch(setSignupAuthentication(responce.data));
        }
        else {
            dispatch(setError(responce.data));
        }
        dispatch(setBusy(false));
    } catch (error) {
        dispatch(setBusy(false));
    }
}


export default authSlice.reducer

