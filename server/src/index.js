
const express = require('express');
const app = express();
const con = require("./config");
const getdata = require("./getdata");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

con.connect((err) => {
  if (err) console.log(err);
  else console.log("Connection created");
});
// app.use((req, res, next) => {
//   req.con = con;
//   console.log("hi");
//   next();
// })

app.use("/getdata", getdata);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening to port ${port} `);
});

