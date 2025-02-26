import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState({}); 
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); 

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = () => {
    if (text.trim() === "") return;

    setMessages((prevMessages) => ({
      ...prevMessages,
      [user]: [...(prevMessages[user] || []), { text, sender: "You" }],
    }));

    setText(""); 
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>{user}</span>
            <p>Online now</p>
          </div>
        </div>
      </div>

      <div className="center">
        {messages[user] && messages[user].map((msg, index) => (
          <div key={index} className={msg.sender === "You" ? "message sent" : "message"}>
            <img src="./avatar.png" alt="" />
            <div className="text">
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={endRef}>
          
        </div>
      </div>

      <div className="bottom">
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="sendbutton" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;