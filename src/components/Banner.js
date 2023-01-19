import React ,{useState} from 'react'
import '../css/index.css'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import c1 from '../images/1.PNG'
import c2 from '../images/2.PNG'
import c3 from '../images/3.PNG'
import c4 from '../images/4.PNG'
import c5 from '../images/5.PNG'
import c6 from '../images/6.PNG'
import c7 from '../images/7.PNG'
import c8 from '../images/8.PNG'
import c9 from '../images/9.PNG'
import c10 from '../images/10.PNG'
import c11 from '../images/11.PNG'
import c12 from '../images/12.PNG'
import pho1 from '../images/pho1.PNG'
import pho2 from '../images/pho2.PNG'
// import img6 from '../images/img6.PNG'

export default function Banner() {

    const [img, setImg] = useState(false);

    const imgChangeHandler = () => {
        if(!img) {
            setImg(true);
        }else{
            setImg(false)
        }
    };
       
  return (
    <>
    {/* <div className='big-container'> */}
    <section>
    <div className='container'>

            <div className='div-left'>


                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c1 : pho1} alt="as" />
                    </div>
                </div>

                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c2 : pho2} alt="as" />
                    </div>
                </div>


                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c3 : pho1} alt="as" />
                    </div>
                </div>


            </div>

            <div className='div-right'>


                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c4 : pho2} alt="as" />
                    </div>
                </div>



                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c5 : pho1} alt="as" />
                    </div>
                </div>

                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c6 : pho2} alt="as" />
                    </div>
                </div>


                </div>



            <div className='text-container'>
                
            <div className='div-top'>
            <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c7 : pho1} alt="as" />
                    </div>
                </div>



                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c8 : pho2}alt="as" />
                    </div>
                </div>

                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c9 : pho1} alt="as" />
                    </div>
                </div>

                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c10 : pho2} alt="as" />
                    </div>
                </div>

            </div> 
            
           <p className='main-text'>Beautiful <span className='design'>Designs</span> Made Easy</p>
           <p className='next-text'>Let your creativity run wild with the #1 rated photo book company</p>
           <div className='main-btn'>
            <button className='btn1 button' onMouseOver={imgChangeHandler}>CALENDERS</button>
            <button className=' button'  onMouseOver={imgChangeHandler}v>YEAR IN REVIEW</button>
            <button className=' button'  onMouseOver={imgChangeHandler}>TRAVEL</button>
            <button className=' button'  onMouseOver={imgChangeHandler}>WEDDING</button>
            <button className='button'  onMouseOver={imgChangeHandler}>FAMILY</button>
           </div>
           </div>

           
           <div className='div-bottom'>
            <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c11 : pho1} alt="as" />
                    </div>
                </div>



                <div className="cards" style={{width: "10rem",marginTop:"10px"}}>
                    <div className="card-body">
                        <img src={!img ? c12 : pho2} alt="as" />
                    </div>
                </div>

                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c8 : pho1} alt="as" />
                    </div>
                </div>

                <div className="cards" style={{width: "10rem"}}>
                    <div className="card-body">
                        <img src={!img ? c2 : pho2} alt="as" />
                    </div>
                </div>

            </div> 
        </div>
     </section>

     <section>
        <div className='second-cont'>
            <div className='first'>
                <p style={{color:"rgb(149 142 142)"}}> “ Mixbook actually makes it fun to </p>
                <p className='para2'>create photo books.”</p>
                <img src={img2} className="img2" alt=" "/>
            </div>
            <div className='second'>
                <p className='rated'>#1 RATED</p>
                <p className='rated2'>IN PHOTO BOOKS</p>
                <a href=' ' className="see">See Why</a>
            </div>
            <div className='third'>
            <p style={{color:"rgb(149 142 142)"}}> “ “You can customize everything to</p>
                <p className='para2'> your liking.”</p>
                <img src={img1} className="img1" alt=" "/>
            </div>
        </div>
        
     </section>
     {/* </div> */}
    </>
  )
}
