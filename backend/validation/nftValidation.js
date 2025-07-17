const joi = require("joi");

const nftValidation = joi.object({
    title: joi.string().required(), 
    discription: joi.string().max(100). required(),
    price: joi.number().required(),
    owner: joi.string(),
    
})
 module.exports= {nftValidation};