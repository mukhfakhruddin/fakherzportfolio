import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/fakhruddin.ndt/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/mukh_fakhruddin/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/mukhammad-fakhruddin-8133b4243/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Fakhruddin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical loop={Infinity} steps={["Mern Stack Dev🤖", 1000, "Frontend Developer😁", 1000, "Backend Developer😎", 1000, "Web Developer💻", 1000, "Mobile Developer📱", 1000]} />
              </h1>
            </span>
            <span className="profile-role-tagline">Junior Fullstack Developer of Website and Mobile Apps.</span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {" "}
              Hire Me{" "}
            </button>
            <a href="resume.pdf" download="M Fakhruddin.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
