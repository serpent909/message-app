const express = require("express");
const router = express.Router();

// router.get("/", function (req, res){
//  res.redirect("https://www.google.com");
// });

router.get("/hi", function (req, res){
    res.redirect("https://www.google.com");
});

module.exports = router;



