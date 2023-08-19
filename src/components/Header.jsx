import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import Badge from "react-bootstrap/Badge"
import Modal from '../Modals'
import Cart from '../screens/Cart'
import { useCart } from './CreateReducer'
const Header = () => {
  const [cartView,setCartView]=useState(false)
  let data=useCart();
  let name=localStorage.getItem("userName");

  

  const navigate=useNavigate();
  const logout=()=>{
   localStorage.removeItem("authToken");
   navigate("/")
  }
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-info " >
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic text-black" >yUvI food</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
       {
        (localStorage.getItem("authToken"))?
        
        <li className="nav-item d-flex">
          <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">Order</Link>
            
        </li>
        
         
     :""  }
        

      </ul>
      { (!localStorage.getItem("authToken"))?
      <div className='d-flex'>
       
          <Link   className="btn bg-white text-info mx-1"to="/login">Login</Link>
          <Link className="btn bg-white text-info mx-1" to="/createuser">SignUp</Link>
          
          </div>
:< >
  
<div className='btn bg-white text-info mx-2' onClick={()=>{setCartView(true)}}>Cart
<Badge pill bg="success mx-2"> {data.length} </Badge>
</div>
<div className="btn bg-success text-white mx-2 rounded-5">{name}</div>
{cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}

<div className='btn bg-danger text-white mx-2' onClick={logout}>Logout</div>
</>
}
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Header