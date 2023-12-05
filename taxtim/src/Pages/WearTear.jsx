import React, { useState } from 'react'
import styles from './WearTear.module.css'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import image from "../Images/homefront_cleanup.png"

function WearTear() {
  const [isAuth,setIsAuth]=useState(false)
  const [value,setValue]=useState()
  const [year,setYear]=useState()
  const [secondyear,setSecondYear]=useState()
  const navigate = useNavigate();
const handleClick = () => {
    setIsAuth(true);
  
    const currentYear = parseInt(year);
    // Setting the secondYear based on the current year
    const nextYear = currentYear + 1;
    setSecondYear(nextYear);
  };
  
  

  return (
    
      <div className={styles.main} style={{  margin: "30px ", textAlign: "left", paddingLeft: "40px", width: "80%" }}>
        <h1>SBC Wear and Tear Calculator </h1>
        <h2>Work out Wear and Tear on Depreciable Assets</h2>
        <div className={styles['second-part']}>
          <div className={styles['left-part']}>
            <div className={styles.heading}>
              <h3>WEAR AND TEAR CALCULATOR</h3>

            </div>
            <div className={styles.bottom}>
              <p>This calculator is for SBC businesses only.</p>
              <p>Don't know if your business qualifies as an SBC? Click here to find out.</p>
              <div className={styles.select}>
              <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"440px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Purchase date:  {" "}{" "} </label>
                <select  style={{ padding: "0px 5px", margin: "10px 0px" }}>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select onChange={(e)=>setYear(e.target.value)} style={{ padding: "0px 5px", margin: "10px 0px" }}>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                </select>

                </div>
              <div className={styles.input}>
                <label htmlFor="salary" style={{ fontSize: "18px", margin: "5px 10px" }}>Purchase amount: {"\u20B9"}</label>
                <input
                  className='input-gap'
                  type="number"
                  id="salary"
                  style={{ padding: "5px", margin: "5px 0px 15px 5px" }}
                 onChange={(e)=>setValue(e.target.value)}
                />
              </div>
              
                

                
                
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"390px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 0px"}}>Your financial year end:</label>
               

                <select style={{ padding: "5px 45px", margin: "10px 0px 10px 0px" }}>
                <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                </div>
              </div>
              
            </div>
            <Button
              size='md'
              height='35px'
              width='150px'
              // border='0px'
              borderRadius={"none"}
              borderColor='green.500'
              onClick={handleClick}
              cursor={'pointer'}
              _hover={{
                background:"#404240",
                color:"white"
              }}
            >
              CALCULATE!
            </Button>

            <div>
              {isAuth?(<div>
                <h2>Allowed Wear and Tear over the years:</h2>
                <p>Year 1 ({year} tax year): {"\u20B9"} {value}.00 (100%)</p>
                <p>Year 2 ({secondyear} tax year):-{"\u20B9"} 0.00 (0%)</p>
              </div>):(<div></div>)}
            </div>

          </div>
          {/* <div className={styles['right-part']}>
            <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="error"  style={{ borderRadius: '40px' }}/>

          </div> */}
         
         <div className={styles['right-part']}>
            <div className={styles.right} style={{ display: "flex", gap: "30px" }}>
              <div style={{ width: "50%" }}>
                <img className={styles.bot} src="https://www.taxtim.com/za/images/tim_full.svg" alt="Bot.png" width={"100px"} height={"100px"} />
              </div>
              <div className={styles.t1}>
                <p style={{ color: "#4d4d4d", fontWeight: "700", fontSize: "19px", marginTop: "20px", marginLeft: "-20px", marginRight: "20px" }}>
                  Need help submitting your Tax returns?</p>
              </div>
            </div>
            <div className={styles.t2} style={{ paddingRight: "40px" }}>
              <p style={{ fontWeight: "500", margin: "10px 5px" }}>TaxTim will help you:</p>
              <div>
                <div style={{ display: "flex", paddingTop: "15px", paddingLeft: "35px", gap: "7px", fontSize: "17px" }}>
                  <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" width={"25px"} />
                  <span> Do Your Tax Return Easily</span>
                </div>
                <div style={{ display: "flex", paddingTop: "10px", paddingLeft: "35px", gap: "7px", fontSize: "17px" }}>
                  <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="Avoid penalties" width={"25px"} />
                  <span> Avoid penalties</span>
                </div>
                <div style={{ display: "flex", paddingTop: "10px", paddingLeft: "35px", gap: "7px", fontSize: "17px", marginBottom: "30px" }}>
                  <img src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="Maximise your refund" width={"25px"} />
                  <span> Maximise your refund</span>
                </div>

                <span style={{ fontSize: "17px", padding: "100px 0px", fontWeight: "400" }}>Tim uses your answers to complete your income tax return instantly and <br /> professionally, with everything filled in in<br /> the right place.</span>
              </div>
              <div style={{ paddingTop: "15px", paddingBottom: "20px" }}>
                <span>Let Tim submit your tax return direct to<br /> SARS in just a few clicks!</span>
              </div>
              <div>
                <Button className={styles['right-button']}
                  size='md'
                  height='35px'
                  width='150px'
                  // border='0px'
                  borderRadius={"3px"}
                  borderColor='green.500'
                  backgroundColor={"#404240"}
                  color={"white"}
                  onClick={()=> navigate('/login')}
                  cursor={"pointer"}
                  _hover={{
                    color:"white",
                    background:"#eb4f36"
                  }}
                >
                  GET STARTED
                </Button>
              </div>

            </div>

          </div>
        </div>
      </div>
 
  )
}

export default WearTear;
