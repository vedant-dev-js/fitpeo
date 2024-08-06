import React from 'react'
import "./Navbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (


    <>
      {/* Navbar */}
      <nav className="navbar mynavbar navbar-expand-lg navbar-dark light-border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{ height: "45px" }} src="https://cdn-icons-png.flaticon.com/512/2504/2504696.png" className='img-fluid fa-2x mx-3 ps-1' />

          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="me-3">
              <div className="form-white input-group" style={{ width: 250 }}>
                <input type="search" style={{ backgroundColor: "rgb(41,43,47)", color: "white" }} className="form-control rounded searchbar" placeholder="Search or jump to... ( / )" aria-label="Search" aria-describedby="search-addon" />
              </div>
            </form>

            <ul className="navbar-nav d-flex flex-row ms-auto me-3">
              <li className="nav-item me-3 me-lg-0 ">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <SettingsIcon />
                </a>

              </li>
              <li className="nav-item me-3 me-lg-0 dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <NotificationsNoneIcon />
                </a>
              </li>

              <li className="nav-item me-3 me-lg-0 dropdown">
                <a type="button" class="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <MailOutlineIcon />
                </a>
                <ul className="dropdown-menu dropdown-menu2 dropdown-menu-end bg-dark text-white" aria-labelledby="navbarDropdown1">
                  <li>
                    <div className='d-flex' >
                      <div className="px-3" >
                        <img className='mail-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUyYy8VruEHbKZh5wwGKo8iYA-88EMCgnHA&s" />
                      </div>
                      <div><span className='mail-title' >Urgent: System Maintenance Tonight</span><br></br>
                        <span className='mail-details px-2' >Attention team, we'll be conducting critical system maintenance tonight from 10 PM to 2 AM. Plan accordingly...</span>
                      </div>
                    </div>
                    <hr className='mx-3' ></hr>
                  </li>
                  <li>
                    <div className='d-flex' >
                      <div className="px-3" >
                        <img className='mail-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUyYy8VruEHbKZh5wwGKo8iYA-88EMCgnHA&s" />
                      </div>
                      <div><span className='mail-title' >Urgent: System Maintenance Tonight</span><br></br>
                        <span className='mail-details px-2' >Attention team, we'll be conducting critical system maintenance tonight from 10 PM to 2 AM. Plan accordingly...</span>
                      </div>
                    </div>
                    <hr className='mx-3' ></hr>
                  </li>
                  <li>
                    <div className='d-flex' >
                      <div className="px-3" >
                        <img className='mail-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUyYy8VruEHbKZh5wwGKo8iYA-88EMCgnHA&s" />
                      </div>
                      <div><span className='mail-title' >Urgent: System Maintenance Tonight</span><br></br>
                        <span className='mail-details px-2' >Attention team, we'll be conducting critical system maintenance tonight from 10 PM to 2 AM. Plan accordingly...</span>
                      </div>
                    </div>
                    <hr className='mx-3' ></hr>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3 me-lg-0 dropdown">
                <a type="button" class="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={22} alt loading="lazy" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end bg-dark text-white" aria-labelledby="navbarDropdown1">
                  <li><a className="dropdown-item text-white" href="#">Settings</a></li>
                  <li><a className="dropdown-item text-white" href="#">Status</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}

      {/**********/}
      <div className='mynavbar2 justify-content-start align-items-center' >




        <div className='d-flex mx-3 text-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" ><SortIcon className='text-white' />
        </div>



        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">

            <CloseIcon type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <div>
              <ul className='d-flex flex-column gap-3' >
                <li className="nav-item me-3 me-lg-0 dropdown">
                  <a type="button" class="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={22} alt loading="lazy" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end bg-dark text-white" aria-labelledby="navbarDropdown1">
                    <li><a className="dropdown-item text-white" href="#">Settings</a></li>
                    <li><a className="dropdown-item text-white" href="#">Status</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">Logout</a>
                    </li>
                  </ul>
                </li>
                <li><Link className='nav-link text-white active' to="/" >Home</Link></li>
                <li><Link className='nav-link text-white' to="/users" >Status</Link></li>
                <li><Link className='nav-link text-white' to="/cart" >Data</Link></li>
                <li><Link className='nav-link text-white'to="/account" >Account</Link></li>
                <li className="nav-item text-white ">
                <a className="nav-link"  id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  Notification
                </a>
              </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
