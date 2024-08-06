import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import "./dashboard.css"
export default function Box() {
  return (
    <div className='container-fluid box d-flex justify-content-center align-items-center ' >
       <div className='box-left' > 
       <span className='box-icon' > <BusinessCenterIcon className='fs-1' /></span>
        <span className='total' >total Orders</span>
        <h1>75</h1>
       </div>
       <div className=' box-right' >
        <span>3%</span>
       </div>
    </div>
  )
}
