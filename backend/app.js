const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const CategoryRoute = require("./routes/category");
const BrandRoute = require("./routes/brand");
const ProductRoute = require('./routes/product');

require("dotenv").config();
require("./db/db.config");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running !!");
});
app.use("/category", CategoryRoute);
app.use("/brand", BrandRoute);
app.use("/product", ProductRoute);

app.listen(port, () => {
  console.log("Server Running on PORT", port);
});
