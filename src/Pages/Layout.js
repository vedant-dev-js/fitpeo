import React from 'react'
import Nav from '../Component/Navbar/Nav'
import HomeIcon from '@mui/icons-material/Home';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';


export default function Layout({ children }) {
  return (
    <>
      <div className='' >
        <div className='position-sticky top-0' >
          <Nav />
        </div>

        <div className='mycontainer' >
          <div className='left-menu' >
            <ul className='d-flex  pt-5 text-white flex-column gap-5 ' >
              <li className='nav-link d-flex '  ><Link className='text-white' to="/" ><HomeIcon className='fs-2'  /></Link></li>
              <li className='nav-link d-flex gap-1' ><Link className='text-white' to="/users" ><QueryStatsIcon className='fs-3' /></Link></li>
              <li className='nav-link d-flex gap-1' ><Link className='text-white' to="/data" ><DescriptionIcon className='fs-3' /></Link></li>
              <li className='nav-link d-flex gap-1' ><Link className='text-white' to="/account" ><AccountBalanceWalletIcon className='fs-3' /></Link></li>
              <li className='nav-link d-flex gap-1' ><Link className='text-white' to="/cart" ><LocalMallIcon className='fs-3' /></Link></li>
            </ul>
          </div>
          <div className='right-content h-100' >

            {
              children
            }

          </div>
        </div>

      </div>
    </>
  )
}
