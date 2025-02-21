import { useState } from 'react';
import '../chatList/chatList.css';
import AddUser from './addUser/addUser';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const [users, setUsers] = useState([]); // 🔹 Users list empty initially

    const handleAddUser = (username) => {
        setUsers([...users, { username, message: "Hello" }]); // 🔹 New user add
        setAddMode(false); // 🔹 AddUser form close
    };

    return (
        <div className='chatlist'>
            <div className='search'>
                <div className='searchbar'>
                    <img src='./search.png' alt='search' />
                    <input type='text' placeholder='Search' className='input' />
                </div>
                <img
                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt='add'
                    className='add'
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>

            {/* ✅ Show AddUser form if addMode is true */}
            {addMode && <AddUser onAddUser={handleAddUser} />}

            {/* ✅ Show Users List Only if Users Exist */}
            {users.length > 0 ? (
                users.map((user, index) => (
                    <div key={index} className="item">
                        <img src='./avatar.png' alt='avatar' />
                        <div className='text'>
                            <span>{user.username}</span>
                            <p>{user.message}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-users">No users yet. Add users to start chat.</p>
            )}
        </div>
    );
};

export default ChatList;
