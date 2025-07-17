const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        require:true,
    },
    owner:{
        type:String,
    },
    likes:{
        type:Number,
    },
});

module.exports= mongoose.model("nft", nftSchema);