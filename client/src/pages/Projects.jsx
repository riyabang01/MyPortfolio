import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const getProjectOrder = (title = "") => {
  const normalized = title.toLowerCase().trim();

  if (normalized.includes("green") && normalized.includes("cart")) return 2;
  if (normalized.includes("homely") || normalized === "hub") return 3;
  if (normalized.includes("college") || normalized.includes("event") || normalized.includes("ems")) return 4;
  if (normalized.includes("social") || normalized.includes("media") || normalized.includes("fusion")) return 5;
  if (normalized.includes("speech") || normalized.includes("text-to-speech")) return 6;
  if (normalized.includes("portfolio") || normalized.includes("myportfolio")) return 7;
  if (normalized.includes("calculator")) return 8;

  return 1;
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);

    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/projects`);

        const sortedProjects = [...res.data].sort((a, b) => {
          const orderA = getProjectOrder(a.title);
          const orderB = getProjectOrder(b.title);

          if (orderA !== orderB) {
            return orderA - orderB;
          }

          if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }

          return b._id.localeCompare(a._id);
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
