import React from "react";
import Navbar from "../components/navbar";


const About = () => {
  return(
    <div class="bg-line">
      <Navbar />
      <div class="d-flex align-items-center min-vh-100">
        <div class="container animate">
          <div class="row px-3 mt-5 align-items-center">
            <div class="col-12 col-sm-12 col-md-8 d-flex justify-content-center flex-column ">
              <h2 class="mt-1 text-white fw-700 lh-24 mb-4 px-0">About Me</h2>
              <p class="text-white col-12 col-sm-12 col-md-10 text-md">I am a sixth-semester student majoring in Information Systems, currently interning as a UI Engineer. In this role, I frequently code and have strong knowledge in front-end development. I have also participated in the Software Engineer bootcamp at RevoU, which has further enhanced my skills in this field.
              <br /><br />I am proficient in HTML, CSS, JavaScript, and frameworks such as React and TypeScript. I always strive to create engaging and responsive user interfaces. During my internship, I applied my knowledge to real-world projects, improving my technical skills and problem-solving abilities. <br /><br />My participation in the Software Engineer bootcamp at RevoU, combined with my practical experience, has given me a unique perspective on front-end development. This combination of theoretical knowledge and hands-on experience allows me to approach projects with innovative solutions that enhance user experiences and drive business success. <br /><br />I am very enthusiastic about continuing to learn and grow in the field of software development. I believe that the combination of my formal education and practical experience enables me to make significant contributions to a front-end development team. I am particularly excited about opportunities where I can leverage my skills to improve user interfaces and contribute to the overall success of the business.</p>
                <div class="row gap-2 mt-5">
                  <div class="col-12 d-flex align-items-center">
                    <i class="bi bi-whatsapp text-white me-3"></i>
                    <p class="text-white mb-0">0812-9062-2003</p>
                  </div>
                  <div class="col-12 d-flex align-items-center">
                    <i class="bi bi-linkedin text-white me-3"></i>
                    <p class="text-white mb-0">umartsqb@gmail.com</p>
                  </div>
                  <div class="col-12 d-flex align-items-center">
                    <i class="bi bi-envelope-fill text-white me-3"></i>
                    <p class="text-white mb-0">muhammadumartsaqib</p>
                  </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 mt-5 mb-5">
              <img src="assets/umar.JPG" alt="" class="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default About;