const nftModel = require("../../model/nft.module");
const {nftValidation} = require("../../validation/nftValidation");
const cloudinary = require("../../lib/cloudinary");

const aadNft = async(req, res)=>{
    try {
        const result = await nftValidation.validateAsync(req.body);
        const {title , discription , price, owner, image}= result;
        
        if(!image){
            return res.status(400).json({message:"imgae is required"})
        }

        const uploadResponse = await cloudinary.uploader.upload(image);
        const newNft= new nftModel({
            title,
            discription,
            price,
            owner,
            image: uploadResponse.secure_url,
        })
        const response = await newNft.save();
        res.status(201).json({message:"nft aaded" , response});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"error in aad nft"});
    }
   
}

module.exports={aadNft};