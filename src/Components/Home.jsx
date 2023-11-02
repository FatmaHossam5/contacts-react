

import React , { useEffect, useState } from 'react'
import axios from "axios";
import ff from '../imgs/ff.png'
import { Link } from 'react-router-dom';



 export default   function Home() {
    const[contacts,setContacts]=useState([])
    const[input,setInput]=useState("");
    const[results,setResults]=useState([])

    async function getContacts(value){
        let {data}=await axios.get("https://dummyapi.io/data/v1/user",{
            headers:{
               "app-id":"64fc4a747b1786417e354f31"}
      })
      let result=data.data
  const res=result.filter((user)=>{
    return value&&user&&user.firstName&&user.firstName.toLowerCase().includes(value)
  })
  setResults(res)
    
      setContacts(data.data)
    }
    const getResult=(result)=>{
        setInput(result)
        getContacts(result)
        
    }
    async function deleteContact(id){
        let{data}=await axios.delete(`https://dummyapi.io/data/v1/user/`+id,{headers:{"app-id":"64fc4a747b1786417e354f31"}},{


})
console.log(data)
if(id){
    getContacts()

}

    }

    useEffect(()=>{
        getContacts()
      },[])
  
  return (
<div className="container-fluid bg-danger ">
    <div className="container border  my-5">
        <div className="serinput  col-md-8 m-auto   ">
            <input onChange={(e) => getResult(e.target.value)} type="text" name="search" id="search" className='my-5' placeholder='search by Name'/>
        </div>
        {results.map((res,index)=>{
            return <>
            <div key={index} className="line my-4 ">
<div className="getCont d-flex  col-md-10 m-auto ">
<div className="info  d-flex">
<img src={ff} alt="person" />
<div className="nar mx-4 my-3">
<h3>{res.firstName}</h3>
<h4>{res.lastName}</h4>
</div>
   
<hr  className='hr'/>

</div>




</div>

</div>
            </>
        })}
        <div className="addBtn my-5 mx-5 text-end">
          
            <Link to='/add'>
            <button className="Add"><i class="fa-solid fa-plus mx-2 fa-xl" ></i>
    Add New Contact
    </button>
            </Link>
    
    

</div>
    {contacts.map((contact,idx)=>{
        return <>
  
<div className="line my-4 ">
<div className="getCont d-flex  col-md-10 m-auto ">
<div className="info  d-flex">
<img src={ff} alt="person" />
<div className="nar mx-4 my-3">
<h3>{contact.firstName}</h3>
<h4>{contact.lastName}</h4>
</div>
   
<hr  className='hr'/>

</div>

<div className="icons  d-flex">
    <Link to={`/update/${contact.id}`}>
    <div className="edit mx-4">
<i   class="fa-solid fa-pen-to-square " ></i>
</div>
    </Link>

<div className="delete mx-4">
<i onClick={()=>{deleteContact(contact.id)}} class="fa-solid fa-trash"></i> 
</div>

</div>


</div>

</div>

        </>
    })}


    </div>
   
</div>
  )
}
