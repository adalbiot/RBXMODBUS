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
  console.log(bit0);
  res.end();
  bit1 = req.body.up;
  console.log(bit1);
  res.end();
  bit2 = req.body.up;
  console.log(bit2);
  res.end();
  bit3 = req.body.up;
  console.log(bit3);
  res.end();
  bit4 = req.body.up;
  console.log(bit4);
  res.end();

});

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      up: bit0,
    }),
    JSON.stringify({
      down: bit1,
    }),
    JSON.stringify({
      right: bit2,
    }),
    JSON.stringify({
      left: bit3,
    }),
    JSON.stringify({
      garra: bit4,
    }),
  );
  res.end();
});

app.listen(3000);