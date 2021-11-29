const express = require("express");
const router = express.Router();
const con = require("./config");

router.get("/", (req, res) => {
    // let con = req.con;
    con.query(`SELECT * FROM userinfo `, (err, ans) => {
        if (err) console.log(err);
        res.send(ans);
    });
});
module.exports = router;