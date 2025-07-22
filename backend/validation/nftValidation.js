const joi = require("joi");

const nftValidation = joi.object({
    title: joi.string().required(), 
    description: joi.string().max(100). required(),
    price: joi.number().required(),
    image: joi.string().required(),
    owner: joi.string(),
    
})
 module.exports= {nftValidation};