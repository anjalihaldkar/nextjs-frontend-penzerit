import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    id: "netand",
    logo: "/assets/images/brands/01.png",
    width: 190,
    height: 40,
    title: "Netand IAM PAM",
    text: "Integrated identity management, privileged access, session management and database access control for critical systems.",
  },
  {
    id: "mirobase",
    logo: "/assets/images/brands/02.png",
    width: 300,
    height: 81,
    title: "Mirobase Employee Monitoring",
    text: "Employee monitoring, productivity reporting and user activity visibility for insider-risk programs.",
  },
  {
    id: "falcongaze",
    logo: "/assets/images/brands/03.webp",
    width: 258,
    height: 45,
    title: "FalconGaze SecureTower",
    text: "User behavior analytics and data security monitoring to detect policy violations and suspicious activity.",
  },
  {
    id: "somansa",
    logo: "/assets/images/brands/04.webp",
    width: 300,
    height: 63,
    title: "Somansa Endpoint DLP",
    text: "Endpoint data loss prevention for monitoring, protecting and controlling sensitive business information.",
  },
  {
    id: "secpoint",
    logo: "/assets/images/brands/05.png",
    width: 200,
    height: 35,
    title: "SecPoint Penetrator",
    text: "Vulnerability scanning, assessment and penetration testing support for network and application risk.",
  },
  {
    id: "netop",
    logo: "/assets/images/brands/06.png",
    width: 159,
    height: 104,
    title: "Netop Secure Remote Access",
    text: "Secure remote access and remote control for support, administration and distributed IT operations.",
  },
  {
    id: "emsisoft",
    logo: "/assets/images/brands/07.png",
    width: 301,
    height: 89,
    title: "Emsisoft Anti-Malware",
    text: "Advanced anti-malware protection for endpoints, ransomware defense and modern threat prevention.",
  },
  {
    id: "vembu",
    logo: "/assets/images/brands/08.png",
    width: 300,
    height: 64,
    title: "Vembu BDR Suite",
    text: "Backup and disaster recovery for virtual, physical, cloud and SaaS workloads.",
  },
  {
    id: "acronis",
    logo: "/assets/images/brands/09.png",
    width: 190,
    height: 36,
    title: "Acronis Backup Solution",
    text: "Cyber protection, backup, disaster recovery and secure data access for business environments.",
  },
];

const capabilities = [
  "IAM, PAM, PSM and DBAM",
  "Employee monitoring and UBA",
  "Endpoint DLP and insider threat visibility",
  "VAPT and vulnerability management",
  "Secure remote access and control",
  "Anti-malware, backup and disaster recovery",
];

const faqs = [
  {
    question: "How does Panzer IT choose the right brand?",
    answer:
      "Panzer IT reviews the customer infrastructure, data flow, users, compliance needs and security priorities before recommending the right brand or combination of brands.",
  },
  {
    question: "Which security areas are covered?",
    answer:
      "The portfolio covers IAM, PAM, endpoint DLP, employee monitoring, UBA, VAPT, secure remote access, anti-malware, backup and disaster recovery.",
  },
  {
    question: "Can Panzer IT help after product selection?",
    answer:
      "Yes. Panzer IT can support consultation, demos, implementation planning, product coordination and ongoing security solution guidance.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumb title="Brand Details" paths={[{ name: "Brands", url: "/brand" }, { name: "Brand Details" }]} />

      <section className="panzer-brand-detail-section bg-light">
        <div className="container">
          <div className="panzer-brand-detail-layout">
            <aside className="panzer-brand-detail-sidebar" aria-label="Brand navigation">
              <div className="panzer-brand-detail-side-card">
                <h2>Brands</h2>
                <nav>
                  {brands.map((brand) => (
                    <Link href={`#${brand.id}`} key={brand.id}>
                      <span>{brand.title}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="panzer-brand-detail-help">
                <span className="panzer-brand-detail-help-icon">
                  <i className="fa-solid fa-headset"></i>
                </span>
                <h3>Need Brand Guidance?</h3>
                <p>Talk to Panzer IT for the right security, backup and data protection brand fit.</p>
                <Link href="/contact">
                  <span>Contact Us</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </aside>

            <div className="panzer-brand-detail-content">
              <div className="panzer-brand-detail-hero">
                <div className="panzer-brand-detail-hero-copy">
                  <div className="panzer-brand-detail-pill">Panzer IT Portfolio</div>
                  <h2>Security, Backup And Data Protection Brands</h2>
                  <p>
                    Panzer IT brings together specialist brands for identity and privileged access management, employee monitoring,
                    data leak prevention, user behavior analytics, vulnerability assessment, secure remote access, anti-malware and backup protection.
                  </p>
                </div>
                <div className="panzer-brand-detail-hero-image">
                  <Image src="/assets/images/about/cyber.webp" alt="Panzer IT security brands" width={612} height={408} sizes="(max-width: 991px) 100vw, 46vw" />
                </div>
              </div>

          

              <div className="panzer-brand-detail-capabilities">
                <h3>Brand Capabilities</h3>
                <p>Panzer IT aligns each brand to the customer&apos;s risk profile, infrastructure, compliance needs and continuity goals.</p>
                <div>
                  {capabilities.map((item) => (
                    <span key={item}>
                      <i className="fa-solid fa-check"></i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="panzer-brand-detail-faq">
                <h3>Frequently Asked Questions</h3>
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary>
                      <span>{String(index + 1).padStart(2, "0")}. {faq.question}</span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
