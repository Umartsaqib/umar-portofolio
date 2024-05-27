import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <div className="container-fluid test py-3 px-4">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <div>
              <span>
                <Link to="/" className={`nav text-decoration-none fw-500 text-lg lh-24 ${pathname === '/' ? 'active' : ''}`}>Portofolio</Link>
              </span>
            </div>
            <div>
              <ul className={`nav nav-pills collapse navbar-collapse d-lg-flex justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNav">
                <li className="nav-item">
                  <Link to="/about" className={`nav fw-500 text-lg lh-24 ${pathname === '/about' ? 'active' : ''}`}>About Me</Link>
                </li>
                <li className="nav-item">
                  <Link to="/education-skills" className={`nav fw-500 text-lg lh-24 ${pathname === '/education-skills' ? 'active' : ''}`}>Education & Skills</Link>
                </li>
                <li className="nav-item">
                  <Link to="/programming" className={`nav fw-500 text-lg lh-24 ${pathname === '/programming' ? 'active' : ''}`}>Programming</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects-applications" className={`nav fw-500 text-lg lh-24 ${pathname === '/projects-applications' ? 'active' : ''}`}>Project & Application</Link>
                </li>
              </ul>
              <button className="navbar-toggler d-lg-none" type="button" onClick={toggleMenu}>
                <i className="bi bi-list text-white" style={{fontSize: 20}}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`offcanvas offcanvas-end ${menuOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="test offcanvas-header py-3 px-4 d-flex align-items-center justify-content-end">
          <i className="bi bi-x text-white" style={{fontSize: 20}} onClick={toggleMenu} aria-label="Close"></i>
        </div>
        <div className="offcanvas-body bg-line-menu col gap-4">
          <ul className="navbar-nav justify-content-end flex-grow-1 gap-4">
            <li className="nav-item">
              <Link to="/about" className={`navi fw-500 text-lg lh-24 ${pathname === '/about' ? 'active' : ''}`}>About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/education-skills" className={`navi fw-500 text-lg lh-24 ${pathname === '/education-skills' ? 'active' : ''}`}>Education & Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/programming" className={`navi fw-500 text-lg lh-24 ${pathname === '/programming' ? 'active' : ''}`}>Programming</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects-applications" className={`navi fw-500 text-lg lh-24 ${pathname === '/projects-applications' ? 'active' : ''}`}>Project & Application</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
