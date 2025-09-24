import express from "express";
const router = express.Router();

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with React showcasing my skills and projects."
  },
  {
    id: 2,
    title: "Calculator",
    description: "A simple calculator app that performs basic arithmetic operations."
  },
  {
    id: 3,
    title: "Weather App",
    description: "A React app that fetches real-time weather data using an API."
  }
];

router.get("/", (req, res) => {
  res.json(projects);
});

export default router;
