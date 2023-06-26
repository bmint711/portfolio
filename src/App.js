import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import projectImage1 from './assignment1.jpg';
import projectImage2 from './assignment1-2.jpg';
import projectImage3 from './assignment1code.jpg';

function Home() {
  return (
    <div>
      <h2>Welcome to Brian Mintah's Coding Portfolio</h2>
      <p>Hello! I am a Computer Information Systems major from Wilkes University. I Love to create things and I find joy in learning as it's a way to see the world evolve around you.
        Here you will see an assortment of projects I have worked on throughout school and in my own time. Just like many projects it is a work in process, so please bear with me!!
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
        <li><Link to="/portfolio/projects/project1">Data pipeline project (inprogess)</Link></li>
        <li><Link to="/portfolio/projects/project2">Testing project (inprogress)</Link></li>
      </ul>
      <Routes>
        <Route path="/portfolio/projects/project1" element={<Pastdataproj />} />
      </Routes>
    </section>
  );
}
function InprogressProjects(){

}


//past projects
function Pastdataproj() {
  
  return (
    <div>
      <h3>Project 1 Details</h3>
      <p>Here is a collection of photos that display my first data analysis project ever, the first being a tuberculosis analysis. </p>
      <div className='container'>
      <img src={projectImage1} alt="Project 1" style={{width: '1000px'}}/>
      <img src={projectImage2} alt="Project part 2" style={{width: '1000px'}}/>
      <img src={projectImage3} alt="Project part 3" style={{width: '1000px'}}/>
      </div>
    </div>
  );
  };



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
      <Routes>
        <Route path="/past-projects/project-comp-1" element={<Pastdataproj />} />
      </Routes>
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
            <Route path="/portfolio/*" element={<Home />} />
            <Route path="/portfolio/projects/project1" element={<InprogressProjects />} />
            <Route path="/portfolio/certifications" element={<Certifications />} />
            <Route path="/past-projects/project-comp-1" element={<Pastdataproj />} />
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

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

export default App;
