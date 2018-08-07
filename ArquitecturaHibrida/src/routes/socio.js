const router = require("express").Router();
const mongojs = require("mongojs");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://eh:macuentanga@ds227199.mlab.com:27199/krull";

//const db = mongojs("mongodb://dariosss:chupino21090@ds227199.mlab.com:27199/krull");

router.get("/socio", (req,res, next) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("krull");
        dbo.collection("recetas").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    });
    res.send('hello world');
});
module.exports= router;