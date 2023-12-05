import React from 'react'
import styles from "./CalculatorPage.module.css";
import { Link } from 'react-router-dom';
export const CalculatorPage = () => {
  return (
    <div>
        <div className={styles.main}>
            <div className={styles.heading}>
                <h1>Tax Calculators</h1>
                <h2>Calculate everything you need to know about your tax and how tax affects you</h2>
            </div>
            <div className={styles.left_right}>
                <div >
                <h2>Calculators for Individuals</h2>
                    <div className={styles.left}>
                    
                    <div > 
                        <Link to="/salarytaxpage">
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Salary Tax" />
                        <p>Salary Tax</p>
                        <div className={styles.content}>
                            <span>How to calculate how much PAYE and UIF will be deducted from your salary in order to work out your take home pay</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/taxrefundpage">
                        <img src="https://www.taxtim.com/za/images/calc-refund.png" alt="Tax Refund" />
                        <p>Tax Refund</p>
                        <div className={styles.content}>
                            <span>How to calculate what your Tax Refund will be when you submit your tax return to SARS</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/lumpsumpage">
                        <img src="https://www.taxtim.com/za/images/calc-lump-sum.png" alt="Retairment Lump Sum" />
                        <p>Retairment Lump Sum</p>
                        <div className={styles.content}>
                            <span>How to calculate the tax payable on Pension, Provident or Retirement Annuity Fund lump sums due to voluntary withdrawal</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/traveldeductionpage">
                        <img src="https://www.taxtim.com/za/images/calc-travel.png" alt="Travel Deduction" />
                        <p>Travel Deduction</p>
                        <div className={styles.content}>
                            <span>How to maximise your travel deduction by comparing the different methods you can use</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/aidkidpage">
                        <img src="https://www.taxtim.com/za/images/calc-health.png" alt="Medical Aid Credits" />
                        <p>Medical Aid Credits</p>
                        <div className={styles.content}>
                            <span>How to calculate your medical tax credit/rebate</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/weartearpage">
                        <img src="https://www.taxtim.com/za/images/calc-wear-and-tear.png" alt="Water & Tear" />
                        <p>Wear & Tear</p>
                        <div className={styles.content}>
                            <span>How to calculate the Section 11(e) Depreciation / Wear and Tear deduction on the assets you use for work</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-retirement.png" alt="Retairment Saving" />
                        <p>Retirement Saving</p>
                        <div className={styles.content}>
                            <span>Retairment saving calculator</span>
                        </div>
                    </div>
                    <div>
                    <Link to="/localintcalculator">
                        <img src="https://www.taxtim.com/za/images/calc-manufacturing-wear-and-tear.png" alt="Taxable Local interest" />
                        <p>Taxable Local interest</p>
                        <div className={styles.content}>
                            <span>Taxable local interest calculator</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                    <Link to="/foreigncal">
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Foreign Dividends" />
                        <p>Foreign Dividends</p>
                        <div className={styles.content}>
                            <span>How to calculate the amount of foreign dividends on taxable on your income tax assessment</span>
                        </div>
                        </Link>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Home Office Calculator" />
                        <p>Home Office Calculator</p>
                        <div className={styles.content}>
                            <span>How to claim your home office expenses when working from home</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Capital Gains Tax" />
                        <p>Capital Gains Tax</p>
                        <div className={styles.content}>
                            <span>How to calculate Capital Gains Tax on the disposal of your asset</span>
                        </div>
                    </div>
                    </div>
                           
                </div>
                <div className={styles.right}>
                    <div className={styles.right_flex}>
                        <div>
                            <img className={styles.bot} src="https://www.taxtim.com/za/images/tim_full.svg" alt="Bot.png" />
                        </div>
                        <div className={styles.t1}>
                            <p style={{color:"#4d4d4d", fontWeight:"700"}}>Do your Tax
                            Return in 20
                            minutes or less!</p>
                        </div>
                    </div>
                    <div className={styles.t2}>
                        <p>TaxGenius will help you:</p>
                        <div>
                            <div style={{display: "flex", paddingTop:"25px", paddingLeft:"35px", gap:"7px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg" alt="done-img" />
                                <span> Do Your Tax Return Easily</span>
                            </div>
                            <div style={{display: "flex", paddingTop:"25px", paddingLeft:"35px", gap:"7px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg"  alt="Avoid penalties" />
                                <span> Avoid penalties</span>
                            </div>
                            <div style={{display: "flex", paddingTop:"25px", paddingLeft:"35px", gap:"7px"}}>
                                <img  src="https://www.taxtim.com/za/images/icon_tick_circle.svg"  alt="Maximise your refund" />
                                <span> Maximise your refund</span>
                            </div>
                            <span style={{paddingLeft:"10px", }}>Genius uses your answers to complete your income tax return instantly and professionally, with everything filled in in the right place.</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}