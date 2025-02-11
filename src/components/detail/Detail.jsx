import { useState } from "react";
import "./detail.css"

const Detail = () => {
  
  return (
    
    <div className="detail">
<div className="users">
  <img  src="./avatar.png" alt=""/>
  <h2>John Doe</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</div>
<div className="info">
  <div className="option">
    <div className="title">
      <span>Chat Settings</span>
      <img src="./arrowUp.png" alt=""/>
    </div>
  </div>
  <div className="option">
    <div className="title">
      <span>Privacy & help</span>
      <img src="./arrowUp.png" alt=""/>
    </div>
  </div> 
  <div className="option">
    <div className="title">
      <span>Shared photos</span>
      <img src="./arrowUp.png" alt=""/>
    </div>
    <div className="photos">
      <div className="photositem">
        <div className="photosdetail">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNn3ygM-e3ezPhbth7zvDi4SFy0JTCHPIatg&s" alt="Special Image"/>
<span>photo_2025_2.png</span>
        </div>
      <img src="./download.png" alt="" className="downloadicon"/>
      </div>
      <div className="photositem">
        <div className="photosdetail">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNn3ygM-e3ezPhbth7zvDi4SFy0JTCHPIatg&s" alt="Special Image"/>
<span>photo_2025_2.png</span>
        </div>
      <img src="./download.png" alt="" className="downloadicon"/>
      </div>  <div className="photositem">
        <div className="photosdetail">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNn3ygM-e3ezPhbth7zvDi4SFy0JTCHPIatg&s" alt="Special Image"/>
<span>photo_2025_2.png</span>
        </div>
      <img src="./download.png" alt="" className="downloadicon"/>
      </div>  <div className="photositem">
        <div className="photosdetail">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNn3ygM-e3ezPhbth7zvDi4SFy0JTCHPIatg&s" alt="Special Image"/>
<span>photo_2025_2.png</span>
        </div>
      <img src="./download.png" alt="" className="downloadicon"/>
      </div>
    </div>
  </div>
  
  <div className="option">
    <div className="title">
      <span>Shared Files</span>
      <img src="./arrowUp.png" alt=""/>
    </div>
  </div> 
  <button className="blockbutton"  >Block User</button>
  <button className="logout"  >LogOut</button>
 
</div>
    </div>
  )
}

export default Detail;