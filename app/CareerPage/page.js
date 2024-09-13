import Image from "next/image";
import styles from "./career.module.scss";
import Link from "next/link";

const CareerPage = () => {
    const jobList = [
        {
          role: "Software Engineer",
          department: "Development",
          location: "London, Onsite",
        },
        {
          role: "UI / UX Designer",
          department: "Development",
          location: "London, Onsite",
        },
        {
          role: "Business Development",
          department: "Development",
          location: "London, Onsite",
        },
      ];
  return (
    <div className={styles.career}>
    <div className="heroSection">
        <div className="heroSectionContent">
          <h1>Careers</h1>
          <p>
            <Link href="/" legacyBehavior>
              <a>HOME</a>
            </Link>{" "}
            / CAREERS
          </p>
        </div>
      </div>
      <div className={styles.careerContainer}>
        <div className={styles.careerContent}>
          <h1>Great People Deserve Great Benefits</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={styles.careerCards}>
          <div className={styles.careerCard}>
            <Image src={"/image/icon1-1.png"} width={50} height={50} />
            <h3>Team Work</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing aneo elit. Ut elit
              tellus luctus nec.
            </p>
          </div>
          <div className={styles.careerCard}>
            <Image src={"/image/icon4-1.png"} width={50} height={50} />
            <h3>Flexible</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing aneo elit. Ut elit
              tellus luctus nec.
            </p>
          </div>
          <div className={styles.careerCard}>
            <Image src={"/image/icon5-1.png"} width={50} height={50} />
            <h3>Grow</h3>
            <p>
              Lorem ipsum dolor sit amet, consect adipiscing aneo elit. Ut elit
              tellus luctus nec.
            </p>
          </div>
        </div>
        <div className={styles.careerHiring}>
          <div className={styles.careerHireHead}>
            <h1>We are Hiring</h1>
          </div>
          <div className={styles.careerHireContent}>
      {jobList.map((job, index) => (
        <div key={index} className={styles.hiring}>
          <div className={styles.hireRole}>
            <p>{job.department}</p>
            <h3>{job.role}</h3>
          </div>
          <div className={styles.hireLocation}>
            <p>Location</p>
            <h3>{job.location}</h3>
          </div>
          <div className={styles.hireApply}>
            <p>Apply Now</p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
