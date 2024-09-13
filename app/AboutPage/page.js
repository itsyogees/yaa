import Image from "next/image";
import styles from "./about.module.scss";
import Link from "next/link";

const AboutPage = () => {
    const abouts = [
        {
          title: "Our Mission",
          description:
            "Our mission is to empower our clients to take control of their health and well-being. We believe in a holistic approach that not only addresses the symptoms but also focuses on the underlying causes of discomfort. Our goal is to restore your mobility, improve your quality of life, and enhance your overall wellness.",
          image: "/image/m-icon2.png",
        },
        {
          title: "Our Services",
          description:
            "Manual Therapy: Hands-on techniques to relieve pain and improve mobility. Fitness Rehabilitation: Customized exercise programs designed to restore strength and function.Pain Management: Evidence-based strategies to alleviate acute and chronic pain. Wellness Programs: Lifestyle and wellness coaching to promote long-term health.",
          image: "/image/m-icon.png",
        },
        {
            title: "Our Approach",
            description:
              "At YAA Physiotherapy Clinic, we pride ourselves on our client-centered approach. We take the time to listen to your concerns, assess your condition thoroughly, and collaborate with you to develop a tailored treatment plan. Our team is committed to providing compassionate care and ongoing support throughout your rehabilitation journey. ",
            image: "/image/m-icon2.png",
          },
      ];
    
  return (
    <div className={styles.about}>
      <div className="heroSection">
        <div className="heroSectionContent">
          <h1>ABOUT US</h1>
          <p>
            <Link href="/" legacyBehavior>
              <a>HOME</a>
            </Link>{" "}
            / ABOUT US
          </p>
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImg}>
            <Image src={"/image/about3 (1).jpg"} width={500} height={100} />
          </div>
          <div className={styles.aboutText}>
            <div className={styles.aboutTextContainer}>
              <div className={styles.aboutTextHead}>
                <p>ABOUT CLINIC</p>
              </div>
              <div className={styles.aboutTextTitle}>
                <h1>YAA Physiotherapy Clinic Since 2024</h1>
              </div>
              <div className={styles.aboutTextContent}>
                <p>
                  Welcome to YAA Physiotherapy Clinic, your premier destination
                  for pain management, mobility enhancement, and holistic
                  wellness. Our clinic is dedicated to helping individuals
                  achieve optimal physical health through personalized treatment
                  plans designed to meet each client's unique needs.
                </p>
                {/* <p>
                  At YAA Physiotherapy, we understand that pain and mobility
                  issues can significantly impact your daily life and overall
                  well-being. Our team of highly trained physiotherapists
                  specializes in assessing and treating a wide range of
                  conditions, including chronic pain, sports injuries,
                  post-operative rehabilitation, and age-related mobility
                  challenges.
                </p> */}
              </div>
              <div className={styles.aboutTextPoints}>
                <div className={styles.aboutTextPoint}>
                  <ul>
                    <li>Neuroconditions</li>
                    <li>Orthoconditions</li>
                  </ul>
                </div>
                <div className={styles.aboutTextPoint}>
                  <ul>
                    <li>Geriatric</li>
                    <li>Pediatric</li>
                  </ul>
                </div>
              </div>

              <div className={styles.aboutBtn}>
                <a href="/AboutPage" className={styles.moreAbout}>
                  More About
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles.aboutCards}>{abouts.map((about, index) => (
            <div key={index} className={styles.aboutCard}>
            <div className={styles.aboutHead}>
              <div className={styles.aboutIcon}>
                <Image
                  src={about.image}
                  width={35}
                  height={35}
                  alt={about.title}
                />
              </div>
              <div className={styles.aboutTitle}>
                <h3>{about.title}</h3>
              </div>
            </div>

            <p>{about.description}</p>
          
          </div>
             ))}
            </div>
    </div>
  );
};

export default AboutPage;
