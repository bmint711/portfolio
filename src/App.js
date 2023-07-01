import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { useForm, ValidationError } from '@formspree/react';
import { projectImage1, projectImage2, projectImage3, databaseImage, databaseImage2, databaseImage3, certificateimage, pipeImage } from './imageImports';

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
      </ul>
      <Routes>
        <Route path="/portfolio/projects/project1" element={<Pastdataproj />} />
      </Routes>
    </section>
  );
}

//PIPELINE 
function InprogressProjects(){
  return (
    <div>
      <h3>Database pipeline progress</h3>
      <p>Pictures of the databases I plan on using along with the code working with. The plan is to build a data pipeline that ingests, processes, and stores brain scan image data from different sources.
         I plan on Using Apache Kafka, Apache Spark, MySQL, AWS Glue and matplotlib to build a robust pipeline
        that handles data ingestion, transformation, and storage in a data warehouse.</p>
      <div className='container'>
      <img src={databaseImage} alt="data 1" style={{width: '1000px'}}/>
      <img src={databaseImage2} alt="data part 2" style={{width: '1000px'}}/>
      <img src={databaseImage3} alt="data part 3" style={{width: '1000px'}}/>
      <img src={pipeImage} alt="pipeline code" style={{width: '1000px'}}/>
      </div>
    </div>
  );

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
      <h2>Certificates</h2>
      <ul>
        <li><Link to="/portfolio/certifications">Certification compilation</Link></li>
      </ul>
      <Routes>
        <Route path="/portfolio/projects/project1" element={<CertificationsContent />} />
      </Routes>
    </section>
  );
}

function CertificationsContent(){
  return (
    <div>
      <h3>Certificates</h3>
      <p>Certificate from Codecademy for learning how to write unit tests with Mocha.</p>
      <div className='container'>
      <img src={certificateimage} alt="testing certificate" style={{width: '1000px'}}/>
      </div>
    </div>
  );
}
function ContactForm() {
  const [state, handleSubmit] = useForm("mjvqbenb");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Your Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Subject</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <ContactForm />
    </section>
  );
}

function PastProjects() {
  return (
    <section>
      <h2>Past Projects</h2>
      <ul>
        <li><Link to="/past-projects/project-comp-1">Project Compilation</Link></li>
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
              <li><Link to="/portfolio/projects/project1">Projects</Link></li>
              <li><Link to="/portfolio/certifications">Certifications</Link></li>
              <li><Link to="/past-projects/project-comp-1">Past Projects</Link></li>
              <li><Link to="/portfolio/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/portfolio/*" element={<Home />} />
            <Route path="/portfolio/projects/project1" element={<InprogressProjects />} />
            <Route path="/portfolio/certifications" element={<CertificationsContent />} />
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
