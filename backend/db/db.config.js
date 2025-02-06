const mongoose = require("mongoose");

// const mongoUrl = process.env.MONGO_CONNECT;
// mongoose.connect(mongoUrl).then(()=>{
//     console.log("MongoDB Connected . . .");
// }).catch((error)=>{
//     console.log("MongoDB Error : ",error);
// })

//setting up the connection
async function connectDb(){
    await mongoose.connect("mongodb://localhost:27017/", {
        dbName: "e-comm-store",
    });
}

connectDb().then(()=>{
    console.log("MongoDb Connected ...");
}).catch((error)=>{
    console.log("Mongo Error : ", error);
})

