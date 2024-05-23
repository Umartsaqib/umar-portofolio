import React from "react";
import Navbar from "../components/navbar";


const Main = () => {
  return(
    <div class="bg-main-img">
      <Navbar />
      <div class="container">
        <div class="row d-flex align-items-center min-vh-100">
          <div class="col-12  text-start px-3 mt-5">
            <h2 class="mt-1 text-white fw-700 lh-24">Muhammad Umar Tsaqib</h2>
            <p class="text-white mb-4 fw-400 lh-20 text-lg">PORTOFOLIO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;