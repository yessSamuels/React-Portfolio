import React from "react";
import ProfilePic from "../../assets/images/profile-pic-bw.jpg"
import HomeNav from "../../components/Nav/HomeNav";
import "./Home.css";

function Home() {
  return (
    <div>
        <div className="container">
          <div className="about-me row">
            <div className="col-lg-4"> 
              <HomeNav />
            </div>
            <div className="col-lg-8" id="pic-div">
                <img className="profile-pic" src={ProfilePic} alt="profile of Yessica Samuels" ></img>
            </div>
            <div className="col-lg-12">
                <p className="about-me-text">
                With over a decade of design experience, I began my career in New York City as a Graphic Designer for TWELV Magazine, 
                where I developed my skills of managing multiple projects in a fast-paced environment. My talent and drive repelled me to 
                Visual Editor where I was able to develop my unique editorial style. Upon my return back to Los Angeles, my focus has 
                been Real Estate Marketing and by using the knowledge I’ve obtained from my past experience, as well as utilizing my 
                degree in Interior Architecture and Graphic Design, I’ve developed a unique and creative style that mends both worlds 
                together in a sophisticated blend and have been showcased for multiple top companies in the Real Estate industry. 
                In addtion to my pervious degress and experience I am a newly certified full-stack web developer from UCLA’s coding bootcamp. </p>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Home;