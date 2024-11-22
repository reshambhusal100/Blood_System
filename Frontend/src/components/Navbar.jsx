import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/Navbar.css';
import login_icon from '../images/login.jpeg';
import Dropdown from 'react-bootstrap/Dropdown';



function Navbar({ userEmail}){
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
   
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    return(
        <>
        <div className="header">
            <div className="custom-navbar">
                <ul>
                    <div className="nav">
                        <div id="head">
                            <a>BLOOD BANK</a>
                        </div>
                    <li><Link to='/Home'>HOME</Link></li>
                    <li><Link to='/About'>ABOUT US</Link></li>
                    <li><Link to='/Donate'>DONATE</Link></li>
                    <li><Link to='/Service'>SERVICES</Link></li>
                    <li><Link to='/Requestblood'>REQUEST BLOOD</Link></li>
                    {
                        token == null||token == undefined?(
                            <li><Link to='/login'>
                    <img src={login_icon} width='30px' height='30px' alt='login-icon'/>
                    Login/Signin</Link></li>
                   
                        ):(
                    <li onClick={handleLogout}>LOG OUT</li>
                        )
                    }
                    
                    </div>
                    <div className="user-info">
                    <p className="logoname">{userEmail}</p>
        
       </div>
                    
                </ul>
            </div>
        </div>
        </>
    );
}
export default Navbar;





// function Navbar({ userEmail }) {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <h1>Healthcare</h1>
//       </div>
//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="/Contact">Contact</a>
//         <a href="/Donate">Donate</a>
//         <a href="/Service">Service</a>
//       </div>
//       <div className="user-info">
        
//       </div>
//     </div>
//   );
// }

// export default Navbar;