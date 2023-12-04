import React, { useState } from "react";
import styles from "./TaxRefundPage.module.css"

export const TaxRefundPage = () => {
  const [taxYear, setTaxYear] = useState("2022");
  const [workedForEmployer, setWorkedForEmployer] = useState("yes");
  const [grossEmploymentIncome, setGrossEmploymentIncome] = useState(0);
  const [totalAnnuityFundIncome, setTotalAnnuityFundIncome] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [taxPaid, setTaxPaid] = useState(0);
  const [provisionalTax, setProvisionalTax] = useState(0);
  const [age, setAge] = useState("under65");
  const [isDisabled, setIsDisabled] = useState("no");
  const [taxRefund, setTaxRefund] = useState(0);

  const handleCalculate = () => {
    let taxableIncome = parseInt(grossEmploymentIncome) + parseInt(totalAnnuityFundIncome) + parseInt(otherIncome) - parseInt(deductions);
    let taxBeforeRebates = calculateTaxBeforeRebates(taxableIncome, age, isDisabled);
    let taxAfterRebates = calculateTaxAfterRebates(taxBeforeRebates, taxPaid, provisionalTax);
    let refund = calculateRefund(taxAfterRebates);
    setTaxRefund(refund);
  };

  const calculateTaxBeforeRebates = (taxableIncome, age, isDisabled) => {
    let taxTable;
    if (age === "under65" && isDisabled === "no") {
      taxTable = [        { min: 0, max: 216200, rate: 0.18, rebate: 0 },        { min: 216201, max: 337800, rate: 0.26, rebate: 38916 },        { min: 337801, max: 467500, rate: 0.31, rebate: 70532 },        { min: 467501, max: 613600, rate: 0.36, rebate: 110739 },        { min: 613601, max: 782200, rate: 0.39, rebate: 163335 },        { min: 782201, max: 1656600, rate: 0.41, rebate: 229425 },        { min: 1656601, max: Infinity, rate: 0.45, rebate: 587025 }      ];
    } else if (age === "under65" && isDisabled === "yes") {
      taxTable = [        { min: 0, max: 240900, rate: 0.18, rebate: 0 },        { min: 240901, max: 376500, rate: 0.26, rebate: 43497 },        { min: 376501, max: 521000, rate: 0.31, rebate: 78528 },        { min: 521001, max: 673100, rate: 0.36, rebate: 123942 },        { min: 673101, max: 844230, rate: 0.39, rebate: 182790 },        { min: 844231, max: 1772400, rate: 0.41, rebate: 256725 },        {min: 1772401, max: Infinity, rate: 0.45, rebate: 559464 } ];
    } else if (age === "over65" && isDisabled === "no") {
    taxTable = [ { min: 0, max: 151100, rate: 0.18, rebate: 0 }, { min: 151101, max: 282700, rate: 0.26, rebate: 25326 }, { min: 282701, max: 400000, rate: 0.31, rebate: 50532 }, { min: 400001, max: 555600, rate: 0.36, rebate: 89448 }, { min: 555601, max: 708310, rate: 0.39, rebate: 140880 }, { min: 708311, max: 1494750, rate: 0.41, rebate: 199620 }, { min: 1494751, max: Infinity, rate: 0.45, rebate: 587160 } ];
    } else if (age === "over65" && isDisabled === "yes") {
    taxTable = [ { min: 0, max: 163300, rate: 0.18, rebate: 0 }, { min: 163301, max: 298900, rate: 0.26, rebate: 28485 }, { min: 298901, max: 421000, rate: 0.31, rebate: 56772 }, { min: 421001, max: 555600, rate: 0.36, rebate: 91497 }, { min: 555601, max: 708310, rate: 0.39, rebate: 140880 }, { min: 708311, max: 1494750, rate: 0.41, rebate: 199620 }, { min: 1494751, max: Infinity, rate: 0.45, rebate: 587160 } ];
    }
    let tax = 0;
    for (let i = 0; i < taxTable.length; i++) {
    let bracket = taxTable[i];
    if (taxableIncome > bracket.max) {
    tax += (bracket.max - bracket.min + 1) * bracket.rate;
    } else {
    tax += (taxableIncome - bracket.min + 1) * bracket.rate;
    break;
    }
    }
    return tax;
    };
    
    const calculateTaxAfterRebates = (taxBeforeRebates, taxPaid, provisionalTax) => {
    let taxAfterRebates = taxBeforeRebates - taxPaid - provisionalTax;
    return taxAfterRebates > 0 ? taxAfterRebates : 0;
    };
    
    const calculateRefund = (taxAfterRebates) => {
    return taxAfterRebates;
    };
    
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.taxrefundpage}>
                    <h1>SARS Tax Refund Calculator for 2022</h1>
                    <h2>Work out how big your tax refund will be when you submit your return to SARS</h2>
                </div>
                <div className={styles.duo} style={{display:"flex",width:"100%", gap:"150px" }}>
                    <div className={styles.left_right} style={{width:"80%"}}>
                        <div className={styles.left_heading}>
                            <p>INCOME</p>
                        </div>
                        <div className={styles.left_mid}>
                            <div className={styles.input_gap} style={{textAlign:"left",paddingLeft:""}}>
                                <label>
                                    Which tax year would you like to calculate?
                                <select value={taxYear} onChange={(e) => setTaxYear(e.target.value)}>
                                <option value="2022">2022 (Mar 2021 - Feb 2022)</option>
                                <option value="2021">2021 (Mar 2020 - Feb 2021)</option>
                                <option value="2020">2020 (Mar 2019 - Feb 2020)</option>
                                </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Did you work for an employer or receive an annuity from a fund?
                                <select className={styles.input_gap} value={workedForEmployer} onChange={(e) => setWorkedForEmployer(e.target.value)}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                                </select>
                                </label>
                            </div>
                            <div>
                                {workedForEmployer === "yes" && (
                                <div>
                                    <label>
                                        Gross Employment Income (source code 3699 on IRP5):
                                    <input className={styles.input_gap} type="number" value={grossEmploymentIncome} onChange={(e) => setGrossEmploymentIncome(e.target.value)} />
                                    </label>
                                    <br />
                                    <label>
                                        Total annuity fund income on IT3a:
                                    <input className={styles.input_gap} type="number" value={totalAnnuityFundIncome} onChange={(e) => setTotalAnnuityFundIncome(e.target.value)} />
                                    </label>
                                    <br />
                                </div>
                                )}
                            </div>
                            <div>
                                <label>
                                    Other income:
                                <input className={styles.input_gap} type="number" value={otherIncome} onChange={(e) => setOtherIncome(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Deductions:
                                <input className={styles.input_gap} type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Tax paid:
                                <input className={styles.input_gap} type="number" value={taxPaid} onChange={(e) => setTaxPaid(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Provisional tax on IRP6:
                                <input className={styles.input_gap} type="number" value={provisionalTax} onChange={(e) => setProvisionalTax(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Your age?
                                <select className={styles.input_gap} value={age} onChange={(e) => setAge(e.target.value)}>
                                <option value="under65">Under 65</option>
                                <option value="over65">65 or older</option>
                                </select>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Are you, your spouse or any of your children disabled?
                                <select className={styles.input_gap} value={isDisabled} onChange={(e) => setIsDisabled(e.target.value)}>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                                </select>
                                </label>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <button style={{ position: 'absolute',right: '0', marginTop:"28px"}} onClick={handleCalculate}>Calculate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.results}>
                {taxRefund > 0 && <p><strong>Your estimated tax refund:</strong>  R{taxRefund} </p>}
            </div>
          
        </div>
      )}
      export default TaxRefundPage


      
      