const express = require("express");

const app = express();
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port);
console.log("server local http://localhost:3000");
console.log("process.env.PORT", port );
