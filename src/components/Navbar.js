import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar id="header" collapseOnSelect expand="lg" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#/">
        Jake Kravas
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto">
          <div className="link-container">
            <ReactBootStrap.Nav.Link>
              <Link
                activeClass="active"
                className="nav-link ss"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-200}
                duration= {1000}
              >
                About
              </Link>
            </ReactBootStrap.Nav.Link>
          </div>
          <div className="link-container">
            <ReactBootStrap.Nav.Link>
              <Link
                activeClass="active"
                className="nav-link ss"
                to="projects-sectionT"
                spy={true}
                smooth={true}
                offset={-45}
                duration= {700}
              >
                Projects
              </Link>
            </ReactBootStrap.Nav.Link>
          </div>
          <div className="link-container">
            <ReactBootStrap.Nav.Link>
            <Link
              activeClass="active"
              className="nav-link ss"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={0}
              duration= {1000}
            >
              Contact
            </Link>
            </ReactBootStrap.Nav.Link>
          </div>
          <div className="link-container">
              <a href="https://www.linkedin.com/in/jake-kravas-80b02719b/" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-linkedin-in sm-link"/></a>
          </div>
          <div className="link-container">
              <a href="https://github.com/jakekravas" rel="noopener noreferrer" target="_blank" className="nav-link"><i className="fab fa-github sm-link"/></a>
          </div>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  )
  // return (
    // <nav id="nav-main" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    //   <div className="container">
    //     <Link
    //       activeClass="active"
    //       className="navbar-brand ss"
    //       to="about-section"
    //       spy={true}
    //       smooth={true}
    //       offset={-200}
    //       duration= {1000}
    //     >
    //       Jake Kravas
    //     </Link>
    //     <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false"><span className="navbar-toggler-icon"></span></button>
    //     <div className="navbar-collapse collapse" id="navbarNav">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <Link
    //             activeClass="active"
    //             className="nav-link ss"
    //             to="about-section"
    //             spy={true}
    //             smooth={true}
    //             offset={-200}
    //             duration= {1000}
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             activeClass="active"
    //             className="nav-link ss"
    //             to="projects-sectionT"
    //             spy={true}
    //             smooth={true}
    //             offset={-45}
    //             duration= {700}
    //           >
    //             Projects
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             activeClass="active"
    //             className="nav-link ss"
    //             to="contact-section"
    //             spy={true}
    //             smooth={true}
    //             offset={0}
    //             duration= {1000}
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <a href="https://www.linkedin.com/in/jake-kravas-80b02719b/" target="_blank" rel="noopener noreferrer" className="nav-link"><i className="fab fa-linkedin-in sm-link"/></a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="https://github.com/jakekravas" rel="noopener noreferrer" target="_blank" className="nav-link"><i className="fab fa-github sm-link"/></a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  // )
}

export default Navbar;