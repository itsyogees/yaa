"use client";
import React from "react";
import styles from "./home.module.scss";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>YAA Physiotherapy clinic</h1>
        <p>Pain, mobility and wellness center</p>
        <h1>ManualTherapy FitnessRehabilitation</h1>
        <div className={styles.heroButtons}>
          <Link href="/services" className={styles.primaryBtn}>
            Learn More
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const services = [
    {
      title: "Manual Therapy",
      description:
        "Manual therapy involves hands-on techniques used by therapists to assess and treat musculoskeletal pain and disability. It can include manipulation and mobilization of joints and soft tissues.",
      image: "/image/srvce-icn-1.png",
    },
    {
      title: "Fitness Rehabilitation",
      description:
        "Fitness rehabilitation refers to structured programs designed to restore physical function, strength, and flexibility after injury, surgery, or illness. ",
      image: "/image/srvce-icn-3.png",
    },
  ];

  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceCards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.serviceHead}>
              <div className={styles.serviceIcon}>
                <Image
                  src={service.image}
                  width={35}
                  height={35}
                  alt={service.title}
                />
              </div>
              <div className={styles.serviceTitle}>
                <h3>{service.title}</h3>
              </div>
            </div>

            <p>{service.description}</p>
            <div className={styles.servieReadmore}>
              <Link href="/ServicePage" className={styles.learnMoreBtn}>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
      "After my knee surgery, I was worried about getting back to my normal activities. The fitness rehabilitation program helped me regain strength and confidence. The trainers were knowledgeable and supportive, and I felt like I was making real progress every session. I’m now back to hiking and doing the things I love",
      position: "Marketing Manager",
    },
    {
      name: "Jane Smith",
      feedback:
        "I had been suffering from chronic back pain for years and tried everything with little success. A friend recommended manual therapy, and I was amazed at the results. The therapist identified the root cause of my pain and used effective techniques to relieve it. I can finally enjoy daily activities without discomfort.",
      position: "Software Engineer",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialCards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
            <span>{testimonial.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      {/* <CallToAction /> */}
    </div>
  );
};

export default Home;
