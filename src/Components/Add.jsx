import React, { useState } from 'react'
import ff from '../imgs/ff.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Add() {
    const navigate =useNavigate()
    const[contact,setContact]=useState({'firstName':"","lastName":"","email":"","phone":"","app-id":"64fc4a747b1786417e354f31"})
    function getContact({target}){
        setContact({...contact,[target.name]:target.value})
       
    }
    async function addContact(e){
        e.preventDefault();
        let {data}=await axios.post("https://dummyapi.io/data/v1/user/create",contact,{headers:{"app-id":"64fc4a747b1786417e354f31"}})
    console.log(data)
navigate('/')
  
    }
  return (
   <div className="container-fluid vh-100">
    <div className="container contadd bg-white col-md-8 my-5">
       <form onSubmit={addContact}>
        <div className="profImg g  my-5  ">
        <img src={ff} alt=""  />
        </div>
      <div className="inputs  col-md-10 m-auto ">
        <div className="names my-5  d-flex">
        <input onChange={getContact} type="text" name='firstName'className='input firstName py-1 me-5' placeholder='First Name' />
        <input  onChange={getContact} type="text" name='lastName'className='input lastName py-1' placeholder='Last Name' />
        </div>
        <div className="nums my-5 py-4 d-flex">
        <input  onChange={getContact} type="text" name='phone'className='input phone py-1 me-5' placeholder='phone Number' />
        <input   onChange={getContact}type="text" name='email'className='input Email py-1' placeholder='Email' />

        </div>
   


      </div>
      <div className="btns  d-flex my-4">
      <button className='btn btn-secondary px-5 ms-5'>Cancel</button>
        <button className='btn btn-info px-5 me-5'>Save</button>

      </div>
        
        
       </form>
    </div>
    
   </div>
  )
}
