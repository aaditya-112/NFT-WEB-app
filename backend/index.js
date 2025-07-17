const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

// database connection file

const {connectDB} = require('./lib/DB');
const userRoute= require("./routes/user.route");
const nftRoute= require("./routes/Nft.route")



const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/user",userRoute);
app.use("/api/nft",nftRoute);

app.get("/",(req, res)=>{
 res.send("hi i am live");
});

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