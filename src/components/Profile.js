import React from "react";
import "../App.css"; // Import your custom CSS file
import profileImage from "../assets/profile.jpeg"; // Import the profile image

const Profile = () => {
  return (
    <React.Fragment>
      <section className="profile-section-intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">Profile</p>
              <p className="fst-italic text-light">
                Welcome to the profile page
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="profile-section mt-3">
        <div className="container">
          <div className="row">
            <div className="card custom-card">
              {" "}
              {/* Added custom-card class */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={profileImage}
                      className="img-fluid rounded-circle"
                      alt="Profile"
                    />
                  </div>
                  <div className="col-md-8 ">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action custom-list">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam blanditiis quibusdam facere. Incidunt velit labore
                        aliquam, cum eos harum qui nam aliquid aut recusandae
                        dignissimos. Consectetur fuga reprehenderit quas hic
                        tenetur cum. Ea ipsum adipisci omnis exercitationem,
                        corrupti quos labore porro corporis vel numquam aliquid
                        consectetur necessitatibus! Inventore, eos nostrum.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Profile;
