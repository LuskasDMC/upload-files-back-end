const routes = require('express').Router()
const multer = require('multer')
const fs = require('fs')
const multerConfig = require('./config/multer')
const FileSchema  = require('./models/Files')

routes.post("/uploads",multer(multerConfig).single('file'), async (req,res)=>{
    const {originalname:name, size, filename:key, path: url = ''} = req.file
    const file = await FileSchema.create({
        name,
        size,
        key,
        url
    })

    res.json(file)
})

routes.get('/uploads/all', async(req,res)=>{
    res.json(await FileSchema.find())
})

routes.delete('/uploads/delete/:id',async(req,res)=>{
    const file = await FileSchema.findById(req.params.id)
    try{
        fs.unlinkSync(file.url)
        res.json({success:true})
    }catch(err){
        res.json({success:false})
    }
})


module.exports = routes