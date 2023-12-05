import React, { useEffect, useState } from 'react'
import styles from './IncomTax.module.css'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function IncomeTax() {
  const [salary, setSalary] = useState(0)
  const [value,setValue]=useState(0)
  const [tax,setTax]=useState(0)
  const navigate = useNavigate();
  const income = () => {
    let val = salary;
    let tax = 0;
  
    if (val >= 1 && val <= 250000) {
      tax = 0; // No tax for this bracket
    } else if (val > 250000 && val <= 500000) {
      tax = (val - 250000) * 0.05; // 5% tax for this bracket
    } else if (val > 500000 && val <= 750000) {
      tax = (val - 500000) * 0.10 + 12500; // 10% tax for this bracket
    } else if (val > 750000 && val <= 1000000) {
      tax = (val - 750000) * 0.15 + 37500; // 15% tax for this bracket
    } else if (val > 1000000 && val <= 1250000) {
      tax = (val - 1000000) * 0.20 + 75000; // 20% tax for this bracket
    } else if (val > 1250000 && val <= 1500000) {
      tax = (val - 1250000) * 0.25 + 125000; // 25% tax for this bracket
    }
  
    setTax(tax);
    setValue(val - tax); // Calculate income after tax
  
    // return setSalary(val);
  }
  
  return (
    
      <div className={styles.main} style={{  margin: "30px ", textAlign: "left", paddingLeft: "40px", width: "80%" }}>
        <h1>Small Business Income Tax Calculator </h1>
        <h2>Work out Tax Payable on your Small Business Taxable Income </h2>
        <div className={styles['second-part']}>
          <div className={styles['left-part']}>
            <div className={styles.heading}>
              <h3>SMALL BUSINESS INCOME TAX CALCULATOR</h3>

            </div>
            <div className={styles.bottom}>
              <p>Use our Small Business Corporation Income Tax calculator to work out the tax payable on your business taxable income.</p>
              <p>We have the SARS SBC tax rates tables built in - no need to look them up!</p>
              <div className={styles.select}>
                <label style={{ fontSize: "18px", margin: "5px 10px" }}>Financial year: </label>
                <select style={{ padding: "5px", margin: "10px 0px" }}>
                  <option value="2024">2024 (Mar 2023 - Feb 2024)</option>
                  <option value="2023">2023 (Mar 2022 - Feb 2023)</option>
                  <option value="2022">2022 (Mar 2021 - Feb 2022)</option>
                  <option value="2021">2021 (Mar 2020 - Feb 2021)</option>
                </select>
              </div>
              <div className={styles.input}>
                <label htmlFor="salary" style={{ fontSize: "18px", margin: "5px 10px" }}>Taxable income:  {"\u20B9"}</label>
                <input
                  className={styles['input-gap']}
                  type="number"
                  id="salary"
                  value={salary}
                  style={{ padding: "5px", margin: "5px 0px 15px 5px" }}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>
            <Button
              size='md'
              height='35px'
              width='150px'
              borderRadius={"none"}
              borderColor='green.500'
              cursor={'pointer'}
              onClick={income}
              _hover={{
                background:"#404240",
                color:"white"
              }}

            >
              CALCULATE!
            </Button>
            <div className={styles.calculate}>
              <h2>Amount you keep:</h2>
              <h1>{"\u20B9"} {value}</h1> 
              <div style={{marginBottom:"20px"}}>
                <h2>This is how you work it out:</h2>
                <p>Taxable income: {"\u20B9"}{salary}</p>
                <p>Tax = 7% of taxable income</p>
                <p>Tax= {"\u20B9"}{tax}</p>
                <p>Profit after tax:-{"\u20B9"}{value}</p>
              </div>

            </div>
          </div>
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

export default IncomeTax;
