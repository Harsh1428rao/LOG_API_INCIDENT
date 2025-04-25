const Incident = require("../models/Incident");

//GET /incidents
exports.getAllIncidents = async(req,res)=>{
    const incident = await Incident.find().sort({reported_at:-1});
    res.json(incident);
};

//POST /incidents
exports.createIncident = async(req,res)=>{
    const {title,description,severity}=req.body;
    if(!title || !description || !severity){
        return res.status(400).json({message : "All fields are required"});
    }

    if(!["Low","Medium","High"].includes(severity)){
        return res.status(400).json({message: "Invalid severity level"});
    }
    const incident = new Incident({title,description,severity});
    await incident.save();
    res.status(201).json(incident);
};

//GET /incidents/:id
exports.getIncidentById = async (req,res)=>{
    const incident = await Incident.findById(req.params.id);
    if(!incident){
        return res.status(404).json({message:"Incident not found"});
    }
    res.json(incident);
};

//DELETE /incidents/:id
exports.deleteIncident = async(req,res)=>{
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if(!incident){
        return res.status(404).json({message:"Incident not found"});
    }
    res.status(200).json({message:"Incident deleted successfully"});
};


