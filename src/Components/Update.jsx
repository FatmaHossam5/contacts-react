import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ff from '../imgs/ff.png'

export default function Update() {
    const {id}=useParams()

    const[contact,setContact]=useState({'firstName':"","lastName":"","email":"","phone":"","app-id":"64fc4a747b1786417e354f31",id:id})
    const navigate =useNavigate()
   
    
    async function updateContact(e){
        e.preventDefault();
        axios.put("https://dummyapi.io/data/v1/user/"+id,contact,{headers:{"app-id":"64fc4a747b1786417e354f31"}}).then(res=>
        {
            alert("gooooooooood")
            navigate('/')
        })
    

  
    }
    // useEffect(()=>{axios.get("https://dummyapi.io/data/v1/user/").then(res=>setContact(res.data)).catch(err=>console.log(err))},[])
  return (<>
   <div className="container-fluid vh-100">
    <div className="container contadd bg-white col-md-8 my-5">
       <form onSubmit={updateContact}>
        <div className="profImg g  my-5  ">
        <img src={ff} alt=""  />
        </div>
      <div className="inputs  col-md-10 m-auto ">
        <div className="names my-5  d-flex">
        <input onChange={e=>setContact({...contact,firstName:e.target.value})} value={contact.firstName} type="text" name='firstName'className='input firstName py-1 me-5' placeholder='First Name' />
        <input  onChange={e=>setContact({...contact,lastName:e.target.value})}  value={contact.lastName} type="text" name='lastName'className='input lastName py-1' placeholder='Last Name' />
        </div>
        <div className="nums my-5 py-4 d-flex">
        <input  onChange={e=>setContact({...contact,phone:e.target.value})}value={contact.phone} type="text" name='phone'className='input phone py-1 me-5' placeholder='phone Number' />
        <input   onChange={e=>setContact({...contact,email:e.target.value})}value={contact.email} type="text" name='email'className='input Email py-1' placeholder='Email' />

        </div>
   


      </div>
      <div className="btns  d-flex my-4">
      <button className='btn btn-secondary px-5 ms-5'>Cancel</button>
        <button className='btn btn-info px-5 me-5'>Save</button>

      </div>
        
        
       </form>
    </div>
    
   </div>
  </>
   
  )
}
