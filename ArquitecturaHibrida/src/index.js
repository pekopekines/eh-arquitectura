const express = require("express");
const app = express();
const cors = require("cors");
//settings
app.set("port", process.env.PORT || 3000);
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(require("./routes/socio"));
app.use(require("./routes/imagen"));

app.listen(app.get("port"),()=>{
    console.log("usando puerto ", app.get("port"));
})