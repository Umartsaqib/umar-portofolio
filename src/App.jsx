import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './contents/main'
import About from './contents/about'
import Education from './contents/education-skills'
import ProjectApps from './contents/projects-applications'
import Programming from './contents/programming'
import '../src/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Main/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/education-skills" element={< Education/>} />
        <Route path="/projects-applications" element={< ProjectApps/>} />
        <Route path="/programming" element={< Programming/>} />
      </Routes>
    </Router>
  );
}

export default App;

