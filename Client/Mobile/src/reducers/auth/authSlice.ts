import { createSlice } from '@reduxjs/toolkit'
import API_BASE_URL from '../config/apiConfig';
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export interface AuthState {
    value: number
    loading:boolean
    isAuthenticated:boolean
    isSignedup:boolean
}

const initialState: AuthState = {
    value: 0,
    loading:false,
    isAuthenticated:false,
    isSignedup:false,
   
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        signin: (state)=>{
            state.loading=true
        },
        siginSuccess:(state)=>{
            state.loading=false;
            state.isAuthenticated=true;
        },
        siginFailure:(state)=>{
            state.loading=false;
            state.isAuthenticated=false;
        },
        signup: (state)=>{
            state.loading=true
        },
        signupSuccess:(state)=>{
            state.isSignedup=true,
            state.loading=false
        },
        signupFailure:(state)=>{
            state.loading=false,
            state.isSignedup=false
        },
    },
})


export const {
    increment,
    decrement,
    incrementByAmount,
    signin,
    signup,
    siginSuccess,
    siginFailure,
    signupSuccess,
    signupFailure,
} = authSlice.actions
export const signinUser=  (_username:string,_password:string)=> async(dispatch:any) => {
    dispatch(signin());
    try{
        let credentials= {
            username:_username,
            password:_password,
          }
        const responce= await axios.post(`${API_BASE_URL}/auth/signin`,credentials);
        console.log(responce.data)
        if(responce.status===200){
             dispatch(siginSuccess()); 
        }
        else{
             dispatch(siginFailure(responce.data.error ));
        }
    }catch(error){
        console.error('Sign-in error:',error);
        dispatch(siginFailure());
    }
}
export const signupUser= (_username:string,_email:string,_password:string,_confirmPassword:string)=> async(dispatch:any) => {
    dispatch(signup());
    try{
        let credentials= {
            username:_username,
            email:_email,
            password:_password,
            confirmPassword:_confirmPassword

          }
        const responce=await axios.post(`${API_BASE_URL}/auth/signup`,credentials)
        console.log(responce.data)
        if(responce.status===200){
            dispatch(signupSuccess());
        }
        else{
            dispatch(signupFailure());
        }
    }catch(error){
        dispatch(siginFailure)
    }
}


export default authSlice.reducer

