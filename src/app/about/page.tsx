import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
<section className="tv-choose-section space bg-light">
                  <div className="container">
                      <div className="row gy-30">
                          <div className="col-lg-12 col-xl-6">
                              <div className="tv-choose-left">
                                  
                                  <div className="title-wrap three" data-wow-duration="1.5s" data-wow-delay=".4s">
                                      <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>About Us</div>
                                      <h2 className="sec-title no-title-animation">Best IT Security Solution <br />Provider in India</h2>
                                  </div>
                                  <p className="mb-35">Panzer IT understands that Information Technology is all about data. The company focuses on making business data secure, accessible and available through advanced technologies from multiple vendors across the globe.</p>
                                  <div className="tv-choose-boxs">
                                      <div className="tv-choose-single-box two wow fadeInLeft" data-wow-delay=".3s">
                                          <div className="box-top-content mb-20">
                                              <div className="icon-top"><Image src="/assets/images/choose/hm1-icon01.webp" alt="" width={43} height={43} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                              <h4 className="title">Secure Your DATA</h4>
                                          </div>
                                          <p>Data is targeted on mobile, endpoint, server, cloud, data center and NAS environments, so every entry point must be protected.</p>
                                          <div className="icon bg-light">
                                              <i>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </div>
                                          
                                          <div className="choose-box box-1"></div>
                                          <div className="choose-box box-2"></div>
                                          <div className="choose-box box-3"></div>
                                          <div className="choose-box box-4"></div>
                                      </div>
                                      <div className="tv-choose-single-box wow fadeInRight" data-wow-delay=".5s">
                                          <div className="box-top-content mb-20">
                                              <div className="icon-top"><Image src="/assets/images/choose/hm1-icon02.webp" alt="" width={50} height={54} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                              <h4 className="title">360 Degree IT Solutions</h4>
                                          </div>
                                          <p>Endpoint security, firewall, backup, disaster recovery, NAS, SAN, cloud storage, virtualization, DLP, monitoring, VAPT, APT and EDR.</p>
                                          <div className="icon bg-light">
                                              <i>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                                  <svg width="10" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"></path>
                                                  </svg>
                                              </i>
                                          </div>
                                          
                                          <div className="choose-box box-1"></div>
                                          <div className="choose-box box-2"></div>
                                          <div className="choose-box box-3"></div>
                                          <div className="choose-box box-4"></div>
                                      </div>
                                  </div>
                                  <Link href="/contact" className="theme-btn mt-40 panzer-static-about-btn">
                                      <span className="link-effect">
                                          <span className="effect-1">Let&apos;s Make IT Secure</span>
                                          <span className="effect-1">Let&apos;s Make IT Secure</span>
                                      </span>
                                      <span className="arrow-all">
                                          <i>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                          </i>
                                      </span>
                                  </Link>
                              </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                             <div className="tv-choose-right-box panzer-about-data-wheel">
                                  <div className="data-item-hover">
                                      <figure className="image_right">
                                          <Image src="/assets/images/choose/about-1.webp" alt="Agency Image" width={612} height={408} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                      </figure>
                                  </div>

      							<div className="text_right">
      								<div className="content">
      									
      									<h3 className="title">Secure Data <br />Access</h3>
      									<div className="arrow"><Image src="/assets/images/choose/arrow.webp" alt="" width={58} height={159} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
      									<span className="year">Available</span>
      								</div>
      							</div>
      							<Link className="middle-btn" href="/contact"><i className="fa-solid fa-arrow-up-right"></i></Link>
      						</div>
                          </div>
                      </div>
                  </div>
                  <div className="p-bottom-left wow slideInUp"><Image src="/assets/images/choose/hm1-shape01.webp" alt="" width={375} height={514} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
              </section>

               
              <section className="tv-feature-section bg-light space-top pb-60">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="title-wrap text-center mb-50">
                                  <h2 className="sec-title no-title-animation">Why Choose Panzer IT</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row gy-30 about-feature-row">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="tv-feature-box wow fadeInLeft" data-wow-delay=".5s">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <i>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                          </i>
                                      </div>
                                  </div>
                                  <div className="logo mb-40"><Image width={62} height={62} src="/assets/images/feature/hm1-icon01.webp" alt="" /></div>
                                  <h2>150+ Man-Years <br /> of Security Experience</h2>
                                  <p>Over 150 man-years of IT security solutions experience supporting data protection, availability and cyber defense programs.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="tv-feature-box wow fadeInLeft" data-wow-delay=".7s">
                                  <div className="icon-top">
                                      <div className="icon">
                                          <i>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                              </svg>
                                          </i>
                                      </div>
                                  </div>
                                  <div className="logo mb-40"><Image width={62} height={62} src="/assets/images/feature/hm1-icon01.webp" alt="" /></div>
                                  <h2>Channel Partners <br /> Across India</h2>
                                  <p>Security software and services delivered through channel partners and associates across India.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="tv-feature-box bg-theme3 wow fadeInLeft" data-wow-delay=".9s">
                              <div className="icon-top">
                                  <div className="icon style2 bg-dark">
                                      <i>
                                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                          </svg>
                                          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z" fill="white"></path>
                                          </svg>
                                      </i>
                                  </div>
                              </div>
                              <div className="logo mb-40"><Image width={54} height={60} src="/assets/images/feature/hm1-icon02.webp" alt="" /></div>
                              <h2>Enterprise, Government, <br /> SMB and SOHO Focus</h2>
                              <p>Best security software and services for enterprises, government, SMB and SOHO organizations.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              
              <section className="panzer-horizontal-milestone space">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="title-wrap text-center">
                                  <h2 className="sec-title no-title-animation">Milestones</h2>
                              </div>
                          </div>
                      </div>
                      <div className="panzer-timeline">
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Founded to make IT secure with advanced technologies from global vendors.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2005</span>
                          </div>
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Expanded value-added distribution for IT security, backup and data protection solutions.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2010</span>
                          </div>
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Strengthened alliances across DLP, IAM, PAM, VAPT, EDR, backup and secure remote access.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2015</span>
                          </div>
                          <div className="panzer-timeline-item">
                              <div className="panzer-timeline-card">
                                  <p>Celebrating 20 years of helping organizations keep data secure, accessible and available.</p>
                              </div>
                              <span className="panzer-timeline-dot"><i className="fa-solid fa-award"></i></span>
                              <span className="panzer-timeline-year">2025</span>
                          </div>
                      </div>
                  </div>
              </section>

              
               <section className="tv-about-section style-3 space bg-light">
                  <div className="container">
                      <div className="row gy-30 align-items-center">
                          <div className="col-lg-5 col-md-12">
                              <div className="about-left">
                                  <div className="about-thumb">
                                      <Image className="br-20" src="/assets/images/about/cyber.webp" alt="" width={612} height={408} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                  </div>
                                  <div className="pt-50 pb-30 md-d-none">
                                      <div className="border"></div>
                                  </div>
                                  <div className="counter">
                                          <div className="about-counter">
                                              <div className="count-box"><span className="count-number odometer" data-count="150"></span></div>
                                              <div className="text">
                                                  <span>+</span>
                                                  <p>Man-Years of <br /> Security Experience</p>
                                              </div>
                                              
                                          </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-7 col-md-12">
                              <div className="about-content-wrap">
                                  
                                  <div className="title-wrap three">
                                      <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Mission Statement</div>
                                      <h2 className="sec-title no-title-animation">Continuous Secure Data <br /> Accessibility & Availability</h2>
                                      <p>Panzer IT believes data should be available to an organization every moment, from anywhere, with the right protection parameters. When data is not available when required, the purpose of IT is defeated.</p>
                                  </div>
                                  
                                  <div className="skills">
                                      
                                      <div className="skill-item">
                                          <div className="skill-header">
                                              <div className="skill-title">Secure Infrastructure</div>
                                          </div>
                                          <div className="skill-bar">
                                              <div className="bar-inner">
                                                  <div className="bar progress-line" data-width="95">
                                                      <div className="skill-percentage">
                                                          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="95">0</span>%
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="skill-item">
                                          <div className="skill-header">
                                              <div className="skill-title">Data Availability and Disaster Recovery</div>
                                          </div>
                                          <div className="skill-bar">
                                              <div className="bar-inner">
                                                  <div className="bar progress-line" data-width="92">
                                                      <div className="skill-percentage">
                                                          <div className="count-box"><span className="count-text" data-speed="3000" data-stop="92">0</span>%
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <Link href="/contact" className="theme-btn mt-40 br-30 panzer-static-about-btn">
                                      <span className="link-effect">
                                          <span className="effect-1">Contact Panzer IT</span>
                                          <span className="effect-1">Contact Panzer IT</span>
                                      </span>
                                      <span className="arrow-all">
                                          <i>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                              <svg width="16" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="#1053f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                          </i>
                                      </span>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>



                   
              


              
              



            
              
            




              
              
              <section className="panzer-core-values-section bg-light space">
