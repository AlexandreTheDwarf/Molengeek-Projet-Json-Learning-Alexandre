import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import './TimeCard.scss'

function word(time) {
  return time === "weekly" ? "Week" : time === "daily" ? "Day" : "Month";
}

function TimeCard({ d, time }) {
  return (
    <div className='TimeCard' style={{ backgroundColor: `#${d.color}` }}>
        <img src={"./public/icon-" + d.logo + ".svg"} alt="" />
        <div className='TimeCardInfo'>
            <div className='TimeCardInfoHeader'>
                <span>{d.title}</span>
                <HiOutlineDotsHorizontal />
            </div>
            <div className='TimeCardInfoFooter'>
                <h1>{d.timeframes[time].current} hrs</h1>
                <span>Last {word(time)} - {d.timeframes[time].previous} hours</span>
            </div>
        </div>
    </div>
  )
}

export default TimeCard

