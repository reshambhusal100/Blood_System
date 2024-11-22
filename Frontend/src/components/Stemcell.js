import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/Blood.css';
function Stemcell(){
    const [values,setValues]=useState({
       stemcell_name:'',
         stemcell_age:'',      
       stemcell_group:'',
       stemcell_gender:'',
       stemcell_phone:'',
       stemcell_city:'',
       stemcell_weight:'',
       stemcell_diagnosis:''
        })
        const navigate=useNavigate() 
        const [errors,setErrors]=useState({})
      const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
      }
        const handleSubmit=(event)=>{
          event.preventDefault();
          axios.post('http://localhost:8080/Stemcell',values)
        .then(res=>{
        navigate('/Donate');
        
        })
        .catch(err=>console.log(err)); 
        }
      
return(
    <>
    <div className='blood-main'>
    <div className='blood-1'>
       <form id="login"   onSubmit={handleSubmit}>
        <div className='blood-2'>
                <input type="text" className="blood-2" placeholder="username" name="stemcell_name" onChange={handleInput} required/>
                <input type="number" className="blood-2" placeholder="age" name="stemcell_age" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="blood group" name="stemcell_group" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="gender" name="stemcell_gender" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="phone" name="stemcell_phone" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="city" name="stemcell_city" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="weight" name="stemcell_weight" onChange={handleInput} required/>
                <input type="text" className="blood-2" placeholder="previous diagnosis if any" name="stemcell_diagnosis" onChange={handleInput} required/><br/><br/>
    <button className='blood-button-1'><Link to='/Donate'>Cancel</Link></button>
                <button className='blood-button-1' type="submit">Register</button>
                </div>
            </form>
            </div>
            </div>
    </>
)
}
export default Stemcell;