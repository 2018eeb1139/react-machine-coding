// server.js
import http from "http";
import connectDB from "./mongoConnection";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello from Node" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

// server.js
import express from "express";

const app = express();
connectDB();
// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
