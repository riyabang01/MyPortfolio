
import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  return (
    <header className="navbar-section fixed-top">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <div className="logo">
          <Link className="nav-logo" to="/">MyPortfolio</Link>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-right">

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://instagram.com/riya_bang01"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://linkedin.com/in/riya-bang01"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://github.com/riya-bang01"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>

          </div>

          {/* Gap */}
          <div className="icon-gap"></div>

          {/* Resume Buttons */}
          <div className="resume-actions">
            <a
              href="/resume/RIYA_BANG_RESUME.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>

            <a
              href="/resume/RIYA_BANG_RESUME.pdf"
              download
              className="resume-btn outline"
            >
              Download
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
