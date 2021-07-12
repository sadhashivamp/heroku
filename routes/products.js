var express = require("express");
var router = express.Router();
// /products/
router.get('/', (req, res)=> {
    res.send("Get Request for products");
});
// /products/get-product-details
router.get('/get-product-details', (req, res)=> {
    res.send("Get Request for specific products");
});
//CRUD - products
router.post("/create-products", (req, res)=> {
    res.send("List of users");
  });
  router.put("/update-products", (req, res)=> {
    res.send("List of users");
  });
  router.get("/read-all-products", (req, res)=> {
    res.send("List of users");
  });
  router.get("/get-products-details", (req, res)=> {
    const userObj = {
      id: 320,
      name: "sadha",
      lastName: "shivam",
      active: true
    }
  res.send(userObj);
  });
  router.delete("/delete-products", (req, res)=> {
    res.send("List of users");
  });
module.exports = router;