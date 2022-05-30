import React from "react";
import './topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


function panel()
{
  return(

    <div className="topbar">
        <div className="topbarnested">
          <div className="topbarleft">
              <span className="logo">
                Library management
              </span>
          </div>
        <div className="topright">
          <div className="topbarrightcontainer">
                <div className="topbarrighticon">
                  <NotificationsIcon/> 
                </div>
          </div> 
          <div className="topbarrightcontainer">
                <div className="topbarrighticon">
                  <SettingsIcon/> 
                </div>
          </div> 
        </div>
      </div> 
    </div>

  );
}

export default panel;