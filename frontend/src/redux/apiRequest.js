import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerSuccess } from "./authSlice";
import { getUserFailed, getUserStart, getUserSuccess } from "./userSlice";
//Cài đặt npm install axios

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    }catch(err){
        dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerUser());
    try{
        await axios.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    }catch(err){
        dispatch(registerFailed());
    }
}

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUserStart());
    try{
        const res = await axiosJWT.get("/v1/user", {
            headers: {token: `Bearer ${accessToken}`},
        });
        dispatch(getUserSuccess(res.data));
    }catch(err){
        dispatch(getUserFailed());
    }
};

//logout
export const logOut = async(dispatch, navigate, token, axiosJWT) => {
    dispatch(loginStart());
    try {
        await axiosJWT.post("/v1/auth/logout", {
            headers:{
                token: `Bearer ${accessToken}`
            }
        });
        dispatch(loginSuccess());
    } catch (err) {
        dispatch(loginFailed());
    }
}