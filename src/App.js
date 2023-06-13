import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Brian Mintah's Coding Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a Computer Information Systems major from Wilkes University. Love to create things and I find joy in learning as it's a way to see the world evolve around you.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li><a href="#">Project 1</a></li>
            <li><a href="#">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
          </ul>
        </section>
        <section id="certifications">
          <h2>Certifications</h2>
          <ul>
            <li><a href="#">Certification 1</a></li>
            <li><a href="#">Certification 2</a></li>
            <li><a href="#">Certification 3</a></li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
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
      </main>
      <footer>
        <p>&copy; Brian's Portfolio 2023</p>
      </footer>
    </div>
  );
}

export default App;
