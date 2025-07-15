const mongoose = require("mongoose");

const uri = process.env.URI|| "mongodb+srv://adityakoundal228:xuVRoSsoAFAFi6po@cluster0.8waavzs.mongodb.net/"

const connectDB=async()=>{
    await mongoose.connect(uri);

    console.log('connect to database');


}

module.exports= {connectDB};