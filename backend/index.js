const express = require("express");

const {connectDB} =require("./config/db")

const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const {userRouter} = require('./routes/userRoute');
const {candidateRouter} = require('./routes/candidateRoute');




const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
}));



app.use(express.json());



app.get("/" ,(req,res)=>{
    res.send("this is candidate referral api")
})



app.use('/api/users', userRouter);
app.use('/api/candidates', candidateRouter);


app.listen(8080 ,()=>{
    connectDB()
    console.log("server is running at http://localhost:8080/")
})


