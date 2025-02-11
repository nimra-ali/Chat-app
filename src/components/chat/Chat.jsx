import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"


const Chat = () => {
  const [open, setOpen] = useState(false)
  const [Text, setText] = useState("");
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
    console.log(e)
  }

  console.log(Text)

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>John doe</span>
            <p>Lorem, ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />

        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">

          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <div className="special-image">
              <img src="https://static.scientificamerican.com/sciam/cache/file/4F73FD83-3377-42FC-915AD56BD66159FE_source.jpg" alt="Special Image" />
            </div>


            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div> <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque delectus
              modi nulla aliquid vel at. Repellat quam, rem minus consectetur quas voluptate hic esse explicabo vitae officiis iusto laborum.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}>

        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />

        </div>
        <input type="text" placeholder="Type a message..."
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendbutton">Send</button>
      </div>
    </div>
  )
}

export default Chat;