import React from "react";
import PortfolioNav from "../../components/Nav/PortfolioNav";
import IceBox from "../../assets/images/icebox-screenshot.png";
import Landpad from "../../assets/images/landpad-landing.png"
import "./Portfolio.css"


function Portfolio() {
  return (
    <div >

      <div className="container flex">    
        <div className="row">
          <div className="col-xl-4">
            <PortfolioNav />
          </div>

            <div className="project-display col-xl-8">

              <p id="instructions">Click any image to navigate to the project</p>

              <div className="row">
                <div className="col-xl-6">
                  <a href="https:githublink" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={} alt="LAND PAD"></img></a>
                  <a href="https:githublink" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">name</p></a>                        
                </div>
                <div className="col-xl-6">
                  <a href="" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={} alt="ICE BOX"></img></a>
                  <a href="" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="">name</p></a>
                </div>
          </div>
        </div>

    </div>
  );
}

export default Portfolio;
