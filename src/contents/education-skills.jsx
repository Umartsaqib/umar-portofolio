import React from "react";
import Navbar from "../components/navbar";


const EducationSkills = () => {
  return(
    <div className="bg-line">
    <Navbar/>
    <div className="container mt-5">
    <div className="row pt-3 px-3">
      <div className="col-12 col-sm-12 col-md-6">
        <h4 className="animate text-gray fw-900 text-xxl px-0 pt-4">Education</h4>
          <div className="animate2 row py-4">
            <div className="row pb-2">
              <div className="col-3">
                <p className="text-white mb-0">2019 - 2021</p>
              </div>
              <div className="col-9">
                <p className="text-white mb-0">SMAN 2 Tangerang Selatan</p>
                <p className="text-white mb-0">Science Major</p>
              </div>
            </div>
            <div className="row pb-2">
              <div className="col-3">
                <p className="text-white mb-0">2021 - Present</p>
              </div>
              <div className="col-9">
                <p className="text-white mb-0">Bina Nusantara University</p>
                <p className="text-white mb-0">Bachelor of Information Systems</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="text-white mb-0">Oct 2023 - Present</p>
              </div>
              <div className="col-9">
                <p className="text-white mb-0">Bootcamp REVOU Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      <div className="col-12 col-sm-12 col-md-6">
        <h4 className="animate text-gray fw-900 pt-4 text-xxl">Technical Skills</h4>
          <div className="animate2 row py-4 gap-3">
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
            <div className="col-12 d-flex gap-2">
              <div className="col-3">
                <img src="/assets/java.jpg" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
              <div className="col-3 col-sm-3">
                <img src="/assets/react.png" alt="img-fluid" style={{width: 60, height: 60}}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3 px-3">
        <div className="col-12 col-sm-12 col-md-6 ">
          <h4 className="animate text-gray fw-900 pt-4 text-xxl">Language</h4>
              <div className="animate2 row py-4">
                <div className="col-5 border-end">
                  <p className="text-white">Indonesia (Native)</p>
                </div>
                <div className="col-7 ps-3">
                  <p className="text-white">English</p>
                </div>
              </div>
            </div>
        <div className="col-12 col-sm-12 col-md-6 ">
          <h4 className="animate text-gray fw-900 pt-4 text-xxl">Interest</h4> 
            <div className="col-12 py-4 px-0">
              <p className="animate2 text-white">Technology</p>
            </div>
          </div>
        </div>

          <div className="row pt-3 px-3 pb-5">
            <div className="col-12 col-sm-12 col-md-6 ">
              <h4 className="animate text-gray fw-900 pt-4 text-xxl">Soft Skills</h4>
                  <div className="animate2 row py-4">
                    <div className="col-6 border-end">
                      <p className="text-white">Teamwork</p>
                      <p className="text-white">Communication</p>
                    </div>
                    <div className="col-6 ps-3">
                      <p className="text-white">Critical Thinking</p>
                      <p className="text-white">Time Management</p>
                    </div>
                  </div>
                </div>
            <div className="col-12 col-sm-12 col-md-6">
              <h4 className="animate text-gray fw-900 pt-4 text-xxl">Skill Set</h4>
                <div className="animate2 row py-4">
                  <div className="col-6 border-end">
                    <p className="text-white">User Research</p>
                    <p className="text-white">Wireframing</p>
                    <p className="text-white">Brain Storming</p>
                  </div>
                  <div className="col-6 ps-3">
                    <p className="text-white">Web Design</p>
                    <p className="text-white">App Design</p>
                    <p className="text-white">Prototyping</p>
                  </div>
                </div>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default EducationSkills;