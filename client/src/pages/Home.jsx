import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* PHOTO + TEXT ROW */}
      <div className="hero-row">

        {/* LEFT SIDE PHOTO */}
        <div className="hero-photo fade-in-left">
          <img src="/images/riya.jpg" alt="Riya Bang" />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="hero-content fade-in-right">
          <h1 className="hero-title">
            Hi, I’m <span>Riya Bang</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="typing-text">
              Full Stack Web Developer | MERN | React.js | Node.js | MongoDB
            </span>
          </h2>

          <p className="hero-text">
            I create modern, responsive and user-friendly applications using the MERN stack.
            Scroll down to explore my work!
          </p>

          <Link to="/projects">
            <button className="hero-btn">🚀 View My Projects</button>
          </Link>
        </div>

      </div>

      {/* Skills Row */}
      <div className="skills-row">
        <div className="skill"><i className="bi bi-code-slash"></i><p>HTML</p></div>
        <div className="skill"><i className="bi bi-braces"></i><p>CSS</p></div>
        <div className="skill"><i className="bi bi-bootstrap"></i><p>Bootstrap</p></div>
        <div className="skill"><i className="bi bi-wind"></i><p>Tailwind CSS</p></div>
        <div className="skill"><i className="bi bi-box-seam"></i><p>React.js</p></div>
        <div className="skill"><i className="bi bi-cpu"></i><p>Express.js</p></div>
        <div className="skill"><i className="bi bi-node-plus"></i><p>Node.js</p></div>
        <div className="skill"><i className="bi bi-database"></i><p>MongoDB</p></div>
      </div>   

    </div>
  );
}
