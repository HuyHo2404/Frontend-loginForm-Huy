import { useEffect, useState } from "react";
import { getAllUsers } from "../../redux/apiRequest";
import { createAxios } from "../../createIntance";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./home.css";
import { loginSuccess } from "../../redux/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  //Nếu chưa có user thì sẽ ko vào được HomePage(sẽ ko vào đc HomePage khi chưa đăng nhập)
  useEffect(() => {
    if(!user){
      navigate("/login");
    }
    if(user?.accessToken){
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
    getAllUsers(user?.accessToken, dispatch);
  }, []);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {`Your role: ${user?.admin ? `Admin` : `User`}`}
      </div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user"> Delete </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
