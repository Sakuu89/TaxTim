import React from 'react'
import { HowitworkChat } from './HowitworkChart';
import "../Styles/Howitworks.css"
import { wrap } from 'framer-motion'

export const Howitworks = () => {
  return (
    <>
    <div id="main-container">
        <div id="heading"> 

        <h1>How Tim helps you complete your tax return right<br/>
Answer Tim's simple questions. Get your tax done. Easy.</h1>
        </div>
        <div id="img-chatBot">
        {/* <div id="img-container"> */}
            <img src="https://www.taxtim.com/za/images/tim-blinks2.gif" alt="" id="img" />
        {/* </div> */}
        <div id="chatbot">
        <HowitworkChat/>
        </div>
        </div>
        </div>
     <div style={{width:"70%",margin:"auto",marginTop:"30px",fontSize:"20px",marginBottom:"60px"}}>
        <div style={{width:"55%",margin:"auto"}}>
        <h1 className='title' >Enjoy a discount on TaxTim from our discount partners:</h1>
        </div>
        <div id="banner">
         <div style={{width:"150px",height:"50px"}}>
         <img  src="https://www.taxtim.com/za/images/partner-old-mutual.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/sanlam-reality.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/partner-fnb-ebucks.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/momentum-logo.png" alt="" />
         </div>
         <div style={{width:"150px",height:"50px"}}>
         <img src="https://www.taxtim.com/za/images/partner-22seven.gif" alt="" />
         </div>
        </div>
     </div>
    </>
  )
}