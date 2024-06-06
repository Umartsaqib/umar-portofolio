import React, { useState,useEffect } from "react";
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectsApplications = () => {
  const [activeContent, setActiveContent] = useState(1);
  const [activeContent2, setActiveContent2] = useState(3);
  const [activeContent3, setActiveContent3] = useState(5);
  const [activeContent4, setActiveContent4] = useState(7);

  const showContent = (contentNumber) => {
    setActiveContent(contentNumber === 2 ? 2 : 1);
  };
  const showContent2 = (contentNumber) => {
    setActiveContent2(contentNumber === 4 ? 4 : 3);
  };
  const showContent3 = (contentNumber) => {
    setActiveContent3(contentNumber === 6 ? 6 : 5);
  };
  const showContent4 = (contentNumber) => {
    setActiveContent4(contentNumber === 8 ? 8 : 7);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);

  return (
    <div className="bg-line">
      <Navbar />
      <div className="container">
        {/* UI/UX */}
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-4" data-aos="fade-right">
            <p className="text-white mb-0">Project & Application</p>
            <h2 className="text-white">UI/UX</h2>
          </div>
        </div>
        {/* Projects & Applications */}
        <div className="row py-5">
          {/* Project 1 */}
          <div className="col-12 col-sm-12 col-md-3" data-aos="fade-up">
            <div className="d-flex gap-2">
              <div>
                <p className="text-white text-xl fw-500">01</p>
              </div>
              <div>
                <p className="text-white text-xl fw-500">DIETIO UI/UX</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/diet.png" alt="" className="img-fluid" style={{ height: 400 }} />
            </div>
          </div>
          {/* Project 2 */}
          <div className="col-12 col-sm-12 col-md-3 " data-aos="fade-up">
            <div className="d-flex gap-2">
              <div>
                <p className="text-white text-xl fw-500">02</p>
              </div>
              <div>
                <p className="text-white text-xl fw-500">M-Banking (Clone)</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/bca1.png" alt="" className="img-fluid" style={{ height: 400 }} />
            </div>
          </div>
          {/* Project 3 */}
          <div className="col-12 col-sm-12 col-md-3 " data-aos="fade-up">
            <div className="d-flex gap-2">
              <div>
                <p className="text-white text-xl fw-500">03</p>
              </div>
              <div>
                <p className="text-white text-xl fw-500">Rentable</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/rent.png" alt="" className="img-fluid" style={{ height: 400 }} />
            </div>
          </div>
          {/* Project 4 */}
          <div className="col-12 col-sm-12 col-md-3 " data-aos="fade-up">
            <div className="d-flex gap-2">
              <div>
                <p className="text-white text-xl fw-500">04</p>
              </div>
              <div>
                <p className="text-white text-xl fw-500">Chromatic Cinema</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/cc1.png" alt="" className="img-fluid" style={{ height: 400 }} />
            </div>
          </div>
        </div>
        {/* Content Sections */}
        {/* <div className="content-container">
          {activeContent === 1 && (
            <div id="content1">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="text-center">
                    <div className="content active-content">
                      <img src="/assets/diet2.png" alt="" className="img-fluid" style={{ width: 400, height: 400 }} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column">
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-white text-xl fw-700 mb-0">01</p>
                    <h2 className="text-white text-xl fw-900 mb-0">DIETIO</h2>
                  </div>
                  <div>
                    <p className="text-white">About Project</p>
                    <p className="text-white">
                      Dietio is a diet application where users can see their body calories and how many calories
                      enter their body, in Dietio also users can order food that has been included in the diet
                      program, they can interact with other users to find out what experiences they have gone
                      through or the same as sharing experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeContent === 2 && (
            <div id="content2">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-3">
                  <h2 className="text-white fw-900 mb-0">Diet Io MockUps</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-3 text-center">
                  <img src="/assets/diet3.png" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-sm-12 col-md-3 text-center">
                  <img src="/assets/diet4.png" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-sm-12 col-md-3 text-center">
                  <img src="/assets/diet5.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          )}
        <div className="dot-container">
          <div className={`dot ${activeContent === 1 ? "active-dot" : ""}`} onClick={() => showContent(1)}></div>
          <div className={`dot ${activeContent === 2 ? "active-dot" : ""}`} onClick={() => showContent(2)}></div>
        </div>
        </div> */}

        <div className={`container py-5 ${activeContent === 1 ? "" : "d-none"}`} id="content1" data-aos="fade-up">
          <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <div className="text-center">
                    <div className="content active-content">
                      <img src="/assets/diet2.png" alt="" className="img-fluid" style={{ width: 400, height: 400 }} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column">
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-white text-xl fw-700 mb-0">01</p>
                    <h2 className="text-white text-xl fw-900 mb-0">DIETIO</h2>
                  </div>
                  <div>
                    <p className="text-white">About Project</p>
                    <p className="text-white">
                      Dietio is a diet application where users can see their body calories and how many calories
                      enter their body, in Dietio also users can order food that has been included in the diet
                      program, they can interact with other users to find out what experiences they have gone
                      through or the same as sharing experiences
                    </p>
                  </div>
                </div>
              </div>
        </div>
        <div className={`container py-5 ${activeContent === 2 ? "" : "d-none"}`} id="content2">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3">
              <h2 className="text-white fw-900 mb-0">Diet Io MockUps</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/diet3.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/diet4.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/diet5.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
          </div>
        </div>
        <div className="dot-container" data-aos="fade-up">
          <div className={`dot ${activeContent === 1 ? "active-dot" : ""}`} onClick={() => showContent(1)}></div>
          <div className={`dot ${activeContent === 2 ? "active-dot" : ""}`} onClick={() => showContent(2)}></div>
        </div>
        <div className={`container py-5 ${activeContent2 === 3 ? "" : "d-none"}`} id="content3" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column">
              <div className="d-flex align-items-center gap-2">
                <p className="text-white text-xl fw-900 mb-0">02</p>
                <h2 className="text-white text-xl fw-900 mb-0">M-Banking (Clone)</h2>
              </div>
              <div>
                <p className="text-white">About Project</p>
                <p className="text-white">
                  Mobile banking is a type of a service provided by banks to their customers to carry out various
                  banking transactions through sharing features and menus contained in banking applications that can
                  be downloaded and installed via smartphone.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="text-center">
                <div className="content active-content">
                  <img src="/assets/bca2.png" alt="" className="img-fluid" style={{ width: 400, height: 400 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container py-5 ${activeContent2 === 4 ? "" : "d-none"}`} id="content4">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <h2 className="text-white fw-900 mb-0">M-Banking (Clone) MockUps</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/bca3.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/bca4.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/bca5.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
          </div>
        </div>
        <div className="dot-container" data-aos="fade-up">
          <div className={`dot2 ${activeContent2 === 3 ? "active-dot2" : ""}`} onClick={() => showContent2(3)}></div>
          <div className={`dot2 ${activeContent2 === 4 ? "active-dot2" : ""}`} onClick={() => showContent2(4)}></div>
        </div>
        <div className={`container py-5 ${activeContent3 === 5 ? "" : "d-none"}`} id="content5" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="text-center">
                <div className="content active-content">
                  <img src="/assets/rent2.png" alt="" className="img-fluid" style={{ width: 400, height: 400 }} />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column">
              <div className="d-flex align-items-center gap-2">
                <p className="text-white text-xl fw-700 mb-0">03</p>
                <h2 className="text-white text-xl fw-900 mb-0">Rentable</h2>
              </div>
              <div>
                <p className="text-white">About Project</p>
                <p className="text-white">
                  Rentable is an application that makes it easier for property owners to rent out and promote their
                  property to potential tenants. Users can also search for the latest and most complete property
                  listings here.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`container py-5 ${activeContent3 === 6 ? "" : "d-none"}`} id="content6">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <h2 className="text-white fw-900 mb-0">Rentable MockUps</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/rent3.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/rent4.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/rent5.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
          </div>
        </div>
        <div className="dot-container" data-aos="fade-up">
          <div className={`dot3 ${activeContent3 === 5 ? "active-dot3" : ""}`} onClick={() => showContent3(5)}></div>
          <div className={`dot3 ${activeContent3 === 6 ? "active-dot3" : ""}`} onClick={() => showContent3(6)}></div>
        </div>
        <div className={`container py-5 ${activeContent4 === 7 ? "" : "d-none"}`} id="content7" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column">
              <div className="d-flex align-items-center gap-2">
                <p className="text-white text-xl fw-700 mb-0">04</p>
                <h2 className="text-white text-xl fw-900 mb-0">Chromatic Cinema</h2>
              </div>
              <div>
                <p className="text-white">About Project</p>
                <p className="text-white">
                  Chromatic Cinema is an online movie theater application where users can book tickets to watch movies
                  and see what movies are showing at the cinema.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="text-center">
                <div className="content active-content">
                  <img src="/assets/cc2.png" alt="" className="img-fluid" style={{ width: 400, height: 400 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container py-5 ${activeContent4 === 8 ? "" : "d-none"}`} id="content8">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <h2 className="text-white fw-900 mb-0">Chromatic Cinema MockUps</h2>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/cc3.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/cc4.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
            <div className="col-12 col-sm-12 col-md-3 text-center">
              <img src="/assets/cc5.png" alt="" className="img-fluid" style={{ height: 400 }} data-aos="fade-up"/>
            </div>
          </div>
        </div>
        <div className="dot-container" data-aos="fade-up">
          <div className={`dot4 ${activeContent4 === 7 ? "active-dot4" : ""}`} onClick={() => showContent4(7)}></div>
          <div className={`dot4 ${activeContent4 === 8 ? "active-dot4" : ""}`} onClick={() => showContent4(8)}></div>
        </div>
      <div className="row mt-5" data-aos="fade-up">
        <div className="col-12 col-sm-12 col-md-4">
          <p className="text-white mb-0">Project & Application</p>
          <h2 className="text-white">WEB</h2>
        </div>
      </div>
        <div className="row py-5">
          <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
            <div className="d-flex gap-2 ">
              <div>
                <p className="text-white text-xl fw-700">01</p>
              </div>
              <div>
                <p className="text-white text-xl fw-700">Ticks</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/ticks.png" alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
            <div className="d-flex gap-2">
              <div>
                <p className="text-white text-xl fw-700">02</p>
              </div>
              <div>
                <p className="text-white text-xl fw-700">Super Cats(On Progress)</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/cats.png" alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
              <div className="d-flex gap-2 ">
                <div>
                  <p className="text-white text-xl fw-700">03</p>
                </div>
                <div>
                  <p className="text-white text-xl fw-700">Pokemon</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img src="/assets/poke.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
              <div className="d-flex gap-2">
                <div>
                  <p className="text-white text-xl fw-700">04</p>
                </div>
                <div>
                  <p className="text-white text-xl fw-700">CareerSearch</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <img src="/assets/cs.png" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
                <div className="text-center">
                  <div className="content active-content">
                    <img src="/assets/ticks1.png" alt="" className="img-fluid" style={{width: 400, height: 400}}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column" data-aos="fade-up">
                <div className="d-flex align-items-center gap-2">
                  <p className="text-white text-xl fw-700 mb-0">01</p>
                  <h2 className="text-white text-xl fw-900 mb-0">Ticks</h2>
                </div>
                <div>
                  <p className="text-white">About Project</p>
                  <p className="text-white">ticks is the online purchase and sale of concert tickets website to make it easier for users to buy concert tickets, Also checked is the like best category sellers, ticket recommendations & promos. ticks is a project from campus where we, as information systems students studying digital technology, created a website in groups, ticks was my group and I's first experience creating a website, ticks was created using HTML, CSS, and Javascript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12" data-aos="fade-up">
                <h2 className="text-white">Ticks MockUps</h2>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/ticks2.jpeg" alt="" className="img-fluid "/>
                  <p className="text-white fw-700 text-md mt-2"> Homepage</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/ticks3.jpeg" alt="" className="img-fluid "/>
                  <p className="text-white fw-700 text-md mt-2"> Homepage (scrolldown)</p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/ticks4.jpeg" alt="" className="img-fluid "/>
                  <p className="text-white fw-700 text-md mt-2"> Ticket Page</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/ticks5.jpeg" alt="" className="img-fluid "/>
                  <p className="text-white fw-700 text-md mt-2"> Ticket Detail Page</p>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/ticks6.jpeg" alt="" className="img-fluid "/>
                  <p className="text-white fw-700 text-md mt-2"> Register Detail Page</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/ticks7.jpeg" alt="" className="img-fluid "/>
                  <p className="text-white fw-700 text-md mt-2"> PromotionPage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
                <div className="text-center">
                  <div className="content active-content">
                    <img src="/assets/cats2.png" alt="" className="img-fluid" style={{width: 400, height: 400}}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column" data-aos="fade-up">
                <div className="d-flex align-items-center gap-2">
                  <p className="text-white text-xl fw-700 mb-0">02</p>
                  <h2 className="text-white text-xl fw-900 mb-0">Super Cats</h2>
                </div>
                <div>
                  <p className="text-white">About Project</p>
                  <p className="text-white">Super cat is a website about the cat lover community, on this website users can see photos and videos of cats, and there is a form where users are asked to fill it out personal data to enter the cat lover community. supercat was the first assignment that Revou Bootcamp gave me where I was asked as a front end developer to create a website about the cat lover community where I was asked to create semantics code, create a navbar, use a grid, display videos on the website, create a form, and create a responsive website using media tags. Super cat was created using HTML5, CSS, and Javascript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12" data-aos="fade-up">
                <h2 className="text-white">Super Cats MockUps</h2>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/cats3.jpeg" alt="" className="img-fluid "/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/cats4.jpeg" alt="" className="img-fluid "/>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/cats5.jpeg" alt="" className="img-fluid "/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/cats6.jpeg" alt="" className="img-fluid "/>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
                <div className="text-center">
                  <div className="content active-content">
                    <img src="/assets/poke2.png" alt="" className="img-fluid" style={{width: 400, height: 300}}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column" data-aos="fade-up">
                <div className="d-flex align-items-center gap-2">
                  <p className="text-white text-xl fw-700 mb-0">03</p>
                  <h2 className="text-white text-xl fw-900 mb-0">Pokemon</h2>
                </div>
                <div>
                  <p className="text-white">About Project</p>
                  <p className="text-white">Pokémon is a website that lists the names of Pokémon. From this list we can see the detailed skills possessed by each Pokémon. On this website we can search for the name of the Pokémon we want and choose Pokémon numbers 1 to 5 as an example. This Pokemon was an assignment from Revou Bootcamp where I was asked to create a website that could call the Pokemon API. I developed it from React to Next.js where here I was asked to implement server-side-rendering. Pokémon is a website that lists the names of Pokémon. From this list we can see the detailed skills possessed by each Pokémon. On this website we can search for the name of the Pokémon we want and choose Pokémon numbers 1 to 5 as an example.</p>
                  <p className="text-white">this is the <a href="https://module-5-umartsaqib-gjdw.vercel.app/">Pokemon site</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12" data-aos="fade-up">
                <h2 className="text-white">Pokemon MockUps</h2>
              </div>
              <div className="row my-5">
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/poke3.png" alt="" className="img-fluid "/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 d-flex flex-column" data-aos="fade-up">
                  <img src="/assets/poke4.png" alt="" className="img-fluid "/>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up">
                <div className="text-center">
                  <div className="content active-content">
                    <img src="/assets/cs2.png" alt="" className="img-fluid" style={{width: 400, height: 300}}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-start flex-column" data-aos="fade-up">
                <div className="d-flex align-items-center gap-2">
                  <p className="text-white text-xl fw-700 mb-0">04</p>
                  <h2 className="text-white text-xl fw-900 mb-0">CareerSearch</h2>
                </div>
                <div>
                  <p className="text-white">About Project</p>
                  <p className="text-white">CareerSearch is a group project work where I as the front end is tasked with creating an attractive and responsive appearance, this website is useful for job seekers. Here, we can search for many job opportunities and apply directly. After that, we can check the status of our job application to find out whether it has been accepted or not. but unfortunately because this website can't run anymore because we use the railway and you have to pay monthly but here is the documentation from careersearch itself <a href="https://github.com/widiapuspitasar/CareerSearch_ProjectRevou">linkcareersearch</a> . For this project on the front end I used Vite React, Tailwind CSS and Material UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsApplications;
