import { useState } from "react";
import "./addUser.css";

const AddUser = ({ onAddUser }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onAddUser(username);
            setUsername(""); // 🔹 Clear input field
        }
    };

    return (
        <div className="adduser">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddUser;
