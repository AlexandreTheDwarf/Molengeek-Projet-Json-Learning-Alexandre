import React from 'react';
import "./UserCard.scss"

function UserCard({ time, setTime }) { // Récupération des props

    function timeChange(e) {
        const value = e.target.textContent.toLowerCase();
        setTime(value); // Mise à jour du state dans App
    }

    return (
        <div className='UserCard'>
            <div className='UserCardHeader'>
                <img src="./public/image-jeremy.png" alt="" />
                <div>
                    <span>Report for</span>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="timeSelector">
                <span 
                    onClick={timeChange} 
                    className={time === "daily" ? "active" : ""}
                >
                    Daily
                </span>
                <span 
                    onClick={timeChange} 
                    className={time === "weekly" ? "active" : ""}
                >
                    Weekly
                </span>
                <span 
                    onClick={timeChange} 
                    className={time === "monthly" ? "active" : ""}
                >
                    Monthly
                </span>
            </div>
        </div>
    );
}

export default UserCard;
