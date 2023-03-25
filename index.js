const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello world"));
app.get("/ping", (req, res) => res.send("Pong"));
app.get("/brian", (req, res) => res.send("Brian Simon Bawanda - 215610037"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
