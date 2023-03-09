import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../components/header/Header'
const DashboardLayout = () => {
  return (
       <div>
              <Header /> 

               <div>
                <Outlet /> 
               </div>
       </div>
  )
}

export default DashboardLayout;