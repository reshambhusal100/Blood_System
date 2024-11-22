import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


function Read() {
    const {id} = useParams();
    const [student, setStudent]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/read/'+id)
        .then(res=>{
            console.log(res)
            setStudent(res.data);

    })
        .catch(err=>console.log(err));
    },[]);
    

    return (
        <>
            <div>Read</div>
        </>
    )
}
export default Read

