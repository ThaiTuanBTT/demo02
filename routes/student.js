const express = require('express');
const router = express.Router();
//URL: localhost:3000/student
router.get("/", (req, res) => {
    res.send('test thu xem sao')
});

//URL:localhost:3000/student/student
router.get('/student', (req, res) => {
    var text = "<h1 style='color: red;'>Practice makes perfect</h1>"
    res.send(text)
});
module.exports = router;