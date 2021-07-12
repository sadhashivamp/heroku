var express = require("express");
var router = express.Router();
// /users/
router.get('/', (req, res)=> {
    res.send("Get Request for users");
});
// /users/get-users-details
router.get('/get-users-details', (req, res)=> {
    res.send("Get Request for specific users");
});
//CRUD - users
router.post("/create-users", (req, res)=> {
    res.send("List of users");
  });
  router.put("/update-users", (req, res)=> {
    res.send("List of users");
  });
  router.get("/read-all-users", (req, res)=> {
    res.send("List of users");
  });
  router.get("/get-user-details", (req, res)=> {
    const userObj = {
      id: 310,
      name: "mani",
      lastName: "kumar",
      active: true
    }
  res.send(userObj);
  });
  router.delete("/delete-users", (req, res)=> {
    res.send("List of users");
  });

  module.exports = router;