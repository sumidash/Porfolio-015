import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <p className="section-title">About Me</p>

        <h2>Who I Am</h2>

        <p>
          I am a Computer Science and Engineering student with an interest in
          programming, web development, and technology. I enjoy learning new
          technologies and improving my problem-solving skills.
        </p>

        <p>
          My goal is to become a skilled software developer and build useful,
          user-friendly applications. I am always interested in learning new
          skills and working on projects that improve my technical knowledge.
        </p>

        <div className="about-info">
          <div className="info-card">
            <h3>Education</h3>
            <p>Computer Science & Engineering</p>
          </div>

          <div className="info-card">
            <h3>Interest</h3>
            <p>Programming & Web Development</p>
          </div>

          <div className="info-card">
            <h3>Goal</h3>
            <p>Become a Skilled Software Developer</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Sylhet, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;