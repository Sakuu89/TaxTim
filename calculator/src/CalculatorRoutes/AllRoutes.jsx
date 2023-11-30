import { Route,Routes } from "react-router-dom";
import React from 'react'
import { CalculatorPage } from "../Components/CalculatorPage";
import  AidkidPage  from "../Components/AidkidPage";
import  Foreigncal  from "../Components/Foreigncal";
import  SalarytaxPage  from "../Components/SalarytaxPage";
import  TaxRefundPage  from "../Components/TaxRefundPage";
import  LumpsumPage  from "../Components/LumpsumPage";
import  TravelDeductionPage  from "../Components/TravelDeductionPage";
import  WeartearPage  from "../Components/WeartearPage";
import  LocalIntCalculator  from "../Components/LocalIntCalculator";
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<CalculatorPage/>}/>
        <Route path="/salarytaxpage" element={<SalarytaxPage/>}/>
        <Route path="/taxrefundpage" element={<TaxRefundPage/>}/>
        <Route path="/lumpsumpage" element={<LumpsumPage/>}/>
        <Route path="/traveldeductionpage" element={<TravelDeductionPage/>}/>
        <Route path="/aidkidpage" element={<AidkidPage/>}/>
        <Route path="/weartearpage" element={<WeartearPage/>}/>
        <Route path="/localintcalculator" element={<LocalIntCalculator/>}/>
        <Route path="/foreigncal" element={<Foreigncal/>}/>
    </Routes>
  )
}

export default AllRoutes;