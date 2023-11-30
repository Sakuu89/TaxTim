import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {

    const links = [
        {title:"Calculator", path:'/calculator'},
        {title:"Company", path:'/company'},
        {title:"Conatct", path:'/contact'},
        {title:"FAQ", path:'/faq'},
        {title:"LogBook", path:'/logbook'},
        {title:"Login", path:'/login'},
        {title:"Paynow", path:'/paynow'},
        {title:"Students", path:'/students'}
       
    ]
  return (
    <div>
     {links.map((link, index)=>{
       
       return <Link key={index} to ={link.path}>
        {link.title}</Link>
     })}
    </div>
  )
}

export default Navbar
