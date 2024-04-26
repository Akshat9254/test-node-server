const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "ok" });
});

app.post("/", (req, res) => {
  res.json({ body: req.body });
});

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
