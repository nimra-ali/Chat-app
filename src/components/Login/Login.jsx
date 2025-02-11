import { useState } from "react"
import "./Login.css"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
console.log(auth);

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    console.log(import.meta.env.VITE_FIREBASE_API_KEY,)
    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked: [],
            })
            await setDoc(doc(db, "userchat", res.user.uid), {
                chats: [],
            })
            toast.success("Account created you can login now!");
        } catch (err) {
            console.error(err);
            toast.error(err.message);
        }
    };

    const handlelogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Wellcome back,</h2>
                <form onSubmit={handlelogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="seprator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image</label>
                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign In</button>
                </form>

            </div>
        </div>
    )
}

export default Login;