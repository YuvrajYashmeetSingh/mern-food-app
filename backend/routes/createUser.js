const express=require('express');
const router =express.Router()

const User=require("../models/User")
const {body,validationResult}=require('express-validator')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const jwtkey="mynameisyuvajsinghageis21currentlypursuingbtechdegreefromnitsri";
router.post('/createuser',
[
    body('name','invalid name').isLength({min:4}),
    body('email','invalid email').isEmail(),
body('password','invalid passowr').isLength({min:5})],

async(req,res)=>{

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
const salt=await bcrypt.genSalt(10);
let secure_pass=await bcrypt.hash(req.body.password,salt);
try{
  await User.create({
    name:req.body.name,
    email:req.body.email,
    password:secure_pass,
    location:req.body.location,
   }).then(res.json({success:true})) }

catch(e){
    console.log(e)
    res.json({success:false})
}
})

router.post('/loginuser',[
    body('email','invalid email').isEmail(),
],async(req,res)=>{
let email=req.body.email;

try{
  let userData=await User.findOne({email})
  if(!userData)  return res.status(400).json({errors:"Try lgoin with correct credentails"});
  let pass_comp=await bcrypt.compare(req.body.password,userData.password);
  if(!pass_comp){
    return res.status(400).json({errors:"Try lgoin with correct credentails"});
  }
  const data={
    user:{
    id:userData.id}
  }
  const authToken=jwt.sign(data,jwtkey)
 return res.json({success:true,authToken})

}
catch (err) {
console.log(err)
res.json({success:false});
}}
)

module.exports=router