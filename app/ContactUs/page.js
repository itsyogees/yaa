"use client";

import { useState } from "react";
import styles from "./contact.module.scss";
import Link from "next/link";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.contact}>
      <div className="heroSection">
        <div className="heroSectionContent">
          <h1>Contact</h1>
          <p>
            <Link href="/">HOME</Link> / CONTACT
          </p>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <div className={styles.contactContent}>
            <p>Make an Online Appointment Booking For Treatment Patients</p>
          </div>

          <form className={styles.contactFormContent} onSubmit={handleSubmit}>
            <div className={styles.formContent}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formContent}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone no"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                title="Please enter a valid phone number (10 digits)"
                required
              />
            </div>

            <div className={styles.formContent}>
              <textarea
                name="message"
                placeholder="Type Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formBtn}>
              <button type="submit">Send Now</button>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.contactCardContainer}>
        <div className={styles.contactCard}>
          <div className={styles.contactCardHead}>
            <h5>MEET US</h5>
            <span>
              <FaEnvelope />
            </span>
          </div>
          <div className={styles.contactCardDetails}>
            <h5>Email Address</h5>
            <p>yaaphysiotherapyclinic@gmail.com</p>
          </div>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactCardHead}>
            <h5>CALL NOW</h5>
            <span>
              <FaPhoneAlt />
            </span>
          </div>
          <div className={styles.contactCardDetails}>
            <h5>Phone Number</h5>
            <p>Phone : +91 93635 86769</p>
          </div>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactCardHead}>
            <h5>SEND NOW</h5>
            <span>
              <FaMapMarkerAlt />
            </span>
          </div>
          <div className={styles.contactCardDetails}>
            <h5>Our Locations</h5>
            <p>No. B-10, Reddy Palayam Road, Mugappair West, Chennai - 37.</p>
          </div>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.888338193032!2d80.171721!3d13.100955000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526392d7fdcf3b%3A0x821f2515e5fe352f!2sRAANA%20TECH%20FABS!5e0!3m2!1sen!2sin!4v1725878036139!5m2!1sen!2sin"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
