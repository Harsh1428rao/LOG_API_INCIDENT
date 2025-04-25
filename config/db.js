const mongoose = require("mongoose");
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is connnected");
    }
    catch(error){
        console.error("DB connnection error:",error.message);
        process.exit(1);
    }
};
module.exports = connectDB;