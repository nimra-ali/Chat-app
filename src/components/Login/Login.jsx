import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
const [avatar, setAvatar] = useState({ file: null, url: "" });

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await axios.post("http://localhost:5000/register", {
                username,
                email,
                password,
                avatar: avatar.url,
            });
            
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response?.data?.error || "Registration failed");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            localStorage.setItem("token", res.data.token);
            toast.success("Logged in successfully!");
        } catch (err) {
            toast.error(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
