const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const CategoryRoute = require('./routes/category')

require("dotenv").config();
require("./db/db.config");
app.use(cors({
    origin: 'http://localhost:4200',
}));
app.use(express.json())
app.get('/' , (req, res)=>{
    res.send("Server Running !!");
})
app.use('/category', CategoryRoute);

app.listen(port, ()=>{
    console.log("Server Running on PORT", port)
});