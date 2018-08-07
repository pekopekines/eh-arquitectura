const router = require("express").Router();

router.get("/imagen", (req,res, next) => {
    res.send('imagen');
});
module.exports= router;