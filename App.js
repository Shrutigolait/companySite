import React, { useState } from "react";
import OurTeam from "./components/OurTeam";
import PersonalDetails from "./components/PersonalDetails";
import ContactUs from "./components/ContactUs";
; 

export default function App() {
  const [activeSection, setActiveSection] = useState("our-team");

  return (
    <div className="app-container">
      <header className="navbar">
        <h1 className="logo">LOGO</h1>
        <nav className="navbar-links">
          <button
            onClick={() => setActiveSection("our-team")}
            className={activeSection === "our-team" ? "active" : ""}
          >
            OUR TEAM
          </button>
          <button
            onClick={() => setActiveSection("personal-details")}
            className={activeSection === "personal-details" ? "active" : ""}
          >
            PERSONAL DETAILS
          </button>
          <button
            onClick={() => setActiveSection("contact-us")}
            className={activeSection === "contact-us" ? "active" : ""}
          >
            CONTACT US
          </button>
        </nav>
      </header>

      <main className="content">
        {activeSection === "our-team" && <OurTeam />}
        {activeSection === "personal-details" && <PersonalDetails />}
        {activeSection === "contact-us" && <ContactUs />}
      </main>
    </div>
  );
}