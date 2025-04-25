const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Incident = require("./models/Incident");

dotenv.config();
const connectDB = require("./config/db");

const seedData= async()=>{
    await connectDB();
    await Incident.deleteMany();

    await Incident.insertMany([
        {
        title:"Bias in Chatbot",
        description:"AI chatbot displayed gender bias.",
        severity:"Medium"
        },
        {
            title:"Misinformation Spread",
            description:"AI generated false news articles.",
            severity:"High"
        }
    ]);
    console.log("Sample data added");
    process.exit();
};

seedData();