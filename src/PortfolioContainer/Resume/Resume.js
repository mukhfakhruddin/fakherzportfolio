import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? <div className="heading-date">{props.fromDate + "-" + props.toDate}</div> : <div></div>}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Portfolio Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "PHP", ratingPercentage: 75 },
    { skill: "Bootstrap", ratingPercentage: 75 },
    { skill: "Laravel", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "MySql", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website ",
      description: "Personal Portfolio website to display all the details about me in one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Calculator Web App ",
      description: "System for calculating based web applications.",
      subHeading: "Technologies Used:  HTML, CSS, JavaScript",
    },
    {
      title: "Game Gacha Website ",
      description: "This is a portfolio project that I built from the Fundamentals JavaScript course.",
      subHeading: "Technologies Used: HTML, CSS, Bootstrap, JavaScript.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading heading={"Universitas Muhammadiyah Sidoarjo, Indonesia"} subHeading={"Bachelor Of Computer Technology Informatics"} fromDate={"2014"} toDate={"2021"} />

      <ResumeHeading heading={"SMK Yadika Bangil"} subHeading={"Network Computer Engineering"} fromDate={"2010"} toDate={"2013"} />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading heading={"PT.Panasonic Lighting Indonesia"} subHeading={"Operator"} fromDate={"2013"} toDate={"2014"} />
        <br />
        <ResumeHeading heading={"PT.Indofood CBP Sukses Makmur"} subHeading={"Helper"} fromDate={"2015"} toDate={"2018"} />
        <br />
        <ResumeHeading heading={"PT.Buana Mega Paper Mills"} subHeading={"Operator"} fromDate={"September 2021 "} toDate={" Maret 2022"} />
        <br />
        <ResumeHeading heading={"Urban Athletes"} subHeading={"Programmer"} fromDate={"Maret 2022 "} toDate={" Mei 2022"} />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading key={index} heading={projectsDetails.title} subHeading={projectsDetails.subHeading} description={projectsDetails.description} />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Ngoding" description="I like coding because it's fun and I also like to learn new things especially about the world of coding and programming." />
      <ResumeHeading heading="Music" description="Listening to music is something soothing for me, instrument music is very helpful for me to learn so that it is not easily distracted." />
      <ResumeHeading heading="Gaming" description="I also like games to refresh the brain. Because the purpose of the game is to reduce stress. when we play games I have a lot of fresh brains." />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
        <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`).default} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div style={carousalOffsetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
