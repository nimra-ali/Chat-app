import "./Userinfo.css"

const Userinfo = () => {
  return (
    <div className="userinfo">
        <div className="user">
<img src="./avatar.png" alt="Avator"/>
<h2>John doe</h2>
        </div>
        <div className="icons">
<img src="./more.png" alt="more"/>
<img src="./video.png" alt="video"/>
<img src="./edit.png" alt="edit"/>

        </div>
    </div>
  )
}

export default Userinfo;