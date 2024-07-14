const mongoose=require("mongoose")
const dotenv = require("dotenv");

const conectMongodb = async()=> {
    try{
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Conncetion successful");
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = conectMongodb;