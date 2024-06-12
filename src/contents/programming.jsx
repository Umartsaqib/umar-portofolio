import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Programming = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);

  return(
    <div className="bg-line min-vh-100">
      <Navbar />
      <div className="d-flex align-items-center mt-5">
        <div className="container">
          <div className="row">
          <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
            <h4 className="fw-900 text-xxl px-0 pt-4">Experience</h4>
          </div>
          <div className="row mt-3" data-aos="fade-up">
            <div className="col-6 dark-black">Ui Engineer Intern, Global Loyalty Indonesia</div>
            <div className="col-6 dark-black text-end">February 2024 – August 2024</div>
          <div className="col-12 mt-3">
            <ol>
              <li className="dark-black">Design library/system and how it works</li>
              <li className="dark-black">Negotiate through a variety of requirements, from vague to well-defined, simple to complex</li>
              <li className="dark-black">Create static content campaign</li>
              <li className="dark-black">Generate email template</li>
              <li className="dark-black">Create UI Design product</li>
              <li className="dark-black">Developed a comprehensive documentation guide for UI Engineer interns, enhancing the onboarding process Designed and implemented a new menu on Alfagift Apps</li>
              <li className="dark-black">Improving user experience Maintained static content for official store and promotions</li>
              <li className="dark-black">Ensuring up-to-date and accurate information Collaborated with the development team to troubleshoot and resolve UI issues, enhancing app performance</li>
            </ol>
          </div>
          </div>
          <div className="row mt-3" data-aos="fade-up">
            <div className="col-6 dark-black">Front End Developer, Revou Project</div>
            <div className="col-6 dark-black text-end">April 2024 – April 2024</div>
          <div className="col-12 mt-3">
            <ol>
              <li className="dark-black">Designed and developed a responsive web interface for CareerSearch</li>
              <li className="dark-black">improving site accessibility Created user-friendly pages</li>
              <li className="dark-black">enhancing user engagement and satisfaction Implemented form validation for login and signup</li>
              <li className="dark-black">improving data integrity and security Developed reusable components for easy use</li>
              <li className="dark-black">enhancing development efficiency and consistency</li>
            </ol>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programming;
