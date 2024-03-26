import { createSlice } from '@reduxjs/toolkit'
import API_BASE_URL from '../config/apiConfig';
import axios from 'axios';

type AuthState = {
    //This is must for every slice to indicate screen status
    screen: {
        isBusy: boolean,
        error: string
    }
    //In data we add all API response values
    data: {
        AuthToken: string
        Username: string
    }
}

const initialState: AuthState = {
    screen: {
        isBusy: false,
        error: ''
    },
    data: {
        AuthToken: '',
        Username: ''
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
        setAuthentication: (state, { payload }) => {
            state.data.AuthToken = payload.data.token;
        },
        setUsername: (state, { payload }) => {
            state.data.Username = payload;
        },
    },
})

export const {
    setBusy,
    setError,
    setAuthentication,
    setUsername,
} = authSlice.actions

export const UserSignin = (_username: string, _password: string) => async (dispatch: any) => {
    dispatch(setBusy(true));
    let credentials = {
        username: _username,
        password: _password,
    }
    await axios.post(`${API_BASE_URL}/auth/sign-in`, credentials)
        .then((response) => {
            //console.log("UserSignin API Response: ", response);
            dispatch(setError(''));
            dispatch(setUsername(_username));
            dispatch(setAuthentication(response.data));
        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        })
    dispatch(setBusy(false));
}
export const UserSignup = (_username: string, _email: string, _password: string, _confirmPassword: string) => async (dispatch: any) => {
    dispatch(setBusy(true));
    let credentials = {
        username: _username,
        email: _email,
        password: _password,
        confirmPassword: _confirmPassword
    }
    await axios.post(`${API_BASE_URL}/auth/sign-up`, credentials)
        .then(() => {
            dispatch(setError(''));
            dispatch(setUsername(_username));
        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        });
    dispatch(setBusy(false));
}

export const RoleSelection = (_username: string, role_id_or_name:any) => async (dispatch: any) => {
    dispatch(setBusy(true));
    let credentials = {
        username: _username,
        roleIdOrroleName: role_id_or_name
        
    }
    await axios.post(`${API_BASE_URL}/auth/select-role`, credentials)
        .then((response) => {
            dispatch(setError(''));
            dispatch(setAuthentication(response.data));
        })
        .catch((error) => {
            const { data } = error.response;
            const result = JSON.parse(JSON.stringify(data));
            dispatch(setError(result.error));
        });
    dispatch(setBusy(false));
}
export default authSlice.reducer
