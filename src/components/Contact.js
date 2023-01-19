import React from 'react'
import '../css/index.css'
export default function Contact() {
  return (
    <>
        <div className='contact-container'>
            <div className='contactUs'>
                <p className='cont-para-head'>Contact Us</p>
                <p className='cont-para'>Have questions? <a href=" " style={{textDecoration:"none"}}>Chat with us</a> or email us at </p>
                 <p className='cont-para'><a href=" "  style={{textDecoration:"none"}}>hello@mixbook.com</a>. We'll be glad to help!</p>
                
           <div className="navbar">
               <nav id="navbar-cont">
          
                      <ul className='contact-list'>
                        
                        <li className="list lists"><a href=" ">Help</a></li>
                        <li className="list lists "><a href=" ">Return</a></li>
                        <li className="list lists"><a href=" ">Shipping</a></li>
                        <li className="list lists"><a href=" ">Photo Book Pricing</a></li>
                        <li className="list lists"v><a href=" ">Deals</a></li>
                        <li className="list lists"><a href=" ">About</a></li>
                        <li className="list lists"><a href=" ">Careers</a></li>
                        <li className="list lists"><a href=" ">Customers Stories</a></li>
                        <li className="list lists"><a href=" ">#1 Rated in Photo Books</a></li>
                        <li className="list lists"><a href=" ">Mobile App</a></li>
                        <li className="list lists"><a href=" ">Inspiration</a></li>
                      </ul>
                 
                 </nav>
            </div>
            </div>

                    <div className='products'> 
                    <div className='contactUs'>
                <p className='cont-para-head'>Products</p>
               
                
           <div className="navbar">
               <nav id="navbar-cont">
          
                      <ul className='contact-list'>
                      <li className="list lists"><a href=" ">Photo Books</a></li>
                        <li className="list lists "><a href=" ">Baby Photo Books</a></li>
                        <li className="list lists"><a href=" ">Travel Photo Books</a></li>
                        <li className="list lists"><a href=" ">Home Decor</a></li>
                        <li className="list lists"v><a href=" ">Canvas Print</a></li>
                        <li className="list lists"><a href=" ">Poster Print</a></li>
                        <li className="list lists"><a href=" ">Acrylic Print</a></li>
                        <li className="list lists"><a href=" ">Metal Print</a></li>
                        <li className="list lists"><a href=" ">Cards</a></li>
                        <li className="list lists"><a href=" ">Designer Collection</a></li>
                        
                      </ul>
                 
                 </nav>
            </div>
            </div>


                    </div>

                    
            <div className='contactUs'>
               
           <div className="navbar">
               <nav id="navbar-cont">
          
                      <ul className='contact-list sub-prog'>
                        
                        <li className="list lists"><a href=" ">Calenders</a></li>
                        <li className="list lists "><a href=" ">Photo Birth </a></li>
                        <li className="list lists"><a href=" ">Holiday Photo Card</a></li>
                        <li className="list lists"><a href=" ">Save the Date Card</a></li>
                        <li className="list lists"v><a href=" ">Engagement </a></li>
                        <li className="list lists"><a href=" ">Wedding Invitations</a></li>
                        <li className="list lists"><a href=" ">Wedding Photo Books</a></li>
                        <li className="list lists"><a href=" ">Wedding Guest Books</a></li>
                        <li className="list lists"><a href=" ">Wedding Albums</a></li>
                     
                      </ul>
                 
                 </nav>
            </div>
            </div>

                    <div className='programs'>
                    <div className='contactUs'>
                <p className='cont-para-head'>Programs</p>
              
                
           <div className="navbar">
               <nav id="navbar-cont">
          
                      <ul className='contact-list'>
                        <li className="list lists"><a href=" ">For Business</a></li>
                        <li className="list lists "><a href=" ">School Yearbooks</a></li>
                        <li className="list lists"><a href=" ">Affiliate Program </a></li>
                        <li className="list lists"><a href=" ">Volume Discount</a></li>
                        <p className='cont-para-head location'>Locations</p>
                        <li className="list lists"><a href=" ">Australia</a></li>
                        <li className="list lists"><a href=" ">Canada</a></li>
                        <li className="list lists"><a href=" ">European Union</a></li>
                        <li className="list lists"><a href=" ">United Kingdom</a></li>
                        {/* <li className="list lists"><a href=" ">Mobile App</a></li>
                        <li className="list lists"><a href=" ">Inspiration</a></li> */}
                      </ul>
                 
                 </nav>
            </div>
            </div>

                    </div>



                    
        </div>

        <div style={{ borderTop: "2px dotted #b9aeae", marginLeft: 60, marginRight: 60 }}></div>


                    <div className='footer'>
                      <h4 className='footer-head'>Get Exclusive Offer And Mixbook News</h4>
                      <form className='form'>
                        <input type="email" placeholder='Email' className='email' style={{textAlign:"center"}}></input>
                        <button className='createButton-card-sign'>SIGN UP</button>
                      </form>
                    

                    <div className="navbar">
        <nav id="navbar" className='nav-footer'>
          
        
          <ul>

            <li className="list">
            <a href=" #">Press</a>
            </li>

            <li className="list">
            <a href=" #">Terms of Service</a>
            </li>

            <li className="list">
            <a href=" #">Privacy</a>
            </li>

            <li className="list">
            <a href=" #">Returns</a>
            </li>

            </ul>
            </nav>
            </div>

            <div className='copywrite'>
            <p> &copy; 2006-2023 Mixbook</p>
            </div>
   </div>

    </>
  )
}
