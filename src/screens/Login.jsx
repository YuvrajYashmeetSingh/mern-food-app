import React ,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import Header from '../components/Header'
const Login = () => {
  const [state,setstate]=useState({
    email:"",
    password:"",
   })
 let navigate=useNavigate();
   const change=(e)=>{
    const {name,value}=e.target;
     
    setstate((prev)=>{
 
        return {...prev,[name]:value}
    })
}
    const submit_form=async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:8000/api/loginuser",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(

            {
                email:state.email,password:state.password
            }
        )
    
    });
    const json=await response.json();
    console.log(json);
    if(!json.success) alert("enter valid crdentials");
    else{
      navigate('/')
      console.log("success");
      localStorage.setItem("authToken",json.authToken);
      localStorage.setItem("userEmail",state.email);
    }
}
  return (
    <>
<div>
  <Header/>
</div>
<div className='container'>
        <form onSubmit={submit_form}>
        
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" name="email" autocomplete="off" value={state.email}  onChange={change}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" autocomplete="off" value={state.password} onChange={change}/>
  </div>  
  <button type="submit" className="m-3 btn btn-info">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'>Signup</Link>
</form>
</div>
    </>
  )
}

export default Login