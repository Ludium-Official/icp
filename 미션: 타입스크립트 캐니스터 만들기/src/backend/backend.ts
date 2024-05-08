import express from "express";

const app = express();
app.use(express.json());

app.get("/greet", (req, res) => {
  res.json({ greeting: `Hello, ${req.query.name}` });
});

app.use(express.static("/dist"));
app.listen();
