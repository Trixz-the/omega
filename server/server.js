// CODE FILES ARE NOT COMPLETE YET DUE TO TIME LIMITATIONS. HOWEVER, IT PROVIDES A QUICK NOTICE ABOUT HOW THE PROJECT WILL WORK

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 5000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
