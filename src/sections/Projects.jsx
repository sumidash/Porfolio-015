import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Online Voting System",
      description:
        "A Java Swing based online voting system project designed to manage voting and user information.",
      technology: "Java • Swing",
    },
    {
      number: "02",
      title: "My Portfolio Website",
      description:
        "A personal portfolio website built with React to showcase my profile, skills, projects, and contact information.",
      technology: "React • HTML • CSS",
    },
    {
      number: "03",
      title: "Student Management System",
      description:
        "A Java project for managing student information such as name, ID, and academic details.",
      technology: "Java • OOP",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <p className="section-title">My Projects</p>

        <h2>Some of My Work</h2>

        <p className="projects-intro">
          Here are some of the projects I have worked on during my learning
          journey.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-bottom">
                <span>{project.technology}</span>

                <a href="#contact" className="project-btn">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;