import React, { useState } from "react";
import styles from "./LocalIntCalculator.module.css"

const LocalIntCalculator = () => {
    const [totalInterest, setTotalInterest] = useState(0);
    const [age, setAge] = useState("under65");
    const [exemption, setExemption] = useState(0);
    const [taxableInterest, setTaxableInterest] = useState(0);
  
    const handleTotalInterestChange = (event) => {
      setTotalInterest(Number(event.target.value));
    };
  
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleCalculateClick = () => {
      const exemptionAmount = age === "under65" ? 23800 : 34500;
      setExemption(exemptionAmount);
      setTaxableInterest(totalInterest - exemptionAmount);
    };
  
    return (
      <div>
        <div className={styles.localcal}>
          <h1>Taxable Local Interest Calculator</h1>
          <h2>Work out the amount of local interest which is taxable on your income tax assessment</h2>
        </div>
        <div className={styles.duo} style={{display:"flex",width:"100%", gap:"150px" }}>
          <div className={styles.left_right} style={{width:"80%"}}>
            <div className={styles.left_heading}>
              <p>Taxable Local Interest</p>
            </div>
            <div className={styles.left_mid}>
              <div>
                  <label htmlFor="totalInterest">Total local interest received for the tax year?</label>
                  <input className={styles.input_gap} type="number" id={styles.totalInterest} name="totalInterest" value={totalInterest} onChange={handleTotalInterestChange} />
              </div>
              <div>
                  <label htmlFor="age">You are:</label>
                  <select className={styles.input_gap} id={styles.age} name="age" value={age} onChange={handleAgeChange}>
                  <option value="under65">Under 65 years old</option>
                  <option value="over65">65 years or older</option>
                  </select>
              </div>
              <div className={styles.input_gap} style={{paddingLeft:"20px",backgroundColor:"#575a05",color:"#b7b1a8"}}>
                  <p>NOTE: You need to declare your total local interest in the Investment Income section of your tax return. This calculator is to assist you on calculating the amount of interest that will reflect as taxable on your income tax assessment.</p>
                  <p>Individual taxpayers enjoy an annual exemption on all South African interest income they earn, set by SARS every year. This interest exemption has remained unchanged for a number of years and for the 2023 tax year is set at R23 800 for individuals under 65 years old, and R34 500 for individuals 65 years and older. South African retail savings Bonds and any interest from the money in your Medical Savings Account (of your medical aid) can also be taxed.</p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <button style={{ position: 'absolute',right: '0', }} onClick={handleCalculateClick}>Calculate</button>
            </div>
          </div>
        </div>
        <div className={styles.results}>
          <p><strong>Amount you keep: R{taxableInterest}</strong> </p>
          <p>This is how you work it out:</p>
          <p>Interest amount: R{totalInterest}</p>
          <p>Less: Exemption: R{exemption}</p>
          <p>Equals: R{taxableInterest}</p>
        </div>
        

      </div>
    );
  };

export default LocalIntCalculator;
  