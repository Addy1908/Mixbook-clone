import React from 'react'
import '../css/index.css'

export default function Header() {
  return (
    <>
        <section>
        <div className="header1">
            <p className="text1">Shipping is unavailable to your region. We ship to the US, Canada, Europe, UK, and Australia.</p>
        </div>
       
        <div className="header2">
            <strong className="text2">50% Off $159+ 40% Off $99+ or 35% Off $49+</strong>
            "Code"
            <strong className="text2">GIFTJAN</strong>
            " Ends: 01/09"
            <a href=" "> Details</a>
            <button className='headBut success'>Apply</button>

            <a href=' ' className="calender">Create a custom calendar for the new year! | Shop Calendars »</a>
        </div>
        </section>
    </>
  )
}
