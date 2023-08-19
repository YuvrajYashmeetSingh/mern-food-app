const express = require('express')
const app = express()
const mongoDB=require("./db");
const port = 8000
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get('/', (req, res) => {
  res.send('Hello yuvi!')
})
app.use(express.json())
app.use('/api',require("./routes/createUser"))
app.use('/api',require("./routes/displaydata"))
app.use('/api',require("./routes/orderData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})