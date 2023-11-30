import React from 'react'

function CalculatorPage() {
  return (
    <div>
        <div className='heading'>
            <h1>Tax Calculators</h1>
            <h2>Calculate everything you need to know about your tax and how tax affects you</h2>
            <h3>Calculators for Individuals</h3>
        </div>
        <div style={{display:"flex",gap:"80px"}}>
            <div className='calulators' style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
                <div > 
                    <a href="/salarytaxpage">
                    <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Salary Tax" />
                    <p>Salary Tax</p>
                    <div className='content'>
                        {/* <span>How to calculate how much PAYE and UIF will be deducted from your salary in order to work out your take home pay</span> */}
                    </div>
                    </a>
                </div>
                <div>
                    <a href="/taxrefundpage">
                        <img src="https://www.taxtim.com/za/images/calc-refund.png" alt="Tax Refund" />
                        <p>Tax Refund</p>
                        <div className='content'>
                            {/* <span>How to calculate what your Tax Refund will be when you submit your tax return to SARS</span> */}
                        </div>
                    </a>
                </div>
                <div>
                    <a href="/lumpsumpage">
                        <img src="https://www.taxtim.com/za/images/calc-lump-sum.png" alt="Retairment Lump Sum" />
                        <p>Retairment Lump Sum</p>
                        <div className='content'>
                            {/* <span>How to calculate the tax payable on Pension, Provident or Retirement Annuity Fund lump sums due to voluntary withdrawal</span> */}
                        </div>
                    </a>
                </div>
                <div>
                    <a href="/traveldeductionpage">
                    <img src="https://www.taxtim.com/za/images/calc-travel.png" alt="Travel Deduction" />
                    <p>Travel Deduction</p>
                    <div className='content'>
                        {/* <span>How to maximise your travel deduction by comparing the different methods you can use</span> */}
                    </div>
                    </a>
                </div>
                <div>
                    <a href="/aidkidpage">
                        <img src="https://www.taxtim.com/za/images/calc-health.png" alt="Medical Aid Credits" />
                        <p>Medical Aid Credits</p>
                        <div className='content'>
                            {/* <span>How to calculate your medical tax credit/rebate</span> */}
                        </div>
                    </a>
                </div>
                <div>
                    <a href="/weartearpage">
                        <img src="https://www.taxtim.com/za/images/calc-wear-and-tear.png" alt="Water & Tear" />
                        <p>Wear & Tear</p>
                        <div className='content'>
                            {/* <span>How to calculate the Section 11(e) Depreciation / Wear and Tear deduction on the assets you use for work</span> */}
                        </div>
                    </a>
                </div>
                <div>
                    <img src="https://www.taxtim.com/za/images/calc-retirement.png" alt="Retairment Saving" />
                    <p>Retirement Saving</p>
                    <div className='content'>
                        {/* <span>Retairment saving calculator</span> */}
                    </div>
                </div>
                <div>
                    <a href="/localintcalculator">
                        <img src="https://www.taxtim.com/za/images/calc-manufacturing-wear-and-tear.png" alt="Taxable Local interest" />
                        <p>Taxable Local interest</p>
                        <div className='content'>
                            {/* <span>Taxable local interest calculator</span> */}
                        </div>
                    </a>
                </div>
                <div>
                    <a href="/foreigncal">
                        <img src="https://www.taxtim.com/za/images/calc-income-tax.png" alt="Foreign Dividends" />
                        <p>Foreign Dividends</p>
                        <div className='content'>
                            {/* <span>How to calculate the amount of foreign dividends on taxable on your income tax assessment</span> */}
                        </div>
                    </a>
                </div>
                <div>
                    <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Home Office Calculator" />
                    <p>Home Office Calculator</p>
                    <div className='content'>
                        {/* <span>How to claim your home office expenses when working from home</span> */}
                    </div>
                </div>
                <div>
                    <img src="https://www.taxtim.com/za/images/calc-capital-gains.png" alt="Capital Gains Tax" />
                    <p>Capital Gains Tax</p>
                    <div className='content'>
                        {/* <span>How to calculate Capital Gains Tax on the disposal of your asset</span> */}
                    </div>
                </div>
            </div>
            <div className='right'>
                        <div className='right-flex'>
                            <div>
                                <img className='bot' src="https://www.taxtim.com/za/images/tim_full.svg" alt="Bot.png" />
                                <span style={{color:"#4d4d4d", fontWeight:"700"}}>Do your Tax
                                Return in 20
                                minutes or less!</span>
                            </div>
                            {/* <div className='t1'> */}
                                {/* <span style={{color:"#4d4d4d", fontWeight:"700"}}>Do your Tax
                                Return in 20
                                minutes or less!</span> */}
                            {/* </div> */}
                        </div>
                        <div className='t2'>
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
  )
}

export  {CalculatorPage}