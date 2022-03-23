import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentNav, setCurrentNav] = useState("home");
  const [navSelected, setNavSelected] = useState("home");

  return (
    <div className="vh-100 d-flex flex-column">
      <Header
        setCurrentNav={setCurrentNav}
        currentNav={currentNav}
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      ></Header>
      <main>
        {navSelected === "About" || navSelected === "home" ? (
          <About></About>
        ) : (
          <div></div>
        )}
        {navSelected === "Portfolio" || navSelected === "home" ? (
          <Portfolio></Portfolio>
        ) : (
          <div></div>
        )}
        {navSelected === "Contact" || navSelected === "home" ? (
          <ContactForm></ContactForm>
        ) : (
          <div></div>
        )}
        {navSelected === "Resume" || navSelected === "home" ? (
          <Resume></Resume>
        ) : (
          <div></div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;