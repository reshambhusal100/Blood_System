import css from '../css/Donate.css';
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import blood_donation from '../images/blood.png';
import red_blood from '../images/OIP.jpeg';
import platelette from '../images/platelette.png';
import cell_donation from '../images/stemcell.png';
function Donate(){
    
    return(
        <>
        <Navbar/>
        <div className='donateblood'>
        <div className='donate'>
          <p>REGISTER TO DONATE</p>
 <div className='donateus'>
  <div className='donate-1'>
  <div className='donate-2'>
    <img src={blood_donation} width='350px' height='250px' alt='blood-donation'/>
    <div className='donate-3'>
    <p className='blood-p'>Blood Donation</p>
    </div>
    <div className='donate-4'>
    <p>ready to donate??? proceed here...</p>
    </div>
    <div className='donate-5'>
    <p><button><Link style={{color:'inherit'}} to='/Blood'>Donate now</Link></button></p>
    </div>
     </div>
  </div>
  <div className='donate-1'>
  <div className='donate-2'>
<img src={red_blood}  width='350px' height='250px' alt='red-blood'/>
<div className='donate-3'>
<p className='blood-p'>Blood Request</p>
</div>
<div className='donate-4'>
<p>ready to donate??? proceed here...</p>
</div>
<div className='donate-5'>
    <p><button><Link style={{color:'inherit'}} to='/Status'>Check now</Link></button></p>
    </div>
    </div>
  </div>
  </div>
  <div className='donateus-1'>
  <div className='donate-1'>
  <div className='donate-2'>
    <img src={platelette} width='350px' height='250px' alt='platelette'/>
    <div className='donate-3'>
    <p className='blood-p'>Platelet Donation</p>
    </div>
    <div className='donate-4'>
    <p>ready to donate??? proceed here...</p></div>
<div className='donate-5'>
    <p><button>Donate Now</button></p>
    </div>
    </div>
  </div>
  <div className='donate-1'>
  <div className='donate-2'>
<img src={cell_donation}  width='350px' height='250px'alt='cell'/>
<div className='donate-3'>
<p className='blood-p'>Stem cells donation</p>
</div>
<div className='donate-4'>
<p>ready to donate??? proceed here...</p>
    </div>
    <div className='donate-5'>
    <p><button>Donate now</button></p>
    </div>
    </div>
  </div>
  </div>
  </div>
  </div>
        </>
    );
}
export default Donate;