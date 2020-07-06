const mongoose = require('mongoose')

const Files = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    size: {
        type: Number,
        required:true,
    },
    key:{
        type: String,
        required:true,
    },
    url:{
        type: String,
        required:true,
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
})

Files.pre("save",function(){
    if(!this.url)
        this.url = `${process.env.FILE_URL}/files/${this.key}`
})
module.exports =  mongoose.model('Files', Files)