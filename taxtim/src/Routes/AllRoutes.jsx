import React from 'react'
import { Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Calculator from '../Pages/Calculator'
import Company from '../Pages/Company'
import FAQ from '../Pages/FAQ'
import Login from '../Pages/Login'
import Paynow from '../Pages/Paynow'
import Students from '../Pages/Students'
import Logbook from '../Pages/Logbook'
// import Contact from '../Pages/Contact'
const AllRoutes = () => {
  return (
   <Routes>
    
<Route path='/' element={<HomePage />}></Route>
<Route path='/about' element={<About />}></Route>
<Route path='/blog' element={<Blog />}></Route>
<Route path='/calculator' element={<Calculator />}></Route>
<Route path='/comapany' element={<Company />}></Route>
{/* <Route path='/contact' element={<Contact/>}></Route> */}
<Route path='/faq' element={<FAQ />}></Route>
<Route path='/logbook' element={<Logbook />}></Route>
<Route path='/login' element={<Login />}></Route>
<Route path='/paynow' element={<Paynow />}></Route>
<Route path='/students' element={<Students />}></Route>

   </Routes>
  )
}

export default AllRoutes
