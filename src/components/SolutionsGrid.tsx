import Link from "next/link";

const solutions = [
  {
    title: <>Scopd DLP <br />with UEBA</>,
    alt: "Data leak prevention dashboard",
    icon: "fa-shield-halved",
    text: "Protect sensitive data with user behavior analytics, policy-driven control and visibility across endpoints and business workflows.",
  },
  {
    title: <>Vulnerability Scanner, <br />Assessment & VAPT</>,
    alt: "Vulnerability assessment workspace",
    icon: "fa-triangle-exclamation",
    text: "Identify exploitable weaknesses before attackers do with guided vulnerability assessment and penetration testing support.",
  },
  {
    title: <>Employee Monitoring <br />Solution</>,
    alt: "Employee monitoring solution",
    icon: "fa-desktop",
    text: "Track risky behavior, improve accountability and support compliance with secure user activity monitoring for enterprise teams.",
  },
  {
    title: <>Most Advanced <br />Anti-Malware</>,
    alt: "Anti malware protection",
    icon: "fa-bolt",
    text: "Deploy next-generation anti-malware protection against ransomware, zero-day threats and known or unknown endpoint attacks.",
  },
  {
    title: <>Backup & Disaster <br />Recovery</>,
    alt: "Backup and disaster recovery",
    icon: "fa-database",
    text: "Keep virtual, physical, cloud and SaaS workloads recoverable with resilient backup strategy and business continuity planning.",
  },
  {
    title: <>Backup Solution <br />for All Platforms</>,
    alt: "Cross platform backup solution",
    icon: "fa-cloud-arrow-up",
    text: "Choose scalable backup for endpoints, servers and enterprise environments with flexible licensing and strong return on investment.",
  },
  {
    title: <>Data Leak Prevention <br />DLP</>,
    alt: "Data leak prevention solution",
    icon: "fa-lock",
    text: "Discover, monitor and prevent sensitive data exposure across endpoint, network and cloud channels before it leaves your control.",
  },
  {
    title: <>Advanced Threat Prevention <br />EDR | EPS</>,
    alt: "Advanced threat prevention",
    icon: "fa-shield-virus",
    text: "Improve detection and response with layered endpoint defense built for targeted attacks, APTs and modern persistent threats.",
  },
  {
    title: <>IAM | PAM | PSM <br />& DBAM</>,
    alt: "Identity and privileged access management",
    icon: "fa-user-lock",
    text: "Secure identities, privileged access and critical sessions with enterprise-grade access management and stronger control over sensitive systems.",
  },
];

export function SolutionsGrid() {
  return (
    <div className="row gy-30 panzer-solution-grid">
      {solutions.map((solution, index) => (
        <div key={solution.alt} className="col-xl-4 col-lg-6 col-md-6">
          <div className="tv-service-single-box panzer-solution-card wow fadeInUp" data-wow-delay={`${0.2 + index * 0.05}s`}>
            <div className="inner-box">
              <div className="panzer-solution-icon" aria-hidden="true">
                <i className={`fa-solid ${solution.icon}`}></i>
              </div>
              <span className="panzer-solution-number">{String(index + 1).padStart(2, "0")}</span>
              <h4 className="title">{solution.title}</h4>
              <p className="text">{solution.text}</p>
              <Link href="/solution-details" className="panzer-solution-learn">
                <span>Learn more</span>
                <span className="panzer-solution-learn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
