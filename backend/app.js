const express = require('express');
const app = express();
const port = 3000;

const CategoryRoute = require('./routes/category')

require("dotenv").config();
require("./db/db");

app.use(express.json())
app.get('/' , (req, res)=>{
    res.send("Server Running !!");
})
app.use('/category', CategoryRoute);

app.listen(port, ()=>{
    console.log("Server Running on PORT", port)
});