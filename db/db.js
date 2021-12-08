const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_url).then(
    ()=>{
        console.log("mongodb Connected");
    }
).catch(
    (err)=>{
        console.log(err);
    }
)


