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
        SignupUsername: string
    }
}

const initialState: AuthState = {
    screen: {
        isBusy: false,
        error: ''
    },
    data: {
        SigninAuthToken: '',
        SignupUsername: ''
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
            console.log(payload)
        },
        setSigninAuthentication: (state, { payload }) => {
            state.data.SigninAuthToken = payload;
            
        },
        setSignupUsername: (state, { payload }) => {
            state.data.SignupUsername = payload;
            console.log(payload)
        },
    },
})

export const {
    setBusy,
    setError,
    setSigninAuthentication,
    setSignupUsername,
} = authSlice.actions

export const UserSignin = (_username: string, _password: string) => async (dispatch: any) => {
    dispatch(setBusy(true));
    try {
        let credentials = {
            username: _username,
            password: _password,
        }
        console.log(credentials)
        const responce = await axios.post(`${API_BASE_URL}/auth/sign-in`, credentials);
        if (responce.status === 200) {
            dispatch(setSignupUsername(_username));
            dispatch(setError(''));
            dispatch(setSigninAuthentication(responce.data));
        }
        else {
            dispatch(setError(responce.data.error));
        }
        dispatch(setBusy(false));
    } catch (error) {
        dispatch(setBusy(false));
         dispatch(setError('An error occurred while signing in.'));
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
            dispatch(setSignupUsername(responce.data)); 
           
            if (responce.data.success) {
                navigation.navigate('verification');
            } else {
                dispatch(setError('Username or email already exists.'));
            }
        } else {
            dispatch(setError(responce.data.error));
        }
        dispatch(setBusy(false));
    } catch (error) {
        dispatch(setBusy(false));
        dispatch(setError('An error occurred while signing up.'));
    }
}

export default authSlice.reducer

