"use client";
import React, { useState, useEffect  } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link"; 
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navLogo}>
          <h2><Link href="/"><Image src={"/image/Component 3.png"} width={60} height={60} /> YAA Physiotherapy </Link></h2>
        </div>
        
        <div className={styles.navToggle} onClick={toggleMenu}>
          {isOpen ? <GrClose /> : <SlMenu />}  
        </div>
        <div
          className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}
        >
          <ul>
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/AboutPage" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link href="/ServicePage" onClick={toggleMenu}>Our Service</Link>
            </li>
            <li>
              <Link href="/ContactUs" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <Link href="/CareerPage" onClick={toggleMenu}>Career</Link>
            </li>
          </ul>
        </div>
        {/* <div className={styles.navSearch}>
  <FiSearch />
  <input type="text" placeholder="Search..." />
</div> */}

      </div>
    </nav>
  );
};

export default Navbar;
