import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './CreateReducer';

const Card = (props) => {
  const[qty,setQty]=useState(1);
   const[size,setSize]=useState("")  
   let dispatch=useDispatchCart();
   let data=useCart();
   let priceRef=useRef()
  let opt=props.options;
   let p=Object.keys(opt);
   
   const handleAddToCart=async()=>{
    let food=[]
    for(const item of data){
      if(item.id===props.foodItems._id){
  food=item;
  break;
      }
    }
    if(food!=[]){
      if(food.size===size){
        await dispatch({type:"UPDATE",id:props.foodItems._id,price:finalPrice,qty:qty})
        return;
      }
    
    else if(food.size!==size)
  {  await dispatch({
      type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice,qty:qty,size:size
      
    })
  
    return}
  return;}
    
    await dispatch({
      type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice,qty:qty,size:size
       
    })
   }
   let finalPrice=qty*parseInt(opt[size]);
   useEffect(()=>{
setSize(priceRef.current.value)
   },[])
  return (
    <div>
        <div class="card mt-3" style={{ width: "18rem","maxHeight":"400px",borderRadius:"20px 20px 20px 20px" }}>
        <img src={props.foodItems.img} class="card-img-top" alt="..." style={{height:"160px",objectFit:"fill"}}/>
        <div class="card-body">
          <h5 class="card-title"> {props.foodItems.name}</h5>
          <p class="card-text">Some quick example text to build on </p>
          <div className="conatiner w-100">
            <select className="m-2 h-100 bg-info rounded" onChange={(e)=>setQty(e.target.value)}>
             {
              Array.from(Array(10),(e,i)=>{
                return (
                  <option key={i+1} value={i+1}>{i+1} </option>
                )
              })
             }
            </select>
            <select className="m-2 h-100 bg-info rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
            {p.map((data)=>{
              return (<> <option key={data} value={data} >{data}</option></>)
            })} 
            </select>
            <div className="d-inline h-100 fs-5 text-white">
                {finalPrice}/-
            </div>
          </div>
          <hr />
          <button className='btn btn-info justify-content-between ms-2' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card