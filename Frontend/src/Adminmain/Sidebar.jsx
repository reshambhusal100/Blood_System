// Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaPlus, FaTint, FaChartBar } from 'react-icons/fa';
import '../css/Sidebar.css';
import { MdBloodtype } from "react-icons/md";



// const Sidebar = () => {


function Sidebar(){
  return (
    <div className="sidebar">
     <div className="header"> Admin Panel</div>
      <div className="nav-item" title="User Request">
        <FaTint className="icon" />
        <span className="text"><Link to='/AdminDashboard' className="text">BLOOD DETAILS</Link></span>
      </div>
      <div className="nav-item" title="Create">
        <FaPlus className="icon" />
        <span className="text"><Link to='/Create' className="text">CREATE</Link></span>
      </div>
     

      <div className="nav-item" title="Blood Details Count">
      <MdBloodtype size={25} />
        <span className="text" ><Link to='/Donorlist' className="text">Donor List</Link></span>
      </div>

      <div className="nav-item" title="Blood Details Count">
        <FaTint className="icon" />
        <span ><Link to='/Requestedlist'className="text">Requested List</Link></span>
      </div>
    </div>
  );
};

export default  Sidebar;
