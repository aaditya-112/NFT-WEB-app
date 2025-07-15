const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

// database connection file

const {connectDB} = require('./DB/DB');

const app = express();
const PORT = process.env.PORT;

app.get("/",(req, res)=>{
 res.send("hi i am live");
})

const start= async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`connected to port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();