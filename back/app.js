import express from "express";
import cors from "cors";

// const CLIENT_URL = process.env.CLIENT_URL;

const app = express();

app.use(express.json());
// app.use(
//   cors({
//     origin: CLIENT_URL,
//   })
// );

// Routes


//for testing server status
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


export default app;
