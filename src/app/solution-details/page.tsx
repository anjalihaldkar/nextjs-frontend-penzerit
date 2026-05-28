import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-solution-details">
<div className="page-wrapper bg-light">

              
              


              
               <SiteHeader />

              
              


              
              
              


              
              
              


              
              
              





              
              
              <Breadcrumb title="Solution Details" paths={[{"name":"Solutions","url":"/solution"},{"name":"Solution Details"}]} />






              
              
              <section className="services-details space bg-light">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-4 col-lg-4">
                              <div className="service-sidebar">

                                  <div className="sidebar-widget service-sidebar-single">
                                      <div className="widget-box category-list">
                                          <h4 className="sidebar-title"> Categories </h4>
                                          <div className="sidebar-service-list">
                                              <ul>
                                                  <li><Link href="#"> UI/UX Designing <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li className="current"><Link href="#"> Categories <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#"> Business Innovation <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#"> Online Cyber Security <i className="fas fa-arrow-right"></i></Link></li>
                                                  <li><Link href="#"> Road Transport <i className="fas fa-arrow-right"></i></Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="widget-box service-details-help bg-dark">
                                          <div className="bg image"><Image src="/assets/images/service/details-bg.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                          <div className="service-details-content">
                                              <div className="icon"><Image src="/assets/images/icons/contact.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                              <h2 className="help-title">Need Tech Service? <br /> Contact Us</h2>
                                              <p className="text">Professionally reintermediate technics Credibly pontificate turnkey</p>
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
                                              <Link href="#" className="theme-btn btn-style-1 d-grid">
                                                  <span className="btn-title"><Image className="mr-10" src="/assets/images/service/service-details-icon01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />Company Report 2025.pdf</span>
                                              </Link>
                                          </div>
                                          <div className="service-download-btn">
                                              <Link href="#" className="theme-btn btn-style-2 d-grid bg-dark">
                                                  <span className="btn-title"><Image className="mr-10" src="/assets/images/service/service-details-icon02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />Company Brochure.doc</span>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>

                          <div className="col-xl-8 col-lg-8">
                              <div className="services-details__content">
                                  <div className="image overlay-anim1">
                                      <Image className="br-10 w-100" src="/assets/images/service/details-img01.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                  </div>
                                  <h3 className="title-two">Web and Mobile UI/UX Designing</h3>
                                  <p>Phosfluorescently parallel task intermandated functionalities with virtual synergy. Uniquely syndicate products deliverables through viral core competencies. Phosfluorescently maximize process-centric modells principles relationships. Distinctively pursue diverse resources vis-a-vis pandemic innovation. Appropriately in corporate alignments for 24/365 systems.</p>
                                  <p className="mb-25">Authoritatively plagiarize bricks-and-clicks infrastructures for turnkey niche markets. Holisticly are main <br /> engage top-line web services whereas the fully tested intellectual capital. Compellingly incentivize creative <br /> optimal results without impactful relationships.</p>
                                  <div className="row gy-30 align-items-center">
                                  <div className="row service-details-box my-40  md-my-0 md-gy-30">
                                      <div className="col-lg-6 col-md-6">
                                          <div className="service-details-block">
                                              <div className="inner-box d-flex align-items-center">
                                                  <div className="icon mr-20"><Image src="/assets/images/service/alam.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                                  <h5 className="title my-0">Real Time Tracking <br /> Gaurantee</h5>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6">
                                          <div className="service-details-block">
                                              <div className="inner-box d-flex align-items-center">
                                                  <div className="icon bg-dark mr-20"><Image src="/assets/images/service/check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></div>
                                                  <h5 className="title my-0">Security Gaurantee <br /> for Cargo Service</h5>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h3 className="title">What Benifits?</h3>
                                  <p className="my-0">Authoritatively plagiarize bricks-and-clicks infrastructures for turnkey niche markets. Holisticly are main <br /> engage top-line web services whereas the fully tested intellectual capital. Compellingly incentivize creative <br /> optimal results without impactful relationships.</p>
                                  <div className="row md-gy-30 align-items-center mt-30 md-mt-0 mb-40 md-mb-0">
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="featured-list">
                                              <ul className="list-style-1">
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Completely provide access to goal </li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Globally transform competitive</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Monotonectally client&apos;s focused </li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="featured-list">
                                              <ul className="list-style-1">
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Completely provide access to goal </li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Globally transform competitive</li>
                                                  <li><span><Image src="/assets/images/service/details-check.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></span> Monotonectally client&apos;s focused </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>                            
                                  <div className="row md-gy-30 align-items-center">
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="details-image-box overlay-anim1">
                                              <Image className="img1 w-100 br-10" src="/assets/images/service/details-img02.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                          </div>
                                      </div>
                                      <div className="col-lg-6 col-md-6 col-sm-6">
                                          <div className="details-image-box overlay-anim1">
                                              <Image className="img1 w-100 br-10" src="/assets/images/service/details-img03.webp" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="innerpage mt-70 sm-mt-30">
                                      <h3 className="title mb-30 vxs-mb-25">Freequently Asked Question</h3>
                                      <div className="tv-faq-section">
                                          <ul className="accordion-box">
                                              <li className="accordion active-block">
                                                  <div className="acc-btn bg-white active">01. How to install marketing extension?
                                                      <div className="icon"></div>
                                                  </div>
                                                  <div className="acc-content active">
                                                      <div className="content bg-white">
                                                          <div className="text">Professionally reintermediate technically sound supply chains it extensive
                                                          Credibly pontificate turnkey inprocesses whereas marketplace compelling
                                                          relationships rather parallel communities</div>
                                                      </div>
                                                  </div>
                                              </li>

                                              <li className="accordion">
                                                  <div className="acc-btn bg-white">02. Do you support any online payments?
                                                      <div className="icon fa fa-angle-right"></div>
                                                  </div>
                                                  <div className="acc-content">
                                                      <div className="content bg-white">
                                                          <div className="text">Collaboratively disintermediate one to one main functionalities and long term best
                                                              term impact niche compellingly granular consultation commerce and client-centered
                                                              impact goal oriented partnerships and relationship</div>
                                                      </div>
                                                  </div>
                                              </li>

                                              <li className="accordion">
                                                  <div className="acc-btn bg-white">What type services you provides?
                                                      <div className="icon fa fa-angle-right"></div>
                                                  </div>
                                                  <div className="acc-content">
                                                      <div className="content bg-white">
                                                          <div className="text">Collaboratively disintermediate one to one main functionalities and long term best
                                                              term impact niche compellingly granular consultation commerce and client-centered
                                                              impact goal oriented partnerships and relationship</div>
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
