import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './Component/Navbar/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Sidebar from './Component/sidebar/Sidebar.js';
import Layout from './Pages/Layout.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.js';
import Users from './Pages/Users.js';
import Cart from './Pages/Cart.js';
import Data from './Pages/Data.js';
import Account from './Pages/Account.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Routes>
  <Route path="/" element={<Dashboard/>} />
  <Route path="/users" element={<Users/>} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/data" element={<Data/>} />
  <Route path="/account" element={<Account/>} />
</Routes>
</BrowserRouter>

  

);

