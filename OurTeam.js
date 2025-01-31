import React from "react";
import "../index.css"; 


import image1 from"../images/Image 2.jpg";
import image2 from"../images/Image 3.jpg";
import image3 from"../images/Image 4.jpg";
import image4 from"../images/Image 5.jpg";
import image5 from"../images/myphoto.jpg"

const teamMembers = [
  { id: 1, name: "John Doe", designation: "CEO", image: image1 },
  { id: 2, name: "Jane Smith", designation: "COO", image: image2 },
  { id: 3, name: "Michael Brown", designation: "Product Manager", image: image3 },
  { id: 4, name: "Emily Johnson", designation: "UX Researcher", image: image4 },
  { id: 4, name: "Meredith Allen", designation: "Marketing Executive", image: image5 }

];

const OurTeam = () => {
  return (
    <section className="section-container">
      <h2 className="section-title">Our Team</h2>

      <div className="paragraph-container">
        <p>We believe in innovation and teamwork.</p>
        <p>Our mission is to build the future of design and development.</p>
      </div>

      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="team-photo" />
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-designation">{member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;