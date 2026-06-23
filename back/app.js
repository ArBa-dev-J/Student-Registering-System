import express from "express";
import cors from "cors";
import subjectRoutes from "./routes/subjectRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

const CLIENT_URL = process.env.CLIENT_URL;
console.log(CLIENT_URL);

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);

// Routes
app.use("/api/v1/subjects", subjectRoutes);
app.use("/api/v1/students", studentRoutes);

//for testing server status
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


export default app;
