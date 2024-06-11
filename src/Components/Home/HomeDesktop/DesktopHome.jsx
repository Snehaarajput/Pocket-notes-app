import React from 'react'
import "./DesktopHome.css"
import home from "../../../Assets/Images/home.png"
import lock from "../../../Assets/Images/lock.png"

function DesktopHome() {
  return (
    <div className='desktop_home'>
      <img src={home} alt="home" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      <div className="desktop_home_bottom">
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default DesktopHome