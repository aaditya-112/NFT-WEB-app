const mongoose = require("mongoose");

const uri = process.env.URI

const connectDB=async()=>{
    await mongoose.connect(uri);

    console.log('connect to database');


}

module.exports= {connectDB};