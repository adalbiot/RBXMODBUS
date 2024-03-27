const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var cors = require("cors");
var bit0 = 0;
var bit1 = 0;
var bit2 = 0;
var bit3 = 0;
var bit4 = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  bit0 = req.body.up;
  bit1 = req.body.down;
  bit2 = req.body.right;
  bit3 = req.body.left;
  bit4 = req.body.garra;
});
  console.log(bit0, bit1, bit2, bit3, bit4)

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      up: bit0,
      down: bit1,
      right: bit2,
      left: bit3,
      garra: bit4
    })
  );
  res.end();
});

app.listen(3000);