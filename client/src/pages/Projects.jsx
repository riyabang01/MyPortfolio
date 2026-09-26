import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/projects`);
        const sortedProjects = [...res.data].sort((a, b) => {
          const titleA = a.title ? a.title.toLowerCase().trim() : "";
          const titleB = b.title ? b.title.toLowerCase().trim() : "";
          
          const getOrder = (title) => {
            if (title.includes("green") && title.includes("cart")) return 1;
            if (title.includes("homely") || title === "hub") return 2;
            if (title.includes("college") || title.includes("event") || title.includes("ems")) return 3;
            if (title.includes("social") || title.includes("media") || title.includes("fusion")) return 4;
            if (title.includes("speech") || title.includes("text-to-speech")) return 5;
            if (title.includes("portfolio") || title.includes("myportfolio")) return 6;
            if (title.includes("calculator")) return 7;
            return 8;
          };
          return getOrder(titleA) - getOrder(titleB);
        });
        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h1 className={`section-title heading-slide ${animateHeading ? "active" : ""}`}>
        My Projects
      </h1>

      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title || "Project Image"}
                    className="project-image"
                  />
                </div>
              )}

              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>

                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github"
                    >
                      <FaGithub className="icon" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-demo"
                    >
                      <FaExternalLinkAlt className="icon" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No projects available</p>
      )}
    </section>
  );
};

export default Projects;
