var express = require('express');
var router = express.Router();

//set trang chủ (homepage)
router.get("/", (req, res) => {
    //render ra trang index.hbs ở trong thư mục view
    res.render('index'); //render ra file index ở view
});

router.get("/linknaocungduoc", (req, res) => {
    res.render('tengicungduoc')
});

router.get("/quote", (req, res) => {
    var text = "<h1 tyle='color: red;'>Practice makes perfect</h1>"
    res.send(text)
});

router.get('/api', (req, res) => {
    var data = {
        "name": "Nguyen Tuan Minh",
        "age": 22,
        "address": "Hanoi"
    }
    res.json(data)
});

module.exports = router;