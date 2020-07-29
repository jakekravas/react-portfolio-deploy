import React from 'react';
import './App.css';
import "./style.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import disasterTrackerImg from "./images/disaster-tracker-img.png";
import rateYourRoommateImg from "./images/rate-your-roommate-img.png";
import connectifyImg from "./images/connectify.png";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <ProjectsSection
        disasterTrackerImg={disasterTrackerImg}
        rateYourRoommateImg={rateYourRoommateImg}
        connectifyImg={connectifyImg}
      />
      <ContactSection/>
    </div>
  );
}

export default App;
