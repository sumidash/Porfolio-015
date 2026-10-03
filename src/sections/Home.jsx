import "./Home.css";
import profileImage from "../assets/profile.jpeg";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="home-greeting">Hello, I'm</p>

        <h1>
          Sumi<span>.</span>
        </h1>

        <h2>CSE Student</h2>

        <p className="home-description">
          I am a CSE student interested in programming, web development, and
          technology. I enjoy exploring new technologies, solving problems,
          and creating useful applications.
        </p>

        <p className="home-extra">
          Passionate about learning, growing, and turning ideas into reality
          through code.
        </p>

        <div className="home-buttons">
          <a href="#contact" className="home-btn">
            Contact Me
          </a>

          <a href="#about" className="home-btn-outline">
            Explore More
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profileImage} alt="Sumi" />
      </div>
    </section>
  );
}

export default Home;