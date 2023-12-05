import React, { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import { CalculatorPage } from '../Components/CalculatorPage'
import Company from '../Pages/Company'
import FAQ from '../Pages/FAQ'
import {Login} from "../Pages/Login"
import Paynow from '../Pages/Paynow'
import Students from '../Pages/Students'
import Logbook from '../Pages/Logbook'
import { Howitworks } from '../Pages/Howitworks'
import PasswordReset from '../Pages/Passwordreset'
import { auth } from '../Firebase'
import SalarytaxPage from '../Components/SalarytaxPage'
import TaxRefundPage from '../Components/TaxRefundPage'
import LumpsumPage from '../Components/LumpsumPage'
import TravelDeductionPage from '../Components/TravelDeductionPage'
import AidkidPage from '../Components/AidkidPage'
import WeartearPage from '../Components/WeartearPage'
import LocalIntCalculator from '../Components/LocalIntCalculator'
import Foreigncal from '../Components/Foreigncal'
import IncomeTax from '../Pages/IncomeTax'
import WearTear from '../Pages/WearTear'
import LeasePremium from '../Pages/LeasePremium'

const AllRoutes = () => {
  const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
              console.log(user);
                setUserName(user.displayName);
            } else setUserName("");
        });
    }, [])
  return (
   <Routes>

<Route path='/' element={<HomePage />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/blog' element={<Blog />}></Route>
<Route path='/calculator' element={<CalculatorPage />}></Route>
<Route path="/salarytaxpage" element={<SalarytaxPage/>}/>
<Route path="/taxrefundpage" element={<TaxRefundPage/>}/>
<Route path="/lumpsumpage" element={<LumpsumPage/>}/>
<Route path="/traveldeductionpage" element={<TravelDeductionPage/>}/>
<Route path="/aidkidpage" element={<AidkidPage/>}/>
<Route path="/weartearpage" element={<WeartearPage/>}/> <Route path="/localintcalculator" element={<LocalIntCalculator/>}/>
<Route path="/foreigncal" element={<Foreigncal/>}/>
<Route path='/comapany' element={<Company />}></Route>
<Route path='/faq' element={<FAQ />}></Route>
<Route path='/logbook' element={<Logbook />}></Route>
<Route path='/login' element={<Login />}></Route>
<Route path='/paynow' element={<Paynow />}></Route>
<Route path='/howitworks' element={<Howitworks />}></Route>
<Route path='/passwordreset' element={<PasswordReset/>}></Route>
<Route path='/students' element={<Students />}></Route>
<Route path='/incomeTax' element={<IncomeTax/>}></Route>
<Route path='/wear-tear' element={<WearTear/>}></Route>
<Route path='/lease-premium' element={<LeasePremium />}></Route>

   </Routes>
  )
}

export default AllRoutes;
