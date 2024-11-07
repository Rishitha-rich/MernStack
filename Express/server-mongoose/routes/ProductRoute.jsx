const express = require('express')
const router = express.Router();
const Products = require('../models/ProductsModel')


router.get('/all',async(req,res)=>{
    try {
        const products= await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})        
    }
})
router.post('/add', async(req,res)=>{
    try{
const ProductData=new products(req.body)
const{title,img,price}=ProductData
if(!title || !img || !price){
    res.send(400).json({message:"All fields required"})
}
const storedata=await ProductData.save()
res.status(200).json(storedata)
    }
 catch(error){
 res.status(500).json({message:error.message})        
}
})
router.put('/edit/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const existingproduct=await Products.findOne({_id:id})
        if(!existingproduct){
        res.status(404).json({message:"product not found!"})
    }
    const updateproduct=await Products.findOneAndUpdate(id,req.body,{new:true})
           res.status(200).json(updateproduct)

        }
        catch(error){
            res.status(500).json({message:error.message})
        }

    })
router.delete('/edit/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const existingproduct=await Products.findOne({_id:id})
        if(!existingproduct){
        res.status(404).json({message:"product not found!"})
    }
           await Products.findOneAndDelete(id)
           res.status(200).json({message:"product not found!"})

        }
        catch(error)
        {
            res.status(500).json({message:error.message})
        }
    
})


module.export = router

// 1.GET
// 2.POST
// 3.PUT
// 4.DELETE

// 1.READ
// 2.CREATE
// 3.UPDATE
// 4.DELETE

// 200 -> OK
// 404 -> NOT FOUND
// 500 -> INTERNAL SERVER ERROR
// 201 -> CREATED
// 400 -> BAD Request
// 401 -> UnAuthorized