const express=require("express")
const router=express.Router()
const order=require("../models/order")
router.post('/orderData',async(req,res)=>{
    let  data=req.body.order_data
    await data.splice(0,0,{order_date:req.body.order_date})


let email_id=await order.findOne({'email':req.body.email})
console.log('email id is ',email_id)

if(email_id==null){
    console.log(req.body.email)
    console.log(data)
    try{
        await order.create({
            email:req.body.email,
            order_data:[data]
        }).then(()=>{res.json({success:true})})
    }
catch(e){
   { console.error(`Error while creating the user ${e}`)}
}
}
else{
    try{
        await order.findOneAndUpdate({email:req.body.email},
            {$push:{order_data:data}}
            ).then(()=>{res.json({success:true})})
    }catch(e){
        res.send(`server error${e}`)
    }
}
})
router.post('/myOrder',async(req,res)=>{
    try{
        let mydata=await order.findOne({'email':req.body.email})
        console.log(req.body.email)
        console.log(mydata)
       
        res.json({orderData:mydata})
    }
    catch(e){
        res.status(422).send(`${e}`);
    }
})
module.exports=router