import React from 'react'
import img3 from '../images/img3.PNG'

export default function Videocomp() {
  return (
    <>

<div className='video-container'>
            <div className='left'>
            <h2 className="heading4-video">100% Happiness</h2>
            <h2 className="heading4-video head">Guaranteed</h2>
            <div className='video-para-div'>
            <p className=" video-para">At Mixbook, we believe your creation experience</p>
            <p className=" video-para"> should be fun and uncomplicated. It's why we work</p> 
            <p className=" video-para"> hard to ensure every step of your creation process — </p>
            <p className="video-para" >from design to your finished product — is just the</p>
            <p className="video-para">way you want it every time, or we'll make it right.</p>
            <button className='createButton-video'>FIND OUT MORE</button>
            </div>
          
            </div>


            <div className='right'>
                <img src={img3} className="img3" alt=" " />
            </div>
        </div>

    </>
  )
}
