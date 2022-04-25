import React from "react";

const About = () => {
  return (
    <>
      <div className="about-page">
        <form method="">
          <div className="row aboutBG">
            <div className="col-md-3">
              <div className="profile-img">
                <img src="/images/vectordp.jpg" alt="pic" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Mansoor Akhter</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  Ranking: <span>1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-items ">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-items ">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINKS:</p>
                  <a href="https://mansoorakhter.surge.sh/" target="_mansoor">
                    My Website
                  </a>
                  <br />
                  <a
                    href="https://www.behance.net/mansoorakhter1"
                    target="_mansoor"
                   >
                    Behance
                  </a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/mansoor-akhter-427a28193/"
                    target="_mansoor"
                  >
                    LinkedIn
                  </a>
                  <br />
                  <a href="https://github.com/MansoorAkhter" target="_mansoor">
                    GitHub
                  </a>
                  <br />
                  <a
                    href="https://www.upwork.com/freelancers/~016fa2f31d7ebc3082"
                    target="_mansoor"
                  >
                    upwork
                  </a>
                </div>
              </div>

              {/* right side data */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>#57443546922756</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Mansoor Akhter</p>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Animator</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Company</label>
                      </div>
                      <div className="col-md-6">
                        <p>Aaj News</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>Mansoor@gmail.com</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
