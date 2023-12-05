import React, { useState } from 'react'
import styles from './LeasePremium.module.css'
import { Button, background } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import image from "../Images/homefront_cleanup.png"

function LeasePremium() {
  const [startYear,setStartYear]=useState(2023)
  const [endYear,setendtYear]=useState(2023)
  const [visible,setVisible]=useState(false)
  const [value,setValue]=useState(0)
  const [lease,setLease]=useState(0)
  const [lee,setLee]=useState(0)
  const [data,setData]=useState("");
  const navigate = useNavigate();
  let val=0
  console.log(startYear)
  console.log(endYear)
  let diff=startYear-endYear
  let arr=[]
  for(let i=0;i<diff;i++){
    arr.push(i)
  }
  

  const handleClick=()=>{
    //  setVisible(true)
     income()
  }
  
  const append=(x)=>{
    
    return (`Year ${x} (${lee} tax year): ${value} `)
     
  }
  const income=()=>{
    for(let i=startYear;i<=endYear;i++){
      
      let year=(lease/5000)*166
    setValue(year)
    setLee(i)
    val++
    setData(append(val))
    
    }
    
    val=0
  
  }


  
  return (
   
      <div className={styles.main} style={{  margin: "30px ", textAlign: "left", paddingLeft: "40px", width: "80%" }}>
        <h1>s11(f) Lease Premium Allowance Calculator </h1>
        <h2>Work out your Lease Premium Allowance over time</h2>
        <div className={styles['second-part']}>
          <div className={styles['left-part']}>
            <div className={styles.heading}>
              <h3>LEASE PREMIUM CALCULATOR</h3>

            </div>
            <div className={styles.bottom}>
              <p>Parties often enter into leases of vacant commercial or industrial land, subject to payment of a<br /> "lease premium" by the lessee to the lessor. This is defined as "a consideration having an ascertainable money value passing from a lessee to a lessor - distinct from, and in addition to, or in lieu of, rent". It differs from rent in that it is paid in respect of the whole period of the lease. It is usually paid in a lump sum at the commencement of the lease.</p>
              <p>Section 11(f) of the Income Tax Act contains the deduction for the lessee. The amount must be spread over the period of the lease, from commencement to end, including renewal periods, to a maximum spread of 25 years. You need to ensure that the leased asset is used for the production of income in order to qualify for this allowance.</p>
              <div className={styles.select}>
              <div className={styles.input}>
                <label htmlFor="salary" style={{ fontSize: "18px", margin: "5px 10px" }}>Taxable income:   R</label>
                <input
                  className={styles['input-gap']}
                  type="number"
                  id="salary"
                  style={{ padding: "5px", margin: "5px 0px 15px 5px" }}
                  onChange={(e)=>setLease(e.target.value)}
                />
              </div>
              
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"370px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Date lease starts:{" "}Start of{" "} </label>
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

                <select value={startYear} onChange={(e)=>setStartYear(e.target.value)} style={{ padding: "0px 5px", margin: "10px 0px" }}>
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

                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"370px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Date lease stops:{" "}  {" "}Start of{" "} </label>
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

                <select value={endYear} onChange={(e)=>setendtYear(e.target.value)} style={{ padding: "0px 5px", margin: "10px 0px" }}>
                  <option value="2027">2027</option>
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
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
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"250px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 10px" }}>Renewal period (if exists in contract):{" "} </label>
               

                <select style={{ padding: "5px 45px", margin: "10px 0px 10px 35px" }}>
                  <option value="0">0 Years</option>
                  <option value="1">1 Years</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                  <option value="6">6 Years</option>
                  <option value="7">7 Years</option>
                  <option value="8">8 Years</option>
                  <option value="9">9 Years</option>
                  <option value="10">10 Years</option>
                  <option value="11">11 Years</option>
                  <option value="12">12 Years</option>
                  <option value="13">13 Years</option>
                  <option value="14">14 Years</option>
                  <option value="15">15 Years</option>
                </select>

                </div>
                <div style={{display:"flex",gap:"10px",textAlign:"right",paddingLeft:"250px",marginTop:"-10px"}}>
                <label style={{ fontSize: "18px", margin: "10px 53px" }}>Your financial year end: {" "} </label>
               

                <select style={{ padding: "5px 45px", margin: "10px 0px 10px 35px" }}>
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
              <h3 style={{fontWeight:"700"}}>Lease Premium Allowance over the years:</h3>
            {/* {arr.map((el,i)=>{
              return <p key={i}>Year {val} ({lee} tax year):{value} </p>
            
            })} */}
            {data}
           
           
            
          </div>
          </div>
          {/* <div className='right-part'>
            <img src="https://media.taxtim.com/images/media-za/Twitter-Stories-switch.jpg" alt="error" />

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
                  onClick={()=>navigate('/login')}
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

export default LeasePremium;
