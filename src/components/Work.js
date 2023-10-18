import React from "react";
import courses from "../online-images/courses1.jpg";
import WebDevelopment from "../online-images/webdevee.jpg";
import DSA from "../online-images/dsa.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: courses,
      title: "Courses",
      text: "Discover courses meticulously designed to cater to various interests and skill levels.",
    },
    {
      image: WebDevelopment,
      title: "Web Development",
      text: "Craft the Digital Future: Excel in Web Development with our Expert-Guided Courses.",
    },
    {
      image: DSA,
      title: "DSA",
      text: "DSA Courses: Sharpen Your Problem-Solving Skills and Thrive in the Coding Universe.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Enrolling is simple—choose your course, sign up, and gain access to our intuitive online platform. Engage in interactive lectures, submit assignments, and participate in discussions to deepen your understanding. Our user-friendly interface ensures seamless learning and helps you stay on track towards success.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Enrolling is simple—choose your course, sign up, and gain access to our intuitive online platform. Engage in interactive lectures, submit assignments, and participate in discussions to deepen your understanding. Our user-friendly interface ensures seamless learning and helps you stay on track towards success.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
