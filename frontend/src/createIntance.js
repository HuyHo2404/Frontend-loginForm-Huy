
import axios from "axios";
import jwt_decode from "jwt-decode";
//import { logOutSuccess } from "./redux/authSlice";

const refreshToken = async () => {
    try {
      const res = await axios.post("/v1/auth/refresh", {
        withCredentials: true,
      });
      return res.data
    } catch (err) {
      console.log(err);
    }
};

export const createAxios = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create();
    newInstance.interceptors.request.use( async (config) => {
        let date = new Date();
        const decodedToken = jwt_decode(user?.accessToken);
        if(decodedToken.exp < date.getTime() / 1000){
          const data = await refreshToken();
          const refreshUser = {
            ...user,
            accessToken: data.accessToken,
          };
          dispatch(loginSuccess(refreshUser));
          config.headers["token"] = "Beader" + data.accessToken;
        }; 
        return config;
    }, (err) => {
      return Promise.reject(err);
    });
    return newInstance;
}