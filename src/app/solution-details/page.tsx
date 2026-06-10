import { Breadcrumb } from "@/components/Breadcrumb";
import { SolutionDetailSticky } from "@/components/SolutionDetailSticky";
import Image from "next/image";
import Link from "next/link";

const solutionCategories = [
  "Scopd DLP with UEBA",
  "Vulnerability Scanner, Assessment & VAPT",
  "Employee Monitoring Solution",
  "Most Advanced Anti-Malware",
  "Backup & Disaster Recovery",
  "IAM | PAM | PSM & DBAM",
];

const highlights = [
  {
    icon: "fa-shield-halved",
    title: "Data Protection",
    text: "Prevent leakage across endpoints, users, cloud channels and business workflows.",
  },
  {
    icon: "fa-user-lock",
    title: "Access Control",
    text: "Strengthen IAM, PAM, PSM and database access management for critical systems.",
  },
  {
    icon: "fa-rotate",
    title: "Recovery Readiness",
    text: "Keep virtual, physical, cloud and SaaS workloads available with reliable backup planning.",
  },
  {
    icon: "fa-bug-slash",
    title: "Threat Prevention",
    text: "Reduce malware, ransomware, zero-day and vulnerability exposure with layered protection.",
  },
];

const deliverables = [
  "Infrastructure, user and data-flow assessment",
  "Solution mapping across endpoint, cloud, server and network layers",
  "Vendor product consultation, demo support and deployment planning",
  "Policy, access and backup configuration guidance",
  "Ongoing support for optimization, risk reduction and continuity",
];

const processSteps = [
  { step: "01", title: "Assess", text: "Review current tools, risks, data movement, users and compliance expectations." },
  { step: "02", title: "Recommend", text: "Select the right security, backup and data protection products for the environment." },
  { step: "03", title: "Deploy", text: "Coordinate implementation with practical controls, policy alignment and vendor support." },
  { step: "04", title: "Optimize", text: "Improve visibility, recoverability and protection posture as business needs change." },
];

const faqs = [
  {
    question: "Which solution should my organization start with?",
    answer:
      "Panzer IT starts with a risk and data-flow review, then recommends the right mix of DLP, IAM, PAM, monitoring, VAPT, anti-malware or backup controls.",
  },
  {
    question: "Can these solutions work with existing infrastructure?",
    answer:
      "Yes. The solution mix is planned around current endpoints, servers, cloud workloads, users, policies and operational constraints.",
  },
  {
    question: "Does Panzer IT support implementation?",
    answer:
      "Yes. Panzer IT can assist with consultation, demos, vendor coordination, deployment planning, configuration guidance and ongoing optimization.",
  },
];

export default function Page() {
  return (
    <>
      <SolutionDetailSticky />
      <Breadcrumb title="Solution Details" paths={[{ name: "Solutions", url: "/solution" }, { name: "Solution Details" }]} />

      <section className="panzer-solution-detail-section bg-light">
        <div className="container">
          <div className="panzer-solution-detail-layout">
            <aside className="panzer-solution-detail-sidebar" aria-label="Solution categories">
              <div className="panzer-solution-detail-sidebar-inner">
                <div className="panzer-solution-detail-side-card">
                  <h2>Solution Categories</h2>
                  <nav>
                    {solutionCategories.map((category, index) => (
                      <Link href="/contact" key={category} className={index === 0 ? "active" : undefined}>
                        <span>{category}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="panzer-solution-detail-help">
                  <span className="panzer-solution-detail-help-icon">
                    <i className="fa-solid fa-headset"></i>
                  </span>
                  <h3>Need Solution Guidance?</h3>
                  <p>Talk to Panzer IT for the right security, backup and data protection solution fit.</p>
                  <Link href="/contact">
                    <span>Contact Us</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </aside>

            <div className="panzer-solution-detail-content">
              <div className="panzer-solution-detail-hero">
                <div className="panzer-solution-detail-copy">
                  
                  <h2>Security, Backup And Data Protection Built Around Your Data</h2>
                  {/* <div className="panzer-solution-detail-actions">
                    <Link href="/contact">
                      <span>Discuss Requirement</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <Link href="/solution">
                      <span>View All Solutions</span>
                    </Link>
                  </div> */}
                </div>
                <div className="panzer-solution-detail-image">
                  <Image
                    src="/assets/images/service/lock.webp"
                    alt="Panzer IT security solution"
                    width={612}
                    height={459}
                    sizes="(max-width: 991px) 100vw, 43vw"
                  />
                </div>
                <p className="panzer-solution-detail-hero-text">
                  Panzer IT helps organizations secure sensitive data, control user access, prevent advanced threats and keep business systems
                  recoverable with a practical mix of proven security technologies.
                </p>
              </div>

              <div className="panzer-solution-detail-highlights">
                {highlights.map((item) => (
                  <article key={item.title}>
                    <span>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="panzer-solution-detail-overview">
                <div>
                  <h3>What This Solution Covers</h3>
                  <p>
                    The solution detail page now reflects Panzer IT&apos;s actual portfolio: DLP, UEBA, VAPT, employee monitoring,
                    anti-malware, backup and disaster recovery, IAM, PAM, PSM and DBAM.
                  </p>
                </div>
                <ul>
                  {deliverables.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panzer-solution-detail-process">
                <h3>Implementation Flow</h3>
                <div>
                  {processSteps.map((item) => (
                    <article key={item.step}>
                      <span>{item.step}</span>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="panzer-solution-detail-faq">
                <h3>Frequently Asked Questions</h3>
                {faqs.map((faq, index) => (
                  <details key={faq.question} open={index === 0}>
                    <summary>
                      <span>
                        {String(index + 1).padStart(2, "0")}. {faq.question}
                      </span>
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
