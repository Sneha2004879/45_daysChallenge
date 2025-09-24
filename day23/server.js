import express from "express";
import cors from "cors";
import projectsRoute from "./routes/projects.js";

const app = express();
app.use(cors());           
app.use(express.json());
app.use("/api/projects", projectsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
