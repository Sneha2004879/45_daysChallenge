const express = require("express");
const app = express();
const port = 3000;

const projects = [
    {id: 1, name:"Chat Application"},
    {id: 2, name:"Portfolio Website"},
    {id: 3, name:"REST API"}
];

const experiences = [
    {id: 1, role:"developer", place: "Chat Application Project"},
    {id: 2, role:"developer", place: "Portfolio Website Project"},
    {id: 3, role:"backend developer", place: "REST API project"}
];

app.get("/api/projects", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(projects, null, 2));
});


app.get("/api/experiences", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(experiences, null, 2));
});

app.get("/api/projects/:id", (req, res) => {
  const project = projects.find(p => p.id == req.params.id);
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(project || { message: "Project not found" }, null, 2));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
