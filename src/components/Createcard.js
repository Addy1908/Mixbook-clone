import React from 'react'
import img5 from '../images/img5.PNG'
import img6 from '../images/img6.PNG'
import img7 from '../images/img7.PNG'
import img8 from '../images/img8.PNG'
import '../css/index.css'

export default function Createcard() {
  return (
    <>
    <h4 className='heading4'>What Will You Create Today?</h4>
        <div className='createcard'>
        
<div className="card">
  <img src={img5} alt="Avatar" />
  <div className="container">
    <h4  className='subhead' style={{textAlign:'center'}}><b>Photo Books</b></h4> 
   
  </div>
</div>


<div className="card">
  <img src={img6} alt="Avatar" style={{width:"100%"}} />
  <div className="container">
    <h4  className='subhead' style={{textAlign:'center'}}><b>Cards</b></h4> 
    
  </div>
</div>



<div className="card">
  <img src={img7} alt="Avatar" style={{width:"100%"}} />
  <div className="container">
    <h4   className='subhead' style={{textAlign:'center'}}><b>Calenders</b></h4> 
  
  </div>
</div>


<div className="card">
  <img src={img8} alt="Avatar" style={{width:"100%"}} />
  <div className="container">
    <h4  className='subhead' style={{textAlign:'center'}}><b>Home Decors</b></h4> 
   
  </div>
</div>
        </div>
    </>
  )
}



