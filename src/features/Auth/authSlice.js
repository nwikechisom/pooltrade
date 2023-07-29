import { createSlice } from "@reduxjs/toolkit";
// import { login } from "../../services/authService";

const token = window?.localStorage.getItem("jswt")
const initialState = {
    isAuthenticated: token != null,
    user: null,
    token: token
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.token = token
        },
        logOutSuccess: state => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            window.localStorage.removeItem("jswt")
        }
    }
});


export const { loginSuccess, logOutSuccess } = authSlice.actions;
export const selectIsAuthenticated = (state) => {
    return state.auth.isAuthenticated;
};
export default authSlice.reducer;