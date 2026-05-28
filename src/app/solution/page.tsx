import { Breadcrumb } from "@/components/Breadcrumb";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
<Breadcrumb title="Solutions" paths={[{"name":"Solutions"}]} />



              


                
                
                <section className="tv-service-section space-bottom inner style-2 bg-light pt-100 ">
                    <div className="tv-service-inner position-relative overflow-hidden mx-30 ml-mx-0">
                        <div className="container">
                            
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="title-wrap two white" data-wow-duration="2s" data-wow-delay=".0s">
                                        <div className="sub-title-2"><i className="fa-solid fa-circle-check"></i>Solutions</div>
                                        <h2 className="sec-title text-dark no-title-animation">Security, Backup and Data Protection <br />Solutions from Panzer IT</h2>
                                    </div>
                                </div>
                            </div>
                            <SolutionsGrid />
                        </div>
                    </div>
                </section>




                

            



                
                <section className="tv-process-section bg-light position-relative">
                    <div className="p-top-center z-1 wow slideInTop">
                        <Image src="/assets/images/process/hm1-shape01.png" alt="" width={1026} height={295} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="process-inner bg-theme3  mx-30 ml-mx-0 br_bl-30 br_br-30 ml-br-0  space  overflow-hidden xxl-br-0 position-relative">
                        <div className="container position-relative">
                            
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="process-title mt--25">
                                        <h2 className="text-white text-center">HOW WE WORK</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-30">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item wow fadeInRightBig" data-wow-delay=".2s">
                                        <h4 className="title-text">STEP 01</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon1.webp" alt="" width={40} height={42} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h3 className="title">Consult & Understand</h3>
                                            <p>We study your infrastructure, data flow, risks and compliance needs before recommending any solution.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item wow fadeInRightBig" data-wow-delay=".3s">
                                        <h4 className="title-text">STEP 02</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon2.webp" alt="" width={44} height={44} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h3 className="title">Assess & Recommend</h3>
                                            <p>Our team maps the right mix of security, backup and monitoring technologies for your environment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item  wow fadeInRightBig" data-wow-delay=".4s">
                                        <h4 className="title-text">STEP 03</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon3.webp" alt="" width={46} height={46} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h3 className="title">Deploy & Integrate</h3>
                                            <p>We implement the chosen controls with the right configuration, protection layers and operational alignment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="tv-process-item wow fadeInRightBig" data-wow-delay=".5s">
                                        <h4 className="title-text">STEP 04</h4>
                                        <div className="process-box">
                                            <div className="icon"><Image src="/assets/images/process/hm1-icon4.webp" alt="" width={35} height={45} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                            <h3 className="title">Support & Optimize</h3>
                                            <p>Continuous secure data accessibility and availability stays strong through ongoing tuning and support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



              



                
                
                <section className="tv-cta-section inner bg-light">
                    <div className="container border-top">
                        <div className="row gy-30 align-items-center">
                            <div className="col-lg-6">
                                <div className="cta-content-wrapper">
                                   <div className="title-wrap three" data-wow-duration="1.5s" data-wow-delay=".4s">
                                        <div className="sub-title-2 text-theme"><i className="fa-solid fa-circle-check"></i>Get In Touch</div>
                                        <h2 className="sec-title">Let&apos;s Collaborate with Us</h2>
                                        <p>Collaboratively supply bricks-and-clicks metrics for maintainable users from <br /> reinvent unique value for just in time consult.</p>
                                    </div>
                                    <Link href="/contact" className="theme-btn">
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
                            <div className="col-lg-6">
                                <div className="image-grid">
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="lines2">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="image-box">
                                        <div className="image-item"><Image src="/assets/images/service/details01.webp" alt="Person 1" width={127} height={127} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                        <div className="image-item"><Image src="/assets/images/service/details02.webp" alt="Person 3" width={127} height={127} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                        <div className="image-item"><Image src="/assets/images/service/details03.webp" alt="Person 4" width={127} height={127} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                        <div className="image-item"><Image src="/assets/images/service/details04.webp" alt="Person 5" width={127} height={127} sizes="100vw" style={{ width: "100%", height: "auto" }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  );
}
