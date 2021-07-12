
// DYNAMIC ROUTES and URL BUILDING and WILD CARD ROUTES
/*
    1.Dynamic URLs in our modules
    2.we can pass one or more params in the URL
    3.we collect the data using req.params.<variables>
*/

//express js allows to build URL's dynamically as well
/*
Eg: app.get('/id', (req, res)=> {
    res.send('Dynamic value is ' + req.params.id);
      });
*/

/*
WILD CARD Routes
*we can setup wild card routes just in case
wher we dont match any routes

app.get("*", function(req, res){
    res.send("wild card matching");
});
*/



var express = require("express");
var router = express.Router();

// /orders/
router.get('/', (req, res)=> {
    res.send("Get Request for orders");
});

// /orders/get-orders-details
router.get('/get-orders-details/:id', (req, res)=> {
    res.send("Get Request for specific orders"+req.params.id);
});

// /orders/get-orders-details
router.get('/Search-by-location/:state/:city/:pincode', (req, res)=> {
    res.send("Get Request for specific orders"+req.params.state + req.params.city + req.params.pincode);
});

//URL building
router.get('/search/:key([0-9]{4})', (req, res)=> {
    res.send("Data captured is" +req.params.key);
});

router.get('/search-username/:key([a-zA-Z]{3})', (req, res)=> {
    res.send("Data captured is" +req.params.key);
});

//wild card routes
router.get("*", (req, res)=> {
    res.send("URL not found");
    /* or */
  /*  var resObj = {
        statusCode: 404,
        statusMsg: "URL not found"
    }
    res.send(resObj);   */
});


  module.exports = router;