
import { useState } from "react"
import { useDispatch } from "react-redux"
import {  useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button
} from '@chakra-ui/react';

import styles from './Paynow.module.css';
import { handlepostdetails } from '../Redux/PayReducer/action.js';

const initialdata = {
    firstname: '',
    lastname: "",
    email: '',
    address: '',
    number: ''
}
function Paynow() {

    const [data, setdata] = useState(initialdata);
    const [taxAmount, setTaxAmount] = useState('');
    const dispatch=useDispatch()
    const navigate =useNavigate()
    // const [showAlert, setShowAlert] = useState(false);
    // const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const onToken = (token)=>{
      console.log(token);
      handlesubmit()
     }
    function handlechange(e) {
        const { name, value } = e.target;
        setdata((prev)=>{
            return {...prev,[name]:value}
        })

    }
        // Function to handle the Tax Amount input change
        const handleTaxAmountChange = (e) => {
          setTaxAmount(e.target.value);
      };
  
    function handlesubmit() {
        console.log("clicked");
        let flag=true
        for(let key in data){
           if(!data[key]){
            flag=false
           }
        }
        if(flag){
          console.log("succes clicked");
            dispatch(handlepostdetails(data))
            // alert('Your Payment is Successfully done')
            // setShowSuccessAlert(true);
            setTimeout(() => {
              navigate('/');
            }, 1000);
            // navigate('/')
        }
        else{
            // alert('Need to Fill all the credentials')
            console.log("error clicked");
            // setShowAlert(true);
        }
       
        
        
    }
    
    return (

      
        <div style={{ marginTop: '50px', paddingTop: '100px' }}>
               
            <div width='100%' style={{ color: 'black' }} >
           
                <div id={styles.flexdiv}>
                    <div className={styles.formdiv}>
             
                        <h1 className={styles.head}>User details</h1>
                        <div style={{ textAlign: 'left', padding: '30px 60px' }}>
                            <p >First Name*</p>
                            <input type="text" placeholder="Enter your first name" value={data.firstname} onChange={(e) => handlechange(e)} className={styles.inputbox} name="firstname" />
                            <p style={{ marginTop: '15px' }}>Last Name*</p>
                            <input type="text" placeholder="Enter your last name" value={data.lastname} onChange={(e) => handlechange(e)} className={styles.inputbox} name="lastname" />
                            <p style={{ marginTop: '15px' }}>Email*</p>
                            <input type="text" placeholder="Enter your email" value={data.email} onChange={(e) => handlechange(e)} className={styles.inputbox} name="email" />
                            <p style={{ marginTop: '15px' }}>Address*</p>
                            <input type="text" placeholder="Enter your Address details" value={data.address} onChange={(e) => handlechange(e)} className={styles.inputbox} name="address" />
                            <p style={{ marginTop: '15px' }}>Mobile number*</p>
                            <input type="number" placeholder="Enter your mobile number" value={data.number} onChange={(e) => handlechange(e)} style={{ backgroundColor: '#DAEFF4', width: '100%', padding: '10px 10px', borderRadius: '7px', color: 'black' }} name="number" />
                          
                            <p style={{ marginTop: '10px' }}>Tax Amount</p>
                                <input type="text" className={styles.inputbox} value={taxAmount} onChange={handleTaxAmountChange}/>
                        </div>
                        
                    </div>
                    <div className={styles.formdiv}>
                        {/* <h1 className={styles.head}>Bank details</h1>
                        <div style={{ textAlign: 'left', padding: '30px 60px' }}>
                            <p style={{ marginTop: '10px' }}>Name on Card*</p>
                            <input type="text" placeholder="Enter your first name" className={styles.inputbox} />
                            <p style={{ marginTop: '10px' }}>Debit/Credit card number*</p>
                            <input type="text" placeholder="Enter your first name" className={styles.inputbox} />
                            <p style={{ marginTop: '10px' }}>Expiration Date*</p>
                            <div style={{ display: 'flex', gap: '20px', color: 'black' }}>
                                <select className={styles.inputbox} >
                                    <option value="">Month</option>
                                    <option value="">01-Jan</option>
                                    <option value="">02-Feb</option>
                                    <option value="">03-March</option>
                                    <option value="">04-April</option>
                                    <option value="">05-May</option>
                                    <option value="">06-June</option>
                                    <option value="">07-July</option>
                                    <option value="">08-Aug</option>
                                    <option value="">09-Sep</option>
                                    <option value="">10-Oct</option>
                                    <option value="">11-Nov</option>
                                    <option value="">12-Dec</option>

                                </select>
                                <select className={styles.inputbox}>
                                    <option value="">Year</option>
                                    <option value="">2023</option>
                                    <option value="">2024</option>
                                    <option value="">2025</option>
                                    <option value="">2026</option>
                                    <option value="">2027</option>
                                    <option value="">2028</option>
                                    <option value="">2029</option>
                                    <option value="">2030</option>
                                    <option value="">2031</option>
                                    <option value="">2032</option>
                                    <option value="">2033</option>
                                    <option value="">2034</option>
                                    <option value="">2035</option>
                                    <option value="">2036</option>
                                    <option value="">2037</option>
                                    <option value="">2038</option>
                                    <option value="">2039</option>
                                    <option value="">2040</option>
                                    <option value="">2041</option>
                                </select>
                            </div>
                            <div >
                                <p style={{ marginTop: '10px' }}>Security Code</p>
                                <input type="password" className={styles.inputbox} />
                            </div>
                            <div >
                                <p style={{ marginTop: '10px' }}>Tax Amount</p>
                                <input type="text" className={styles.inputbox} value={taxAmount} onChange={handleTaxAmountChange}/>
                            </div>
                        </div> */}
                        {/* <div id={styles.divpay}><button id={styles.paybutton} onClick={handlesubmit} >Click to pay Tax</button></div> */}
                    {/* <Button onClick={handlesubmit} >Pay Now</Button> */}
                    {/* {showSuccessAlert && (
            <Alert status='success' position="absolute" top="10px" right="10px" zIndex={100}>
              <AlertIcon />
              <AlertTitle>Payment Successful</AlertTitle>
              <AlertDescription>Your payment has been processed successfully.</AlertDescription>
            </Alert>
          )}

                    {showAlert && ( <Alert status='error'>
      <AlertIcon />
      Need to fill all Credentials
    </Alert>)} */}
   
    <StripeCheckout
        token={onToken}
        name="TaxTim Pay Returns"
        currency="Inr"
        amount={taxAmount*100}
        stripeKey="pk_test_51OJMjCSAjvY3hLJ3guc0YyhIdWlr35AS7rddkLF5Q8CK2e3KS4ULCCMAlaat0sm0nD0ZcMCnK4UJagRjQpiwF9G700DkriFi2r"
      />
                    </div>
                </div>
            </div>
         
        </div>)
}
export default Paynow;

