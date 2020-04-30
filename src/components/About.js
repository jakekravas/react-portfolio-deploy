import React from 'react';

const About = () => {
  return (
    <section id="about-section">
      <div className="dark-overlay">
        <div className="about-inner container">
          <div className="row">
            <div className="col text-white">
              <h1 className="display-4">Aspiring <strong>Full-Stack</strong> Web Developer</h1>
              <div className="p4 my-4">Recent graduate of the Full-Stack Web Development Bootcamp through The University of Arizona. With skills in JavaScript, React, Node.js, MongoDB, MySQL, HTML, CSS, and various other technologies, I'd be eager to take a position as a front-end, back-end, or full-stack web developer.</div>
              <a href="https://drive.google.com/file/d/18aYq5meM-k9zd2mJh8bRZqH34-bKrWFe/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lg mr-2 ss">View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;