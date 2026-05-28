import Image from "next/image";
import Link from "next/link";

const solutions = [
  {
    title: <>Scopd DLP <br />with UEBA</>,
    image: "/assets/images/service/leak.webp",
    alt: "Data leak prevention dashboard",
    width: 612,
    height: 344,
    text: "Protect sensitive data with user behavior analytics, policy-driven control and visibility across endpoints and business workflows.",
  },
  {
    title: <>Vulnerability Scanner, <br />Assessment & VAPT</>,
    image: "/assets/images/service/sccanner.webp",
    alt: "Vulnerability assessment workspace",
    width: 643,
    height: 360,
    text: "Identify exploitable weaknesses before attackers do with guided vulnerability assessment and penetration testing support.",
  },
  {
    title: <>Employee Monitoring <br />Solution</>,
    image: "/assets/images/service/i-1.webp",
    alt: "Employee monitoring solution",
    width: 860,
    height: 556,
    text: "Track risky behavior, improve accountability and support compliance with secure user activity monitoring for enterprise teams.",
  },
  {
    title: <>Most Advanced <br />Anti-Malware</>,
    image: "/assets/images/service/malware.webp",
    alt: "Anti malware protection",
    width: 612,
    height: 459,
    text: "Deploy next-generation anti-malware protection against ransomware, zero-day threats and known or unknown endpoint attacks.",
  },
  {
    title: <>Backup & Disaster <br />Recovery</>,
    image: "/assets/images/service/backup.webp",
    alt: "Backup and disaster recovery",
    width: 567,
    height: 438,
    text: "Keep virtual, physical, cloud and SaaS workloads recoverable with resilient backup strategy and business continuity planning.",
  },
  {
    title: <>Backup Solution <br />for All Platforms</>,
    image: "/assets/images/service/recovery.webp",
    alt: "Cross platform backup solution",
    width: 563,
    height: 360,
    text: "Choose scalable backup for endpoints, servers and enterprise environments with flexible licensing and strong return on investment.",
  },
  {
    title: <>Data Leak Prevention <br />DLP</>,
    image: "/assets/images/service/pre.webp",
    alt: "Data leak prevention solution",
    width: 860,
    height: 401,
    text: "Discover, monitor and prevent sensitive data exposure across endpoint, network and cloud channels before it leaves your control.",
  },
  {
    title: <>Advanced Threat Prevention <br />EDR | EPS</>,
    image: "/assets/images/service/lock.webp",
    alt: "Advanced threat prevention",
    width: 696,
    height: 397,
    text: "Improve detection and response with layered endpoint defense built for targeted attacks, APTs and modern persistent threats.",
  },
  {
    title: <>IAM | PAM | PSM <br />& DBAM</>,
    image: "/assets/images/service/i-2.webp",
    alt: "Identity and privileged access management",
    width: 640,
    height: 480,
    text: "Secure identities, privileged access and critical sessions with enterprise-grade access management and stronger control over sensitive systems.",
  },
];

export function SolutionsGrid() {
  return (
    <div className="row gy-30">
      {solutions.map((solution, index) => (
        <div key={solution.alt} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
          <div className="tv-service-single-box wow fadeInUp" data-wow-delay={`${0.2 + index * 0.05}s`}>
            <div className="inner-box">
              <div className="solution-card-image">
                <Image
                  src={solution.image}
                  alt={solution.alt}
                  width={solution.width}
                  height={solution.height}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <h4 className="title">{solution.title}</h4>
              <p className="text pb-25">{solution.text}</p>
              <Link href="/solution-details" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                <span className="link-effect">
                  <span className="effect-1">READ MORE</span>
                  <span className="effect-1">READ MORE</span>
                </span>
                <i className="fa-solid fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
