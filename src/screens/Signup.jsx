import React, { useState } from 'react'
import { Link ,Navigate, useNavigate} from 'react-router-dom'
import Header from '../components/Header';
const Signup = () => {
  const navigate=useNavigate();
   const [state,setstate]=useState({
    name:"",
    email:"",
    password:"",
    location:"",
   })


    const submit_form=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:8000/api/createuser",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(

            {
                name:state.name,email:state.email,password:state.password,location:state.location
            }
        )
    
    });
    const json=await response.json();
    console.log(json);
    if(!json.success) alert("enter valid crdentials");
    else{
      console.log("success")
    localStorage.setItem("userName",state.name)
      navigate("/login")
      
    }
}

const change=(e)=>{
    const {name,value}=e.target;
     
    setstate((prev)=>{
 
        return {...prev,[name]:value}
    })
}
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='container'>
        <form onSubmit={submit_form}>
        <div className="mb-3">
    <label htmlFor="name" className="form-label ">Name</label>
    <input type="text" className="form-control  " name="name" value={state.name} onChange={change}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" name="email" value={state.email} onChange={change}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={state.password} onChange={change}/>
  </div>
  <div className="mb-3">
    <label htmlFor="loaction" className="form-label">Location</label>
    <input type="text" className="form-control" name="location" value={state.location} onChange={change}/>
  </div>
   
  
  <button type="submit" className="m-3 btn btn-info" to="/">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
        </>
  )
}

export default Signup