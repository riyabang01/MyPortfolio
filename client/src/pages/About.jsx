import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaUsers
} from "react-icons/fa";
import "../css/About.css";

const CONTACT_INFO = {
  email: "riyabang617@gmail.com",
  phone: "9764552806",
  linkedin: "https://www.linkedin.com/in/riya-bang01 ",
  github: "https://github.com/riyabang01"
};

const EXPERIENCES = [
  {
    role: "Full Stack Web Development Intern",
    company: "Codveda Technologies (Remote)",
    duration: "Jan 2026 – Feb 2026",
    details: "Engineered a high-performance Social Media Platform (Fusion-Social-Media-Platform) leveraging React.js, optimizing frontend state management and asynchronous follower tracking pipelines. \n \n Managed production codebase version control workflows via Git/GitHub, reducing cross-functional team merge conflicts by 15% through structured branching strategies."
  },
  {
    role: "Recruitment Operations Intern & Volunteer",
    company: "HCLTech (Nagpur)",
    duration: "Dec 2024",
    details: "Coordinated end-to-end applicant tracking pipelines and real-time profile sorting workflows for over 1,000+ candidates with 100% operational accuracy during the two-day Mega Recruitment Drive (Dec 7th – Dec 8th) at MIHAN SEZ. \n \n Spearheaded structured data processing workflows and collaborated closely with corporate recruitment panels to ensure smooth high-volume candidate filtering and technical evaluation timelines."
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Bharat Intern (Remote)",
    duration: "March 2024 – April 2024",
    details: "Designed an optimized full-stack personal portfolio platform utilizing the MERN stack, React Router DOM, and Framer Motion animation matrices. \n \n Integrated secure server-side automated communication channels using custom Nodemailer modules connected to real-time client forms."
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Webstack Academy (Remote)",
    duration: "Feb 2024 – March 2024",
    details: "Architected a robust Hotel Booking Application (Homely-Hub) deploying React.js and Express.js, featuring secure token-based user authentication (JWT). \n \n Optimized REST API architectures and cloud database queries, boosting real-time system booking response efficiency metrics by 30%."
  },
  {
    role: "Web Development Intern",
    company: "InternPe (Remote)",
    duration: "May 2023 – June 2023",
    details: "Engineered interactive JavaScript calculation workflows (Calculator) integrated with robust runtime exception validation and mathematical error handling algorithms. \n \n Architected a 100% responsive user interface leveraging CSS Flexbox and Grid, eliminating cross-browser layout compatibility bugs."
  }
];


