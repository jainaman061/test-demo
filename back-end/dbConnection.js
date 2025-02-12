const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bookmyshow')
        console.log('connected to db');        
    }
    catch(errr){
        console.log(errr)
    }
}
module.exports=connectDB