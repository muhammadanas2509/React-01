import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Text />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">BrandName</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <h1>Welcome to BrandName</h1>
      <p>Your solution for amazing web experiences.</p>
      <button className="cta-button">Get Started</button>
    </section>
  );
}
function Text(){
    return (
       <section className="sct">
         <h1>Heading</h1>
         <br />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing  </p>
       </section>
    )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 BrandName. All rights reserved.</p>
    </footer>
  );
}

export default App;