import React from 'react';

const TeamArea = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Chad Smith",
      position: "Manager",
      image: "/assets/img/team/01.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Malissa Fie",
      position: "Technician",
      image: "/assets/img/team/02.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 3,
      name: "Arron Rodri",
      position: "CEO & Founder",
      image: "/assets/img/team/03.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    },
    {
      id: 4,
      name: "Tony Pinto",
      position: "Mechanic",
      image: "/assets/img/team/04.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
      }
    }
  ];

  return (
    <div className="team-area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">Team</span>
              <h2 className="site-title">Meet Our <span>Team</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-3">
              <div className="team-item">
                <div className="team-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-social">
                  <a href={member.social.facebook}><i className="fab fa-facebook-f"></i></a>
                  <a href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                  <a href={member.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                  <a href={member.social.youtube}><i className="fab fa-youtube"></i></a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5><span>{member.name}</span></h5>
                    <span>{member.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamArea;