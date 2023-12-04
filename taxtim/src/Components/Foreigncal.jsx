import React, { useState } from 'react';
import styles from "./Foreigncal.module.css";

export const Foreigncal=()=> {
    const [totalDividends, setTotalDividends] = useState('');
    const [taxableDividends, setTaxableDividends] = useState('');
  
    const handleTotalDividendsChange = (event) => {
      setTotalDividends(Number(event.target.value));
    };
  
    const handleCalculateClick = () => {
      const taxRate = 0.444;
      setTaxableDividends((totalDividends * taxRate).toFixed(2));
    };
  
    return (
      <div>
        <div className={styles.fclass}>
          <h1>Taxable Foreign Dividends Calculator</h1>
          <h2>Work out the amount of foreign dividends which are taxable on your income tax assessment</h2>
        </div>
        <div className={styles.duo} style={{display:"flex",width:"100%", gap:"150px" }}>
          <div className={styles.left_right} style={{width:"80%"}}>
            <div className={styles.left_heading}>
              <p>TAXABLE FOREIGN DIVIDENDS CALCULATOR</p>
            </div>
            <div className={styles.left_mid}>
              <div>
                  <label htmlFor="totalDividends">Total foreign dividends received for the year:</label>
                  <input type="number" id={styles.totalDividends} name="totalDividends" value={totalDividends} onChange={handleTotalDividendsChange} />
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <button style={{ position: 'absolute',right: '0', }} onClick={handleCalculateClick}>Calculate</button>
            </div>
          </div>
        </div>
        <div className={styles.results}>
          {taxableDividends && <p><strong>Taxable foreign dividends: {taxableDividends}</strong></p>}
        </div>
        
      </div>
    );
  }

export default Foreigncal;