import "./Login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    // ✅ Login Function
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful! Redirecting...");
            navigate("/chat"); // ✅ Redirect after login
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };

    // ✅ Register Function
    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            
            // ✅ Save user info in Firestore
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchat", res.user.uid), {
                chats: [],
            });

            toast.success("Account created! Redirecting...");
            navigate("/chat"); // ✅ Redirect to chat page after signup

        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                {/* ✅ Sign In Section */}
                <div className="login-box">
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="password" required />
                        <button type="submit">Sign In</button>
                    </form>
                </div>

                <div className="separator"></div> 

                {/* ✅ Sign Up Section */}
                <div className="register-box">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Username" name="username" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="password" placeholder="Password" name="password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
