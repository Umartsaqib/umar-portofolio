import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';


const EducationSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);
  
  return(
    <div className="bg-line">
    <Navbar/>
    <div className="container mt-5">
    <div className="row pt-3 px-3">
      <div className="col-12 col-sm-12 col-md-6" data-aos="fade-down">
        <h4 className="fw-900 text-xxl px-0 pt-4">Education</h4>
          <div className="row py-4">
            <div className="row pb-2">
              <div className="col-3">
                <p className="dark-black mb-0">2018 - 2021</p>
              </div>
              <div className="col-9">
                <p className="dark-black mb-0">SMAN 2 Tangerang Selatan</p>
                <p className="dark-black mb-0">Science Major</p>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-3">
                <p className="dark-black mb-0">2021 - Present</p>
              </div>
              <div className="col-9">
                <p className="dark-black mb-0">Bina Nusantara University</p>
                <p className="dark-black mb-0">Bachelor of Information Systems</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="dark-black mb-0">Oct 2023 - Present</p>
              </div>
              <div className="col-9">
                <p className="dark-black mb-0">Bootcamp REVOU Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      <div className="col-12 col-sm-12 col-md-6" data-aos="fade-down">
        <h4 className="fw-900 pt-4 text-xxl">Technical Skills</h4>
          <div className="row py-4 gap-3">
            <div className="col-12 d-flex">
              <div className="col-3 col-sm-3">
                <img src="/assets/figma.jpg" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/html.jpg" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/js.jpg" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/adobepr.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="col-3">
                <img src="/assets/java.jpg" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/react.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/vue.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/nextjs.avif" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="col-3">
                <img src="/assets/typescript.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/python.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/flask.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/mysql.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3 px-3">
        <div className="col-12 col-sm-12 col-md-6 " data-aos="fade-up">
          <h4 className=" fw-900 pt-4 text-xxl">Language</h4>
              <div className="row py-4">
                <div className="col-5 border-end dark-black">
                  <p className="dark-black">Indonesia (Native)</p>
                </div>
                <div className="col-7 ps-3">
                  <p className="dark-black">English</p>
                </div>
              </div>
            </div>
        <div className="col-12 col-sm-12 col-md-6 " data-aos="fade-up">
          <h4 className=" fw-900 pt-4 text-xxl">Interest</h4> 
            <div className="col-12 py-4 px-0">
              <p className="dark-black">Technology</p>
              <p className="dark-black">Learning something new to gain experience and skills</p>
            </div>
          </div>
        </div>

          <div className="row pt-3 px-3 pb-5">
            <div className="col-12 col-sm-12 col-md-6 " data-aos="fade-up">
              <h4 className=" fw-900 pt-4 text-xxl">Soft Skills</h4>
                  <div className="row py-4">
                    <div className="col-6 border-end">
                      <p className="dark-black"><strong>Teamwork</strong>: I excel in working collaboratively to achieve common goals.</p>
                      <p className="dark-black"><strong>Communication</strong>: I effectively convey technical concepts to diverse stakeholders.</p>
                    </div>
                    <div className="col-6 ps-3">
                      <p className="dark-black"><strong>Critical Thinking</strong>: My critical thinking skills help me analyze problems and make informed decisions.</p>
                      <p className="dark-black"><strong>Time Management</strong>: My time management abilities ensure I meet deadlines and maintain productivity in fast-paced environments.</p>
                    </div>
                  </div>
                </div>
            <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
              <h4 className=" fw-900 pt-4 text-xxl">Skill Set</h4>
                <div className="row py-4">
                  <div className="col-6 border-end">
                    <p className="dark-black">User Research</p>
                    <p className="dark-black">Wireframing</p>
                    <p className="dark-black">Brain Storming</p>
                  </div>
                  <div className="col-6 ps-3">
                    <p className="dark-black">Web Design</p>
                    <p className="dark-black">App Design</p>
                    <p className="dark-black">Prototyping</p>
                  </div>
                </div>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default EducationSkills;