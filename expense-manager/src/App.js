import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import AddIncome from './components/Income/AddIncome';
import UDIncome from './components/Income/DeleteUpdateIncome';
import Category from './components/Category/Category';


import MainDashboard from './MainDashboard';
import Up from './UserProfile';
import Login from './components/Login';
import Header from './Header';
import Signup from './components/Signup';
import UserProfile from './UserProfile';


function App() {
  return (
    <div>
      <Toaster/>
          <Router>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/HomeX" element={<MainDashboard/>}></Route>
              <Route path="/Up" element={<Up/>}></Route>
              <Route path="/UserProfile" element={<UserProfile/>}></Route>


              <Route path="AddIncome" element={<AddIncome email='Lakruwan987@gmail.com' topic='A d d &nbsp;&nbsp; I n c o m e' btnValue='Add Income' />}></Route>
              <Route path="Update_Income" element={<UDIncome topic='U p d a t e &nbsp;&nbsp; I n c o m e' btnValue='Update Income' email="Lakruwan987@gmail.com" id='7' />}></Route>
              <Route path="Category" element={<Category />}></Route>
              <Route path="Delete_Income" element={<UDIncome topic='D e l e t e &nbsp;&nbsp; I n c o m e' btnValue='Delete Income' email="Lakruwan987@gmail.com" id='7' />}></Route>
              
</Routes>
          </Router>
          
        
    </div>
  );
}

export default App;