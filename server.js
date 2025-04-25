const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const incidentRoutes = require("./routes/incidentRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is running.....");

});

app.use("/incidents",incidentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port${PORT}`);
});
