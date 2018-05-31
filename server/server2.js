const path = require("path");
const express = require("express");

const http = require('http');
const WebSocket = require('ws');

const app = express();

const PUBLIC_FOLDER = path.join(__dirname, "../public");
const PORT = process.env.PORT || 5001;

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
  });
  ws.on('close', (err) => {
    console.log('Client has disconnected');
  });
});

app.get("/", (req, res) => {
    res.end('Server listening on http://localhost:' + PORT);
});

app.use(express.static(PUBLIC_FOLDER));
server.listen(PORT, () => console.log('Server listening on http://localhost:' + PORT));