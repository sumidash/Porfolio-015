import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <p className="section-title">Contact Me</p>

        <h2>Let's Get In Touch</h2>

        <p className="contact-intro">
          If you have any questions, project ideas, or would like to connect
          with me, feel free to contact me.
        </p>

        <div className="contact-info">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:dashsumi962@gmail.com">
              dashsumi962@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <a href="tel:01758084344">
              01758084344
            </a>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Sylhet, Bangladesh</p>
          </div>
        </div>

        <a
          href="mailto:dashsumi962@gmail.com"
          className="contact-btn"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;