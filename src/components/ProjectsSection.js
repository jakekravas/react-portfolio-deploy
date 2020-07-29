import React from 'react';

const ProjectsSection = (props) => {
  return (
    <section id="projects-sectionT">
        <h1 id="projects-header" className="display-4">My Projects</h1>
        <div className="row mx-auto" id="project-cards-container">
          <div className="col-lg-4">
            <div className="card">
              <img src={props.disasterTrackerImg} alt="pw-generator" className="card-img-top img-fluid"/>
              <div className="card-body">
                <h5 className="card-title">Disaster Tracker (group project)</h5>
                <p className="card-text">Shows nationwide COVID-19 case and death totals by state and by county, as well as nearby hospitals and other useful disaster information for any county in the US.</p>
                <div className="card-btn-container">
                  <button className="card-btn">
                    <a className="card-link" rel="noopener noreferrer" target="_blank" href="https://covid-disaster-tracker.herokuapp.com/#/">View Deployed App</a>
                  </button>
                  <button className="card-btn">
                    <a className="card-link" rel="noopener noreferrer" target="_blank" href="https://github.com/ZonkeyStripes/Covid-Disaster-Tracker">View GitHub Repository</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={props.rateYourRoommateImg} alt="rate-your-roommate" className="card-img-top img-fluid"/>
              <div className="card-body">
                <h5 className="card-title">Rate Your Roommate (group project)</h5>
                <p className="card-text">Similar to the concept of ratemyproffessors.com, except applied to roommates! View roommate scores and rate your roommates through this app.</p>
                <div className="card-btn-container">
                 <button className="card-btn">
                    <a className="card-link" rel="noopener noreferrer" target="_blank" href="https://aqueous-shelf-03682.herokuapp.com/">View Deployed App</a>
                  </button>
                  <button className="card-btn">
                    <a className="card-link" rel="noopener noreferrer" target="_blank" href="https://github.com/kodypbishop/Project_2">View GitHub Repository</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <img src={props.connectifyImg} alt="connectify" className="card-img-top img-fluid proj-img"/>
              <div className="card-body">
                <h5 className="card-title">Connectifire Social Media</h5>
                <p className="card-text">MERN social media website. Logged in users can edit their name, username, profile photo, cover photo, as well as view their feed, follow/unfollow other users, like/unlike posts, and more.
                </p>
                <div className="card-btn-container">
                  <button className="card-btn">
                    <a className="card-link" rel="noopener noreferrer" target="_blank" href="https://connectifire.herokuapp.com">View Deployed App</a>
                  </button>
                  <button className="card-btn">
                    <a className="card-link" rel="noopener noreferrer" target="_blank" href="https://github.com/jakekravas/Connectifire-Public">View GitHub Repository</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sap-btn-container">
          <button id="sap-btn">
            <a id="sap-link" href="https://github.com/jakekravas" target="_blank" rel="noopener noreferrer"><i className="fab fa-github lg-link"/> See All Projects</a>
          </button>
        </div>
    </section>
  )
}

export default ProjectsSection
