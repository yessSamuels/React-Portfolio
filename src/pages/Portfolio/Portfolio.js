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
                  <a href="https:githublink" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={WeatherDashboard} alt="screenshot of weather dashboard with populated data of Tokyo"></img></a>
                  <a href="https:githublink" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">name</p></a>                        
                </div>
                <div className="col-xl-6">
                  <a href="herokulink" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={IceBox} alt="landpad"></img></a>
                  <a href="shoelink" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">name</p></a>
                </div>
              </div>

              <div className="row">
              <div className="col-xl-6">
                  <a href="heroku" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={Landpad} alt="screenshot of login page of LAND PAD"></img></a>
                  <a href="https://github.com/mfitzwinick/landpad" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">LAND PAD</p></a>
                </div>
                <div className="col-xl-6">
                  <a href="link" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={CodeQuiz} alt="what is call"></img></a>
                  <a href="link" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">name</p></a>
                </div>
              </div>

              <div className="row">
              <div className="col-xl-6">
                  <a href="project1" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={SearchAndRescue} alt="name"></img></a>
                  <a href="project1" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">project1</p></a>
                </div>
                <div className="col-xl-6">
                  <a href="hwlink" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={EmpDir} alt="name"></img></a>
                  <a href="hwlink" className="repo-link" target="_blank" rel="noopener noreferrer"><p className="project-title">name</p></a>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
  );
}

export default Portfolio;