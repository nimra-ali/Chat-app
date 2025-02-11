import { useState } from 'react'
import '../chatList/chatList.css';
import AddUser from './addUser/addUser';

const ChatList = () => {

    const [addMode, setAddMode] = useState(false);

    return (

        <div className='chatlist'>
            <div className='search'>
                <div className='searchbar'>
                    <img src='./search.png' alt='search' />
                    <input type='text' placeholder='Search' className='input' />
                </div>
                <img

                    src={addMode ? "./minus.png" : "./plus.png"}
                    alt='plus'
                    className='add'
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            <div className="item">
                <img src='./avatar.png' alt='avatar' />
                <div className='text'>
                    <span>John doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src='./avatar.png' alt='avatar' />
                <div className='text'>
                    <span>John doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src='./avatar.png' alt='avatar' />
                <div className='text'>
                    <span>John doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src='./avatar.png' alt='avatar' />
                <div className='text'>
                    <span>John doe</span>
                    <p>hello</p>
                </div>
            </div>

            <div className="item">
                <img src='./avatar.png' alt='avatar' />
                <div className='text'>
                    <span>John doe</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src='./avatar.png' alt='avatar' />
                <div className='text'>
                    <span>John doe</span>
                    <p>hello</p>
                </div>
            </div>

            {addMode && <AddUser />}
        </div>

    )
}

export default ChatList;