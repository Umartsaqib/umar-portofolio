import React from "react";
import Navbar from "../components/navbar";


const Programming = () => {
  return(
    <div class="bg-line">
    <Navbar/>
      <div class="d-flex align-items-center mt-5">
        <div class="container">
          <div class="row justify-content-center align-items-center mb-4 animate2">
            <div className="col-12 text-white text-center mb-5"><h1>Ongoing</h1></div>
              <div class="col-12 col-sm-12 col-md-8 text-center">
                <img src="/assets/htmlss.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-12 col-sm-12 col-md-4 pt-4">
                <h4 class="text-white">HTML</h4>
                <p class="text-white">About</p>
                <p class="text-white">I use this HTML coding to organize the framework on this website such as the navbar, main, footer, etc.</p>
              </div>
          </div>
          <div class="row justify-content-center align-items-center mb-4 animate">
              <div class="col-12 col-sm-12 col-md-8 text-center">
                <img src="/assets/css ss.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-12 col-sm-12 col-md-4 pt-4">
                <h4 class="text-white">CSS</h4>
                <p class="text-white">About</p>
                <p class="text-white">I use this css coding to make a style on this website such as the navbar, main, footer, etc.</p>
              </div>
          </div>
          <div class="row justify-content-center align-items-center mb-4 animate2">
              <div class="col-12 col-sm-12 col-md-8 text-center">
                <img src="/assets/js ss.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-12 col-sm-12 col-md-4 pt-4">
                <h4 class="text-white">Java Script</h4>
                <p class="text-white">About</p>
                <p class="text-white">I use this Javascript coding to make a carousel on this webs</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programming;