import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "C Programming",
      description: "Programming Fundamentals",
    },
    {
      name: "C++",
      description: "Object-Oriented Programming",
    },
    {
      name: "Java",
      description: "OOP & Application Development",
    },
    {
      name: "HTML & CSS",
      description: "Web Page Design",
    },
    {
      name: "JavaScript",
      description: "Web Programming",
    },
    {
      name: "React",
      description: "Frontend Development",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <p className="section-title">My Skills</p>

        <h2>Technologies I Work With</h2>

        <p className="skills-intro">
          Here are some of the technologies and programming languages I have
          learned and worked with during my studies and projects.
        </p>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-number">0{index + 1}</div>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;