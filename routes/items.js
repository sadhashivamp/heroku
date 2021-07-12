var express = require("express");
var router = express.Router();

//working on middleware and se headers in middleware
    //first we have to logged must

router.use('/', (req, res, next)=>{
    console.log("API call recieved");
    next();
});

// /items/
router.get('/', (req, res, next)=> {
    res.send("Get Request for items");
    next();
});

router.use('/', (req, res)=>{
    console.log("API call Ended");
}); 

/*
//now we can set Headers in middlware
router.use('/', (req, res, next)=>{
    req.headers["content-type"]='application/json';
    console.log("API call recieved");
    next();
});

// /items/
router.get('/', (req, res, next)=> {
    res.send("Headers Recieved" + req.headers["content-type"]);
    res.send("Get Request for items");
    next();
});

router.use('/', (req, res)=>{
    console.log("API call Ended");
});

*/

  module.exports = router;