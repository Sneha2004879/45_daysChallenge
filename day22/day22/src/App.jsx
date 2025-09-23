import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React showcasing my skills and projects.",
    },
    {
      title: "Calculator",
      description: "A simple calculator app that performs basic arithmetic operations.",
    },
    {
      title: "Weather App",
      description: "A React app that fetches real-time weather data using an API.",
    },
  ]);

  const addProject = () => {
    const newProject = {
      title: "Demo Project",
      description: "This is a dynamically added demo project.",
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #d9afd9, #97d9e1)",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🌟 My Projects 🌟</h1>
      <p style={{ marginBottom: "20px", fontSize: "18px", color: "#444" }}>
        Day 22 — Rendering Lists with <code>.map()</code>
      </p>

      <button
        onClick={addProject}
        style={{
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "20px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Add Demo Project
      </button>

      <p style={{ fontWeight: "bold", marginBottom: "30px" }}>
        Projects count: {projects.length}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              padding: "20px",
              width: "280px",
              margin: "15px",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ marginBottom: "10px", fontWeight: "bold" }}>
              {project.title}
            </h3>
            <p style={{ marginBottom: "15px", color: "#555" }}>
              {project.description}
            </p>

            <button
              onClick={() => removeProject(index)}
              style={{
                background: "transparent",
                border: "2px solid #2575fc",
                padding: "6px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#2575fc",
                fontWeight: "bold",
                transition: "0.2s",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
