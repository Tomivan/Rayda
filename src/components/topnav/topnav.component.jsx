import React from "react";
import Notification from "../../assets/notification.svg"
import "./topnav.css";

const Topnav = () => {
    return(
        <div>
            <div className="topnav">
                <div className="left">
                    <h1>Welcome</h1>
                    <p>Your current sales auction and activity.</p>
                </div>
                <img src={Notification} alt="a bell" className="notification" />
            </div>
            <hr />
        </div>
    )
}

export default Topnav;