import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from '../features/Auth/authSlice'

let store = configureStore({
    reducer:{
        auth: authReducer,
    },
    middleware: getDefaultMiddleware({serializableCheck: false})
});

export default store;