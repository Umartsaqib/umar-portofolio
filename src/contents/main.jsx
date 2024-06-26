import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);

  return(
    <div className="bg-line">
      <Navbar />
      <div className="container" data-aos="fade-right">
        <div className="row d-flex align-items-center min-vh-100">
          <div className="col-12  text-start px-3 mt-5">
            <h2 className="mt-1 dark-black fw-700 lh-24">Muhammad Umar Tsaqib</h2>
            <p className="dark-black mb-4 fw-400 lh-20 text-lg">Always want to improve skills and always want to learn something new</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;