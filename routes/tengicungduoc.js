var express = require('express');
var router = express.Router();

//set trang chủ (homepage)
router.get("/", (req, res) => {
    //render ra trang index.hbs ở trong thư mục view
    res.render('index'); //render ra file index ở view
});

router.get("/about", (req, res) => {
    res.render('tengicungduoc')
});

module.exports = router;