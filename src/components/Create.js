import React from 'react'
import img3 from "../images/img3.PNG"

export default function Create() {
  return (
    <>
        <div className='create-container'>
            <div className='left'>
            <h2 className="heading4">Your Story, Your Way</h2>
            <p className="para4">Our editor gives you the creative</p>
            <p> freedom to fully customize your design</p> 
            <p>— it's free, fun, and easy to use on any </p>
            <p>device.</p>
            <button className='createButton'>CREATE NOW</button>
            </div>


            <div className='right'>
                <img src={img3} className="img3" alt=" "/>
            </div>
        </div>
        
        
    </>
  )
}
