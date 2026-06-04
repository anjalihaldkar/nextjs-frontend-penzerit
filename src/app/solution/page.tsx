import { Breadcrumb } from "@/components/Breadcrumb";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import Image from "next/image";

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
                                        <div className="sub-title-2">cSolutions</div>
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



              



                
                
                <section className="tv-contact-section style-4 z-1">
                    <div className="tv-contact-inner space position-relative overflow-hidden bg-light2 mx-20 ml-mx-0">
                        <div className="container">
                            <div className="row gy-30 contact-wrapper align-items-stretch">
                                <div className="col-lg-6">
                                    <div className="contact-right-content">
                                        <div className="title-wrap text-center">
                                            <div className="sub-title-2 text-theme">Contact
                                                Us</div>
                                            <h2 className="sec-title no-title-animation">Feel free to touch base <br /> with Panzer IT</h2>
                                        </div>
                                        <div className="contact-form style-4">
                                            <form id="solution_contact_form" className="contact_form" action="#" method="post">
                                                <div className="form-grid">
                                                    <div className="form-group">
                                                        <input type="text" id="solutionFullName" name="name" placeholder="Your Name" required={true} autoComplete="on" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" id="solutionUserEmail" name="email" placeholder="E-Mail" required={true} autoComplete="on" />
                                                    </div>
                                                </div>
                                                <div className="form-grid">
                                                    <div className="form-group">
                                                        <select className="custom-select" id="solutionService" name="service" autoComplete="off" defaultValue="">
                                                            <option value="" disabled={true}>Select Service</option>
                                                            <option value="scopd-dlp">Scopd DLP with UEBA</option>
                                                            <option value="backup-recovery">Backup & Disaster Recovery</option>
                                                            <option value="dlp">Data Leak Prevention - DLP</option>
                                                            <option value="vapt">Vulnerability Scanner, Assessment & VAPT</option>
                                                            <option value="employee-monitoring">Employee Monitoring</option>
                                                            <option value="edr">Advance Threat Prevention | EDR | EPS</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea id="solutionMsg" name="msg" placeholder="Write Message" required={true}></textarea>
                                                </div>
                                                <button type="submit" className="theme-btn panzer-static-send-btn" data-loading-text="Please wait...">
                                                    <span className="btn-title mr-10">Send Message</span>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-left-thumb wow img-anim-right data-item-hover overflow-hidden">
                                        <figure className="panzer-static-img" data-style="01" data-intensity="0.2" data-speedin="1" data-speedout="1">
                                            <Image src="/assets/images/hero/deal.png" alt="Business deal discussion" width={1254} height={1254} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  );
}
