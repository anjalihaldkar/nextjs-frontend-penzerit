import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
<Breadcrumb title="Brands" paths={[{"name":"Brands"}]} />



              


                
                
                <section className="tv-service-section space-bottom inner style-2 bg-light pt-100 panzer-brand-page">
                    <div className="tv-service-inner position-relative overflow-hidden mx-30 ml-mx-0">
                        <div className="container">
                            
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="title-wrap two white" data-wow-duration="2s" data-wow-delay=".0s">
                                        <div className="sub-title-2">Brands</div>
                                        <h2 className="sec-title text-dark no-title-animation">Trusted Security, Backup and Data Protection <br />Brands with Panzer IT</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row gy-30 mb-40">
                                <div className="col-lg-5">
                                    <div className="panzer-presentation-card wow fadeInUp" data-wow-delay=".15s">
                                        <div className="panzer-presentation-icon">
                                            <Image src="/assets/images/icons/pdf.png" alt="Presentation file" width={18} height={24} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </div>
                                        <h3 className="title text-dark">Panzer IT Presentation</h3>
                                        <p className="text mb-20">Explore Panzer IT&apos;s brand portfolio across data leak prevention, employee monitoring, vulnerability assessment, endpoint security, secure remote access and backup solutions.</p>
                                     
                                        <Link href="/resources" className="theme-btn panzer-static-read-btn">
                                            <span className="link-effect">
                                                <span className="effect-1">VIEW RESOURCE</span>
                                                <span className="effect-1">VIEW RESOURCE</span>
                                            </span>
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="panzer-presentation-card wow fadeInUp" data-wow-delay=".2s">
                                        <h3 className="title text-dark">Brand Focus Areas</h3>
                                        <p className="text mb-0">Panzer IT represents and supports specialist cyber security and business continuity brands for DLP, user behavior analytics, anti-malware, backup and disaster recovery, VAPT, IAM, PAM, secure remote access and endpoint protection programs.</p>
                                        <div className="panzer-tag-cloud">
                                            <span>#DLP</span>
                                            <span>#Data Leak Prevention</span>
                                            <span>#Employee Monitoring</span>
                                            <span>#User Behavior Analysis</span>
                                            <span>#Anti Malware</span>
                                            <span>#Backup & Disaster Recovery</span>
                                            <span>#VAPT</span>
                                            <span>#Remote Access</span>
                                            <span>#EDR</span>
                                            <span>#Endpoint Security</span>
                                            <span>#Risk Management</span>
                                            <span>#Compliance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gy-30">
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".2s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/01.png" alt="Netand IAM PAM" width={190} height={40} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Netand IAM PAM</h4>
                                            <p className="text pb-25">Identity, privileged access, privileged session and database access management for sensitive enterprise systems.</p>
                                            <Link href="/brand-detail#netand" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".25s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/02.png" alt="Mirobase Employee Monitoring" width={300} height={81} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Mirobase Employee Monitoring</h4>
                                            <p className="text pb-25">Employee monitoring and productivity enhancement technology for visibility into user activity and workplace risk.</p>
                                            <Link href="/brand-detail#mirobase" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".3s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/03.webp" alt="FalconGaze SecureTower UBA" width={258} height={45} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">FalconGaze SecureTower - UBA</h4>
                                            <p className="text pb-25">User behavior analytics, insider threat visibility, and governance support for data security teams, enabling proactive risk detection and response.</p>
                                            <Link href="/brand-detail#falcongaze" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".35s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/04.webp" alt="Somansa Endpoint Data Loss Prevention" width={300} height={63} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Somansa Endpoint DLP</h4>
                                            <p className="text pb-25">Endpoint data loss prevention for monitoring, protecting and controlling sensitive business information.</p>
                                            <Link href="/brand-detail#somansa" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".4s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/05.png" alt="SecPoint Penetrator Vulnerability Scanner" width={200} height={35} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">SecPoint Penetrator</h4>
                                            <p className="text pb-25">Vulnerability scanner, assessment and penetration testing platform for identifying network security gaps.</p>
                                            <Link href="/brand-detail#secpoint" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".45s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/06.png" alt="Netop Secure Remote Access" width={159} height={104} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Netop Secure Remote Access</h4>
                                            <p className="text pb-25">Secure remote control and remote access tools for support teams and distributed IT environments, ensuring secure connectivity.</p>
                                            <Link href="/brand-detail#netop" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".5s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/07.png" alt="Emsisoft Advance Malware Protection" width={301} height={89} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Emsisoft Anti-Malware</h4>
                                            <p className="text pb-25">Advanced malware protection for endpoint security, ransomware defense and modern threat prevention.</p>
                                            <Link href="/brand-detail#emsisoft" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".55s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/08.png" alt="Vembu BDR Suite" width={300} height={64} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Vembu BDR Suite</h4>
                                            <p className="text pb-25">Backup and disaster recovery for virtual, physical, cloud and SaaS workloads with business continuity support.</p>
                                            <Link href="/brand-detail#vembu" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                    <div className="tv-service-single-box wow fadeInUp" data-wow-delay=".6s">
                                        <div className="inner-box">
                                            <div className="solution-card-image panzer-brand-logo"><Image src="/assets/images/brands/09.png" alt="Acronis Backup Solution" width={190} height={36} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h4 className="title">Acronis Backup Solution</h4>
                                            <p className="text pb-25">Cyber protection and backup solution for resilient data protection across endpoints, servers and cloud assets.</p>
                                            <Link href="/brand-detail#acronis" className="theme-btn w-100 mt-40 panzer-static-read-btn">
                                                <span className="link-effect">
                                                    <span className="effect-1">READ MORE</span>
                                                    <span className="effect-1">READ MORE</span>
                                                </span>
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  );
}
