const body = require("body-parser");
const express = require("express");
const request = require("request");
const servers = ["http://localhost:5000", "http://localhost:5001","http://localhost:5002","http://localhost:5003"];
let cur = 0;


const handler = (req, res) => {
    console.log(cur);
  const _req = request({ url: servers[cur] + req.url }).on("error", error => {
    res.status(500).send(error.message);
  });
  req.pipe(_req).pipe(res);
  cur = (cur + 1) % servers.length;
  console.log(cur+"end");
};
const server = express()
  .get("*", handler)
  .post("*", handler);

server.listen(5000);