import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [activeNav, setActiveNav] = useState("about");

  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "E-Plant Shopping App",
      tech: ["React.js", "Redux Toolkit", "React Router", "Vite", "Vercel"],
      points: [
        "Built a responsive e-commerce plant shopping app with React.js, JavaScript, HTML, and CSS",
        "Managed global cart state with Redux Toolkit — add, remove, quantity update, clear cart",
        "Built real-time search and category filter to browse 30+ plants across 5 categories",
        "Deployed on Vercel with client-side routing and optimized production build using Vite",
      ],
      live: "https://e-plant-shopping-smoky-tau.vercel.app/",
      github: "https://github.com/mitali2744/e-plantShopping",
      emoji: "🌿",
    },
    {
      title: "Elephant Intrusion Detection System",
      tech: ["Python", "YOLOv8", "Streamlit", "OpenCV", "Flask", "REST API"],
      points: [
        "Developed an AI-based detection system using custom-trained YOLOv8 model",
        "Built an interactive Streamlit web app for image input and real-time detection",
        "Implemented confidence-based filtering, herd size estimation, and alert generation",
        "Used REST APIs for backend event transmission for early warning and monitoring",
      ],
      live: null,
      github: null,
      emoji: "🐘",
    },
    {
      title: "AquaVeritas – Smart Water Quality Bottle",
      tech: ["Arduino Nano", "TDS Sensor", "OLED Display", "UV-C", "Embedded C"],
      points: [
        "Developed a smart portable bottle to detect water quality in real time",
        "Automatically sterilizes water using UV-C light based on TDS sensor readings",
        "OLED display shows water quality status with LED indicators for quick feedback",
        "Designed as a low-cost solution (~₹1042) for remote and underdeveloped areas",
      ],
      live: null,
      github: null,
      emoji: "💧",
    },
    {
      title: "Smart Water-Storing Vehicle for Flood Mitigation",
      tech: ["Embedded C", "Distance Sensors", "Arduino", "Suction Mechanism"],
      points: [
        "Designed a smart mobile system to collect and store excess floodwater from urban streets",
        "Used distance-based sensing to detect water levels and activate suction mechanism",
        "Focused on emergency response, sustainability, and smart city infrastructure",
        "Recognized at INNOVISION 2025 National-Level Techathon — 1st Runner-up 🏆",
      ],
      live: null,
      github: null,
      emoji: "🚗",
    },
    {
      title: "Piezoelectric Smart Street Lighting (MATLAB Simulink)",
      tech: ["MATLAB", "Simulink", "Power Electronics"],
      points: [
        "Built a MATLAB Simulink model of a piezoelectric energy harvesting system",
        "Piezoelectric transducers convert mechanical footstep pressure into electrical energy",
        "Model includes rectification, filtering, voltage regulation, and energy storage blocks",
        "Implemented automatic ON/OFF control logic for efficient LED street lighting",
      ],
      live: null,
      github: null,
      emoji: "💡",
    },
    {
      title: "Bluetooth-Controlled Robot Car",
      tech: ["Arduino", "HC-05 Bluetooth", "Embedded C", "Motor Driver"],
      points: [
        "Built a robot car controlled wirelessly via Bluetooth module HC-05",
        "Programmed motor control logic using Arduino and Embedded C",
        "Implemented directional control through serial communication commands",
      ],
      live: null,
      github: null,
      emoji: "🤖",
    },
  ];

  const skills = {
    "Programming": ["C", "C++", "Python", "Embedded C", "Java", "JavaScript"],
    "Web & Software": ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Redux Toolkit"],
    "Tools": ["VS Code", "MATLAB & Simulink", "Keil", "Arduino IDE", "Proteus", "Git & GitHub"],
    "Electronics": ["Analog & Digital Circuits", "Op-Amps", "Flip-Flops", "HC-05 Bluetooth", "Serial Comm"],
    "AI / ML": ["YOLOv8", "OpenCV", "Streamlit", "Flask", "REST API", "NumPy"],
  };

  const certifications = [
    "Simulink Fundamentals – MathWorks",
    "Introduction to Motor Control – MathWorks",
    "Full Stack Development – Coursera",
    "Introduction to Software Engineering",
    "Cloud Computing Basics",
    "HTML, CSS & JavaScript",
    "React (Intro)",
    "Node.js & Express (Intro)",
  ];

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="port-nav">
        <div className="port-nav-logo">MB</div>
        <div className="port-nav-links">
          {["about", "skills", "projects", "achievements", "contact"].map((s) => (
            <button key={s} className={`port-nav-btn ${activeNav === s ? "active" : ""}`} onClick={() => scrollTo(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="port-hero" id="about">
        <div className="port-hero-content">
          <div className="port-avatar">MB</div>
          <h1>Mitali Brahmankar</h1>
          <h2>Electronics & Telecommunication Engineer</h2>
          <p>
            Engineering student passionate about software development, smart systems, and assistive technologies.
            Experienced in full-stack development, embedded systems, and AI-based solutions with real-world impact.
          </p>
          <div className="port-hero-btns">
            <a href="mailto:mitalibrahmankar27@gmail.com" className="port-btn-primary">📧 Contact Me</a>
            <a href="https://www.linkedin.com/in/mitali-brahmankar" target="_blank" rel="noreferrer" className="port-btn-secondary">LinkedIn</a>
            <a href="https://github.com/mitali2744" target="_blank" rel="noreferrer" className="port-btn-secondary">GitHub</a>
          </div>
          <div className="port-info-chips">
            <span>📍 Pune, India</span>
            <span>🎓 BE – PCCOE, Expected May 2027</span>
            <span>⭐ CGPA: 7.46</span>
            <span>📞 9356198699</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="port-section" id="skills">
        <h2 className="port-section-title">Skills</h2>
        <div className="port-skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="port-skill-card" key={category}>
              <h3>{category}</h3>
              <div className="port-skill-tags">
                {items.map((skill) => (
                  <span className="port-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="port-section port-section-alt" id="projects">
        <h2 className="port-section-title">Projects</h2>
        <div className="port-projects-grid">
          {projects.map((p) => (
            <div className="port-project-card" key={p.title}>
              <div className="port-project-header">
                <span className="port-project-emoji">{p.emoji}</span>
                <h3>{p.title}</h3>
              </div>
              <div className="port-tech-tags">
                {p.tech.map((t) => <span className="port-tech-tag" key={t}>{t}</span>)}
              </div>
              <ul className="port-project-points">
                {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
              <div className="port-project-links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="port-btn-primary port-btn-sm">🔗 Live Demo</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="port-btn-secondary port-btn-sm">GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="port-section" id="achievements">
        <h2 className="port-section-title">Achievements & Certifications</h2>
        <div className="port-ach-grid">
          <div className="port-ach-card port-ach-highlight">
            <div className="port-ach-icon">🏆</div>
            <h3>1st Runner-up – INNOVISION 2025</h3>
            <p>National-Level Techathon, JSPM Group of Institutes, Pune</p>
            <p>For <strong>Smart Water-Storing Vehicle for Urban Flood Mitigation</strong></p>
          </div>
          <div className="port-ach-card">
            <h3>📜 Certifications</h3>
            <ul>
              {certifications.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="port-section port-section-alt" id="contact">
        <h2 className="port-section-title">Get In Touch</h2>
        <div className="port-contact-grid">
          <a href="mailto:mitalibrahmankar27@gmail.com" className="port-contact-card">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>mitalibrahmankar27@gmail.com</p>
            </div>
          </a>
          <a href="tel:9356198699" className="port-contact-card">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>9356198699</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mitali-brahmankar" target="_blank" rel="noreferrer" className="port-contact-card">
            <span>💼</span>
            <div>
              <strong>LinkedIn</strong>
              <p>mitali-brahmankar</p>
            </div>
          </a>
          <a href="https://github.com/mitali2744" target="_blank" rel="noreferrer" className="port-contact-card">
            <span>🐙</span>
            <div>
              <strong>GitHub</strong>
              <p>mitali2744</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="port-footer">
        <p>© 2025 Mitali Brahmankar · Built with React.js</p>
      </footer>
    </div>
  );
}

export default Portfolio;
