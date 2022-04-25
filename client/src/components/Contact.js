import React from "react";
import { FcPhoneAndroid, FcHome, FcBusinessContact } from "react-icons/fc";

const Contact = () => {
  return (
    <>
      <div className="contact_main">
        <div className="contact">
          <div className="contact_info_item">
            <FcPhoneAndroid style={{ fontSize: "35px " }} />
            <div className="contact_info_content">
              <div className="contact_heading">Phone</div>
              <div>+92 315 4654 897</div>
            </div>
          </div>
          <div className="contact_info_item">
            <FcBusinessContact  style={{ fontSize: "35px " }} />
            <div className="contact_info_content">
              <div className="contact_heading">Email</div>
              <div>mansoor21st@gmail.com</div>
            </div>
          </div>
          <div className="contact_info_item">
            <FcHome style={{ fontSize: "35px " }} />
            <div className="contact_info_content">
              <div className="contact_heading">Address</div>
              <div>Mominabad Orangi Town, Karachi</div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-4">
                  <div className="contact_form_title">Get in Touch</div>
                  <form id="contact_formID">
                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                      <input
                        type="text"
                        id="contact_form_name"
                        placeholder="Your Name"
                        required="true"
                      />

                      <input
                        type="email"
                        className="contact_form_email"
                        id="contact_form_email"
                        placeholder="Your Email"
                        required="true"
                      />

                      <input
                        type="number"
                        id="contact_form_phone"
                        placeholder="Your Phone Number"
                        required="true"
                      />
                    </div>

                    <div className="contact_form_text mt-4">
                      <textarea
                        className="text_field"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="contact_form_button mt-3">
                      <button type="submit" className="submitBtn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
