import Image from "next/image";
import styles from "./service.module.scss";
import Link from "next/link";

const ServicePage = () => {
  const services = [
    {
      title: "Neuroconditions",
      description:
        "This refers to conditions that affect the nervous system, including the brain, spinal cord, and nerves. Examples include Parkinson's disease, multiple sclerosis, epilepsy, and stroke.",
      image: "/image/srvce-icn-1.png",
    },
    {
      title: "Orthoconditions",
      description:
        "This likely refers to orthopedic conditions, which involve the musculoskeletal system. This can include injuries and diseases affecting bones, joints, muscles, ligaments, and tendons, such as fractures, arthritis, and spinal disorders.",
      image: "/image/srvce-icn-3.png",
    },
    {
      title: "Geriatric",
      description:
        "This pertains to the healthcare of older adults, focusing on the diagnosis, treatment, and prevention of age-related diseases and disabilities. Geriatric care often involves managing multiple chronic conditions and promoting overall health and quality of life in the elderly.",
      image: "/image/srvce-icn-6.png",
    },
    {
      title: "Pediatric",
      description:
        "This focuses on the medical care of infants, children, and adolescents. Pediatric healthcare addresses a wide range of conditions, from common illnesses to complex diseases, with considerations for growth and development.",
      image: "/image/srvce-icn-4.png",
    },
    {
      title: "Postoperative Care",
      description:
        " This involves the care provided to patients after they have undergone surgery. It includes monitoring recovery, managing pain, preventing complications, and facilitating rehabilitation.",
      image: "/image/srvce-icn5.png",
    },
  ];
  return (
    <div className={styles.service}>
       <div className="heroSection">
        <div className="heroSectionContent">
          <h1>Our Service</h1>
          <p>
            <Link href="/">HOME</Link> / SERVICE
          </p>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceContent}>
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
                  <Link href="/services" className={styles.learnMoreBtn}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
