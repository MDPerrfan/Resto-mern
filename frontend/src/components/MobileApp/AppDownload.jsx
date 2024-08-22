import React from 'react'
import "./Appdownload.css"
import { assests } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience Download <br />Resto App</p>
      <div className="app-download-plat">
        <img src={assests.play_store} alt="playstore" />
        <img src={assests.apple_store} alt="applestore" />
      </div>
    </div>
  )
}

export default AppDownload
