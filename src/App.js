import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Document, Page } from 'react-pdf';
import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import './App.css';
import project1PDF from './Assignment 1.pdf';

function Home() {
  return (
    <div>
      <h2>Welcome to Brian Mintah's Coding Portfolio</h2>
      <p>Hello! I am a Computer Information Systems major from Wilkes University. I Love to create things and I find joy in learning as it's a way to see the world evolve around you.
        Here you will see an assortment of projects I have worked on throughout school and in my own time. Just like many projects it is a work in process, so please bear with me!
      </p>
      
      <Projects />
      
      <Certifications />
      
      <PastProjects />
      
      <Contact />

    </div>
  );
}

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        <li><Link to="/projects/project1">Project 1</Link></li>
        <li><Link to="/projects/project2">Project 2</Link></li>
        <li><Link to="/projects/project3">Project 3</Link></li>
      </ul>
      <Routes>
        <Route path="/projects/project1" element={<Project1Details />} />
      </Routes>
    </section>
  );
}

function Project1Details() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <div>
      <h2>Project 1 Details</h2>
      <Document file={project1PDF} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}



function Certifications() {
  return (
    <section>
      <h2>Certifications</h2>
      {/* Add certification content here */}
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function PastProjects() {
  return (
    <section>
      <h2>Past Projects</h2>
      <ul>
        <li><Link to="/past-projects/project-comp-1">Project Comp 1</Link></li>
        <li><Link to="/past-projects/project-comp-2">Project Comp 2</Link></li>
      </ul>
    </section>
  );
}


function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Brian Mintah's Coding Portfolio</h1>
          <nav>
            <ul>
              <li><Link to="/portfolio">Home</Link></li>
              <li><Link to="/portfolio/projects">Projects</Link></li>
              <li><Link to="/portfolio/certifications">Certifications</Link></li>
              <li><Link to="/portfolio/past-projects">Past Projects</Link></li>
              <li><Link to="/portfolio/contact">Contact</Link></li>
              <li><Link to="/portfolio/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/certifications" element={<Certifications />} />
            <Route path="/portfolio/past-projects" element={<PastProjects />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; Brian's Portfolio 2023</p>
        </footer>
      </div>
    </Router>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
