import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        //chức năng login
        login:{
            currentUser:null,
            isFetching:false,
            error: false
        },

        //chức năng register
        register:{
            isFetching: false,
            error: false,
            success: false
        },

        //chức năng logout
        logout:{
            isFetching: false,
            error: false,          
        }
    },
    reducers:{
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        //register
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.register.isFetching = false;
            state.register.currentUser = action.payload;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },

        //logout
        logOutSuccess: (state) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.error = false;
        },
        logOutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
        logOutStart: (state) => {
            state.logout.isFetching = true;
        },
    }
});

export const {
    loginStart,
    loginFailed,
    loginSuccess,

    registerStart,
    registerSuccess,
    registerFailed,

    logOutStart,
    logOutSuccess,
    logOutFailed,
} = authSlice.actions;

export default authSlice.reducer;