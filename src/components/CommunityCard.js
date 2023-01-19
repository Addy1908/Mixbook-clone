import React from 'react'
import img5 from '../images/img5.PNG'
import img6 from '../images/img6.PNG'
import img7 from '../images/img7.PNG'
import img8 from '../images/img8.PNG'
import '../css/index.css'


export default function CommunityCard() {
  return (
    <>
       <div className='createcard'>

          <div className="container-card">
  <img src={img5} alt="Avatar" className="image" />
  <div className="overlay">
    {/* <div className="text">Hello World</div> */}
  </div>
</div>
        
        
        
<div className="container-card">
  <img src={img6} className="image"  alt="Avatar" />
  <div className="overlay">
    {/* <div className="text">Hello World</div> */}
  </div>
</div>
        
        
<div className="container-card">
  <img src={img7} alt="Avatar" className="image" />
  <div className="overlay">
    {/* <div className="text">Hello World</div> */}
  </div>
</div>
        
        
<div className="container-card">
  <img src={img8} alt="Avatar" className="image" />
  <div className="overlay">
    {/* <div className="text">Hello World</div> */}
  </div>
</div>

                </div>
                <button className='createButton-card'>GET INSPIRED</button>
    </>
  )
}
