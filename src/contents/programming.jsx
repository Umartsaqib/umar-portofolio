import React from "react";
import Navbar from "../components/navbar";


const Programming = () => {
  return(
    <div className="bg-line">
    <Navbar/>
      <div className="d-flex align-items-center mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-4 animate2">
            <div className="col-12 text-white text-center mb-5"><h1>Ongoing</h1></div>
              <div className="col-12 col-sm-12 col-md-8 text-center">
                <img src="/assets/htmlss.png" alt="" className="img-fluid"/>
              </div>
              <div className="col-12 col-sm-12 col-md-4 pt-4">
                <h4 className="text-white">HTML</h4>
                <p className="text-white">About</p>
                <p className="text-white">I use this HTML coding to organize the framework on this website such as the navbar, main, etc.</p>
              </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4 animate">
              <div className="col-12 col-sm-12 col-md-8 text-center">
                <img src="/assets/css ss.png" alt="" className="img-fluid"/>
              </div>
              <div className="col-12 col-sm-12 col-md-4 pt-4">
                <h4 className="text-white">CSS</h4>
                <p className="text-white">About</p>
                <p className="text-white">I use this css coding to make a style on this website such as the navbar, main, etc.</p>
              </div>
          </div>
          <div className="row justify-content-center align-items-center mb-4 animate2">
              <div className="col-12 col-sm-12 col-md-8 text-center">
                <img src="/assets/js ss.png" alt="" className="img-fluid"/>
              </div>
              <div className="col-12 col-sm-12 col-md-4 pt-4">
                <h4 className="text-white">Java Script</h4>
                <p className="text-white">About</p>
                <p className="text-white">I use this Javascript coding to make a carousel on this webs</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programming;