const SKILLS = {
  languages: ["JavaScript (ES6+)", "HTML5", "CSS3", "C++", "C"],
  frontend: ["React.js", "React Router", "Bootstrap", "Framer Motion", "Tailwind CSS", "Flexbox", "CSS Grid"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Stripe API", "JWT (JSON Web Tokens)"],
  databasesCloud: ["MongoDB (Atlas / Compass)", "Mongoose", "Cloudinary"],
  tools: ["Git", "GitHub", "Postman"]
};


const CERTIFICATIONS = [
  {
    provider: "Infosys Springboard",
    courses: [
      { name: "HTML5", file: "/CERTIFICATIONS/Infosys/HTML5.pdf" },
      { name: "CSS3", file: "/CERTIFICATIONS/Infosys/CSS3.pdf" },
      { name: "JavaScript", file: "/CERTIFICATIONS/Infosys/JavaScript.pdf" },
      { name: "Front End Web Developer", file: "/CERTIFICATIONS/Infosys/Front End Web Developer Certification.pdf" },
      { name: "Advanced MERN Development", file: "/CERTIFICATIONS/Infosys/MERN Advanced MERN Development.pdf" },
      { name: "Basics of Business Communication", file: "/CERTIFICATIONS/Infosys/Basics of Business Communication.pdf" },
      { name: "Design Thinking", file: "/CERTIFICATIONS/Infosys/Design Thinking.pdf" }
    ]
  },
 {
    provider: "TCS iON",
    courses: [
      { name: "Communication Skills", file: "/CERTIFICATIONS/TCS ion/Communication Skills.pdf" },
      { name: "Presentation Skills", file: "/CERTIFICATIONS/TCS ion/Presentation Skills.pdf" },
      { name: "Interview Skills", file: "/CERTIFICATIONS/TCS ion/Interview Skills.pdf" },
      { name: "Prepare a Strong Resume and Cover Letter", file: "/CERTIFICATIONS/TCS ion/Prepare a Strong Resume and Cover Letter.pdf" }
    ]
  },
  {
    provider: "The Digital Adda",
    courses: [
      { name: "Web Development", file: "/CERTIFICATIONS/The Digital Adda/Web Development.pdf" },
      { name: "Full Stack Web Development", file: "/CERTIFICATIONS/The Digital Adda/Full Stack Web Development.pdf" }
    ]
  },
  {
    provider: "Disha Computer Institute",
    courses: [
      { name: "C & C++", file: "/CERTIFICATIONS/Disha Computer Institute/C & C++.pdf" },
    ]
  }
];




const EXTRACURRICULARS = [
  {
    title: "Campus Ambassador",
    details: "Represented and promoted partner organizations on campus to drive student engagement."
  },
  {
    title: "Community Engagement",
    details: "Contributed to local service projects and organized community events as an active Rotaract Club member."
  },
  {
    title: "Team Management",
    details: "Coordinated group activities and fostered collaborative environments to achieve project goals efficiently."
  },
  {
    title: "Volunteer",
    details: "Participated in high-impact events, workshops, and donation drives to support smooth operational execution."
  },
  {
    title: "Event Planning",
    details: "Assisted in planning and executing college events, ensuring proper logistics and participant management."
  },
  {
    title: "Community Outreach",
    details: "Organized awareness campaigns and social drives to address local community issues."
  }
];


export default function About() {
  return (
    <div className="about-page">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="about-intro"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I'm <span className="name">Riya Bang</span> — a passionate Full Stack Developer (MERN)
        who loves creating beautiful, robust, & user-friendly websites.
      </motion.p>

      <div className="about-sections">
        <motion.div
          className="about-card education-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaGraduationCap style={{ marginRight: '8px' }} /> Education</h2>
          <div className="edu-item">
            <strong>B.Tech CSE</strong>
            <p>GNIET, Nagpur | 2021-2025 &nbsp;&bull;&nbsp; CGPA: 7.87</p>
          </div>
          <div className="edu-item">
            <strong>12th (HSC)</strong>
            <p>Nirala Jr. College, Nagpur | 2021 &nbsp;&bull;&nbsp; Percentage: 92.33%</p>
          </div>
          <div className="edu-item">
            <strong>10th (SSC)</strong>
            <p>Podar International School, Gondia | 2019 &nbsp;&bull;&nbsp; Percentage: 84.60%</p>
          </div>
          <div className="social-links-container" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#ffe94c', fontSize: '1.3rem' }}><FaLinkedin /></a>
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: '#ffe94c', fontSize: '1.3rem' }}><FaGithub /></a>
            <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: '#ffe94c', fontSize: '1.3rem' }}><FaEnvelope /></a>
            <a href={`tel:${CONTACT_INFO.phone}`} style={{ color: '#ffe94c', fontSize: '1.3rem' }}><FaPhoneAlt /></a>
          </div>
        </motion.div>


        <motion.div
          className="about-card skills-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2><FaCode style={{ marginRight: '8px' }} /> Technical Skills</h2>
          <p><strong>Languages:</strong> {SKILLS.languages.join(" • ")}</p>
          <p><strong>Frontend:</strong> {SKILLS.frontend.join(" • ")}</p>
          <p><strong>Backend:</strong> {SKILLS.backend.join(" • ")}</p>
          <p><strong>Databases & Cloud:</strong> {SKILLS.databasesCloud.join(" • ")}</p>
          <p><strong>Tools:</strong> {SKILLS.tools.join(" • ")}</p>

        </motion.div>
      </div>

      <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '20px', fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaBriefcase /> Professional Experience
      </h2>
      <div className="about-sections">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span style={{ fontSize: '0.85rem', color: '#ffe94c', float: 'right' }}>{exp.duration}</span>
            <h2 style={{ fontSize: '1.25rem' }}>{exp.role}</h2>
            <h3 style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', margin: '-8px 0 12px 0' }}>{exp.company}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{exp.details}</p>
          </motion.div>
        ))}
      </div>

      <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '20px', fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaGraduationCap /> Certifications
      </h2>
      <div className="about-sections" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 style={{ fontSize: '1.25rem', color: '#ffe94c', marginBottom: '15px' }}>{cert.provider}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cert.courses.map((course, cIndex) => (
                <div key={cIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                  <span>• {course.name}</span>
                  <a
                    href={course.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ffe94c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '10px', whiteSpace: 'nowrap' }}
                  >
                    [View ➜]
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


      <h2 style={{ color: '#ffffff', marginTop: '50px', marginBottom: '20px', fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaUsers /> Extracurricular Activities
      </h2>
      <div className="about-sections" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {EXTRACURRICULARS.map((item, index) => (
          <motion.div
            key={index}
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 style={{ fontSize: '1.25rem', color: '#ffe94c' }}>{item.title}</h2>
            <p>{item.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
