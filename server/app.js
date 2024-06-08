import express from "express";
const app = express();

app.get((req, res) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;