import React from "react";
import PortfolioNav from "../../components/Nav/PortfolioNav";
import WeatherDashboard from "../../assets/images/weather-dashboard-data.png";
import IceBox from "../../assets/images/icebox-screenshot.png";
import SearchAndRescue from "../../assets/images/search-and-rescue.png";
import CodeQuiz from "../../assets/images/coding-quiz-homepage.png";
import Landpad from "../../assets/images/landpad-landing.png"
import EmpDir from "../../assets/images/emp-dir-landing.png"
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
                  <a href="" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={} alt=""></img></a>
                  <a href="" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="">name</p></a>
                </div>
              </div>

              <div className="row">
              <div className="col-xl-6">
                  <a href="" target="_blank" rel="noopener noreferrer"><img className="" src={} alt=""></img></a>
                  <a href="" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="">name</p></a>
                </div>
                <div className="col-xl-6">
                  <a href="" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={} alt="what is call"></img></a>
                  <a href="" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="">name</p></a>
                </div>
              </div>

              <div className="row">
              <div className="col-xl-6">
                  <a href="" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={} alt="name"></img></a>
                  <a href="" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title"></p></a>
                </div>
                <div className="col-xl-6">
                  <a href="" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={} alt="name"></img></a>
                  <a href="" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">name</p></a>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default Portfolio;
