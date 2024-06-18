import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth/authSlice';
import productReducer from './Product/productSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {auth: AuthState, product: ProductState}
export type AppDispatch = typeof store.dispatch;
