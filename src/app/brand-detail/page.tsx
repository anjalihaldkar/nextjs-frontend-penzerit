import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-brand-detail">
<div className="page-wrapper bg-light">

              
              


              
               <SiteHeader />

              
              


              
              
              


              
              
              


              
              
              





              
              
              <Breadcrumb title="Brand Details" paths={[{"name":"Brands","url":"/brand"},{"name":"Brand Details"}]} />






              
              
              <section className="services-details space bg-light">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-4 col-lg-4">
                              <div className="service-sidebar">

                                  <div className="sidebar-widget service-sidebar-single">
                                      <div className="widget-box category-list">
                                          <h4 className="sidebar-title"> Brands </h4>
                                          <div className="sidebar-service-list">
                                              <ul>
                                                  <li className="current"><Link href="#netand"> Netand IAM PAM <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#mirobase"> Mirobase Employee Monitoring <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#falcongaze"> FalconGaze SecureTower <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#somansa"> Somansa Endpoint DLP <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#secpoint"> SecPoint Penetrator <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#netop"> Netop Secure Remote Access <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#emsisoft"> Emsisoft Anti-Malware <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#vembu"> Vembu BDR Suite <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#acronis"> Acronis Backup Solution <i className="fas fa-arrow-right"></i></Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="widget-box service-details-help bg-dark">
                                          <div className="bg image"><Image src="/assets/images/service/details-bg.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                          <div className="service-details-content">
                                              <div className="icon"><Image src="/assets/images/icons/contact.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                              <h2 className="help-title">Need Brand Guidance? <br /> Contact Us</h2>
                                              <p className="text">Talk to Panzer IT for the right security, backup and data protection brand fit.</p>
                                              <div className="help-contact">
                                              <Link href="/contact" className="theme-btn br-30">
                                                  <span className="link-effect">
                                                      <span className="effect-1">Contact with Us</span>
                                                      <span className="effect-1">Contact with Us</span>
                                                  </span>
                                                  <span className="arrow-all">
                                                      <i>
                                                          <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                          <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                              <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                          </svg>
                                                      </i>
                                                  </span>
                                              </Link>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="widget-box service-download-box mt-4">
                                          <h4 className="sidebar-title"> Downloads </h4>
                                          <div className="service-download-btn mb-10">
                                              <Link href="https://panzerit.com/brands/" target="_blank" className="theme-btn btn-style-1 d-grid">
                                                  <span className="btn-title"><Image className="mr-10" src="/assets/images/service/service-details-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />PIT_Presentation.pptx</span>
                                              </Link>
                                          </div>
                                          <div className="service-download-btn">
                                              <Link href="/contact" className="theme-btn btn-style-2 d-grid bg-dark">
                                                  <span className="btn-title"><Image className="mr-10" src="/assets/images/service/service-details-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />Request Brand Consultation</span>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>

                          <div className="col-xl-8 col-lg-8">
                              <div className="services-details__content">
                                  <div className="image overlay-anim1">
                                      <Image className="br-10 w-100" src="/assets/images/about/cyber.webp" alt="Panzer IT security brands"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                  </div>
                                  <h3 className="title-two">Panzer IT Brand Portfolio</h3>
                                  <p>Panzer IT brings together specialist brands for identity and privileged access management, employee monitoring, data leak prevention, user behavior analytics, vulnerability assessment, secure remote access, anti-malware and backup protection.</p>
                                  <p className="mb-25">These brands help organizations protect sensitive data, improve cyber visibility, reduce operational risk and keep business systems available across endpoints, servers, cloud services and remote support environments.</p>
                                  <div className="row gy-30 align-items-center">
                                  <div className="row service-details-box my-40  md-my-0 md-gy-30">
                                      <div className="col-lg-6 col-md-6">
                                          <div className="service-details-block">
                                              <div className="inner-box d-flex align-items-center">
                                                  <div className="icon mr-20"><Image src="/assets/images/service/alam.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                                  <h5 className="title my-0">Security Brand <br />Portfolio</h5>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="service-details-block">
                                              <div className="inner-box d-flex align-items-center">
                                                  <div className="icon bg-dark mr-20"><Image src="/assets/images/service/check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                                  <h5 className="title my-0">Implementation <br />& Support</h5>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h3 className="title">Brand Capabilities</h3>
                                  <p className="my-0">Panzer IT aligns each brand to the customer's risk profile, infrastructure, compliance needs and continuity goals.</p>
                                  <div className="row md-gy-30 align-items-center mt-30 md-mt-0 mb-40 md-mb-0">
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="featured-list">
                                              <ul className="list-style-1">
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> IAM, PAM, PSM and DBAM</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Employee monitoring and UBA</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Endpoint DLP and insider threat visibility</li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="featured-list">
                                              <ul className="list-style-1">
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> VAPT and vulnerability management</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Secure remote access and control</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Anti-malware, backup and disaster recovery</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>                            
                                  <div className="row gy-30 align-items-stretch">
                                      <div className="col-lg-4 col-md-6" id="netand">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/01.png" alt="Netand IAM PAM" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Netand IAM PAM</h5>
                                                  <p className="mb-0">Integrated identity management, privileged access, session management and database access control for critical systems.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="mirobase">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/02.png" alt="Mirobase Employee Monitoring" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Mirobase Employee Monitoring</h5>
                                                  <p className="mb-0">Employee monitoring, productivity reporting and user activity visibility for insider-risk programs.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="falcongaze">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/03.webp" alt="FalconGaze SecureTower" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">FalconGaze SecureTower</h5>
                                                  <p className="mb-0">User behavior analytics and data security monitoring to detect policy violations and suspicious activity.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="somansa">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/04.webp" alt="Somansa Endpoint DLP" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Somansa Endpoint DLP</h5>
                                                  <p className="mb-0">Endpoint data loss prevention for monitoring, protecting and controlling sensitive business information.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="secpoint">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/05.png" alt="SecPoint Penetrator" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">SecPoint Penetrator</h5>
                                                  <p className="mb-0">Vulnerability scanning, assessment and penetration testing support for network and application risk.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="netop">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/06.png" alt="Netop Secure Remote Access" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Netop Secure Remote Access</h5>
                                                  <p className="mb-0">Secure remote access and remote control for support, administration and distributed IT operations.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="emsisoft">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/07.png" alt="Emsisoft Anti-Malware" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Emsisoft Anti-Malware</h5>
                                                  <p className="mb-0">Advanced anti-malware protection for endpoints, ransomware defense and modern threat prevention.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="vembu">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/08.png" alt="Vembu BDR Suite" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Vembu BDR Suite</h5>
                                                  <p className="mb-0">Backup and disaster recovery for virtual, physical, cloud and SaaS workloads.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-md-6" id="acronis">
                                          <div className="service-details-block h-100">
                                              <div className="inner-box d-block">
                                                  <Image src="/assets/images/brands/09.png" alt="Acronis Backup Solution" className="mb-20 panzer-brand-detail-logo"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <h5 className="title">Acronis Backup Solution</h5>
                                                  <p className="mb-0">Cyber protection, backup, disaster recovery and secure data access for business environments.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="innerpage mt-70 sm-mt-30">
                                      <h3 className="title mb-30 vxs-mb-25">Frequently Asked Questions</h3>
                                      <div className="tv-faq-section">
                                          <ul className="accordion-box">
                                              <li className="accordion active-block">
                                                  <div className="acc-btn bg-white active">01. How does Panzer IT choose the right brand?
                                                      <div className="icon"></div>
                                                  </div>
                                                  <div className="acc-content active">
                                                      <div className="content bg-white">
                                                          <div className="text">Panzer IT reviews the customer's infrastructure, data flow, users, compliance needs and security priorities before recommending the right brand or combination of brands.</div>
                                                      </div>
                                                  </div>
                                              </li>

                                              <li className="accordion">
                                                  <div className="acc-btn bg-white">02. Which security areas are covered?
                                                      <div className="icon fa fa-angle-right"></div>
                                                  </div>
                                                  <div className="acc-content">
                                                      <div className="content bg-white">
                                                          <div className="text">The portfolio covers IAM, PAM, endpoint DLP, employee monitoring, UBA, VAPT, secure remote access, anti-malware, backup and disaster recovery.</div>
                                                      </div>
                                                  </div>
                                              </li>

                                              <li className="accordion">
                                                  <div className="acc-btn bg-white">03. Can Panzer IT help after product selection?
                                                      <div className="icon fa fa-angle-right"></div>
                                                  </div>
                                                  <div className="acc-content">
                                                      <div className="content bg-white">
                                                          <div className="text">Yes. Panzer IT can support consultation, demos, implementation planning, product coordination and ongoing security solution guidance.</div>
                                                      </div>
                                                  </div>
                                              </li>
                                          </ul>                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
                  </div>
              </section>

              <SiteFooter />
          </div>
          


          
      	
    </div>
  );
}
