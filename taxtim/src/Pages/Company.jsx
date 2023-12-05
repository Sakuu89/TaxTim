import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../Images/man.png"
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'


import styles from './Company.module.css'
import { Button } from '@chakra-ui/react'

 const Company = () => {
    const navigate = useNavigate()
    return (
      
            <div className={styles.main}>
           
                <div className={styles.head}>
                    <h1>Tax Calculators</h1>
                    <h2>Calculate everything you need to know about your tax and how tax affects you</h2>
                </div>
                <div className={styles['left-right']}>
                    <h2>Calculators for Companies</h2>
                    <div className={styles.both}>
                        <div className={styles.left}>

                            <div className={styles.imageContainer} onClick={() => navigate("/incomeTax")}>
                                <img src={image1}alt="Salary Tax" />
                                <p style={{right:"50px"}}>Income Tax</p>
                                <div className={styles.content}>
                                    <span>How to calculate the tax for a Small Business Corporation</span>
                                </div>
                            </div>
                            <div className={styles.imageContainer} onClick={() => navigate("/wear-tear")} >
                                <img src={image2}alt="Tax Refund" />
                                <p>s12c Wear & Tear</p>
                                <div className={styles.content}>
                                    <span>How to calculate the Section 12C Depreciation/Wear and Tear allowance on plant and machinery used for manufacure</span>
                                </div>
                            </div>
                            <div className={styles.imageContainer} onClick={() => navigate("/wear-tear")} >
                                <img src={image3} alt="Retairment Lump Sum" />
                                <p>SBC Wear & Tear</p>
                                <div className={styles.content}>
                                    <span>How to calculate the accelarated 512E Depreciation/Wear and Tear allowance on assests in a Small Bussiness Corporation(SBC</span>
                                </div>
                            </div>
                            <div className={styles.imageContainer} onClick={() => navigate("/wear-tear")} >
                                <img src={image4} alt="Travel Deduction" />
                                <p style={{right:"50px"}}>Wear & Tear</p>
                                <div className={styles.content}>
                                    <span>How to calculate the Section 11(e) Depreciation/Wear and Tear allowance on business assets</span>
                                </div>
                            </div>
                            <div className={styles.imageContainer} onClick={() => navigate("/lease-premium")}>
                                <img src={image5} alt="Capital Gains Tax" />
                                <p style={{right:"15px"}}>s11(f) Lease Premium</p>
                                <div className={styles.content}>
                                    <span>How to claculate the Section 11(c)tax deduction for a lease Premium</span>
                                </div>
                            </div>
                            <div className={styles.imageContainer}>
                                <img src={image6} alt="Medical Aid Credits" />
                                <p style={{top:"85%", right:"8px"}}>Leashold Improvements</p>
                                <div className={styles.content}>
                                    <span>How to calculate the Section 11(g) Leasehold Improvements allowance for renovation/Improvements done to a building that the business leases</span>
                                </div>
                            </div>

                        </div>
                        {/* <div className={styles.right} style={{ display: "flex", flexDirection: "column", backgroundColor: "#DAEFF4" ,paddingTop:"20px"}}>
                            
                            <img src="https://media.taxtim.com/images/taxtim-logo.svg" alt="error" width={"200px"} height={"200px"} style={{ display: "block", margin: "auto" }} />
                            <h3>-Easy Tax Filling-</h3>
                            <h1>Switch to TaxTim and <br /> WIN R10,000</h1>
                            <Button colorScheme='facebook' margin={"20px 180px"} onClick={()=>navigate('/about')}>
                               Get Started
                            </Button>

                            <img src={image} alt="error" width={"350px"} height={"500px"} style={{ margin: "45px 5px 5px 15px" }} />
                        </div> */}

                    </div>

                </div>
            </div>

    )
}

export default Company;
