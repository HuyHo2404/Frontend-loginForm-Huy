import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        const newUser = {
            email: email,
            password: password,
        };
        loginUser(newUser,dispatch, navigate);
    } 
    return (
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form action="" onSubmit={handleLogin}>
                <h1>Welcome</h1>
                <div className="form-control">
                    <input type="text" name="Email" onChange={(e) => setUsername(e.target.value)} required />
                    <label for="">Email</label>
                </div>
                <div className="form-control">
                    <input type="password" name="Password" onChange={(e) => setPassword(e.target.value)} required />
                    <label for="">Password</label>
                </div>
                <input type="submit" value="Login" id="btn-login" />
                <div class="another-login">
                    <div className="facebook">
                        <button type="submit" value="Facebook" id="btn-facebook">Facebook</button>
                    </div>
                    <div className="google">
                        <button type="submit" value="Google" id="btn-google">Google</button>
                    </div>
                </div>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" to="/register">Register one for free </Link>
        </section>
    );
}

export default Login;