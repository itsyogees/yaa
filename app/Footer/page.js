import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link"; 
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <div className={styles.footerLogoHead}>
          <h2><Link href="/"><Image src={"/image/Component 3.png"} width={60} height={60} /> YAA Physiotherapy </Link></h2>
          </div>

          <p>
          Pain, mobility and wellness center.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkHead}>
            <h2>Company Link</h2>
          </div>
          <ul>
          <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/AboutPage">About Us</Link>
            </li>
            <li>
              <Link href="/ServicePage">Our Service</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact</Link>
            </li>
            <li>
              <Link href="/CareerPage">Career</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
            <div className={styles.contactInfoHead}>
                <h2>Contact</h2>
            </div>
            <p>No. B-10, Reddy Palayam Road,
Mugappair West, Chennai - 37.</p>
            <div className={styles.contactInfoHead}>
                <h2>Email-US</h2>
            </div>
            <p>yaaphysiotherapyclinic@gmail.com</p>
            <div className={styles.contactInfoHead}>
                <h2>Call Now</h2>
            </div>
            <p>+91 86104 43130</p>
            <p>+91 93635 86769</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