<div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-7 text-center">
                              <div className="panzer-cv-label"><i className="fa-solid fa-circle-check"></i>Core Values</div>
                              <h2 className="panzer-cv-title">Core Values That Guide <br /> Panzer IT</h2>
                           
                          </div>
                      </div>
                      <div className="panzer-cv-grid">
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".1s">
                              <span className="panzer-cv-number">01</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-shield-halved"></i></div>
                              <h4 className="panzer-cv-card-title">Data First</h4>
                              <p className="panzer-cv-card-text">Every solution starts with the belief that Information Technology is all about protecting and enabling business data.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".2s">
                              <span className="panzer-cv-number">02</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-handshake"></i></div>
                              <h4 className="panzer-cv-card-title">Security Focus</h4>
                              <p className="panzer-cv-card-text">We focus on securing every entry point, including endpoints, network perimeter, mail, web, server, cloud and storage layers.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".3s">
                              <span className="panzer-cv-number">03</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-lightbulb"></i></div>
                              <h4 className="panzer-cv-card-title">Availability</h4>
                              <p className="panzer-cv-card-text">We value continuous access and availability so organizations can use their data whenever business demands it.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".4s">
                              <span className="panzer-cv-number">04</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-rocket"></i></div>
                              <h4 className="panzer-cv-card-title">Right Implementation</h4>
                              <p className="panzer-cv-card-text">Technology works best when it is implemented correctly, with practical planning, proper controls and efficient resource use.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".5s">
                              <span className="panzer-cv-number">05</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-people-group"></i></div>
                              <h4 className="panzer-cv-card-title">Partner Led</h4>
                              <p className="panzer-cv-card-text">We work through channel partners, associates and global technology vendors to deliver trusted security outcomes.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                          <div className="panzer-cv-card wow fadeInUp" data-wow-delay=".6s">
                              <span className="panzer-cv-number">06</span>
                              <div className="panzer-cv-icon"><i className="fa-solid fa-trophy"></i></div>
                              <h4 className="panzer-cv-card-title">Customer Segments</h4>
                              <p className="panzer-cv-card-text">We support enterprise, government, SMB and SOHO customers with security software and services suited to their needs.</p>
                              <span className="panzer-cv-card-line"></span>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}
