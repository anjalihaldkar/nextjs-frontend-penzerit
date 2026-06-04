import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";

export default function Page() {
  return (
    <>
<Breadcrumb title="Contact Us" paths={[{"name":"Contact Us"}]} />



              
              <section className="tv-contact-section inner space bg-light">
                  <div className="container">
                      <div className="row gy-30">
                          <div className="col-lg-5">
                              <div className="contact-content-wrap">
                                  
                                  <div className="title-wrap" data-wow-duration="1.5s" data-wow-delay=".4s">
                                      <div className="sub-title-2 text-theme">Contact Us</div>
                                      <h2 className="sec-title no-title-animation">Contact Panzer IT for <br /> cyber security, backup <br />and data  protection</h2>
                                      <p>Feel free to touchbase Panzer IT for any query, requirement, discussion or IT security consultancy.</p>
                                  </div>
                                  <div className="contact-info">
                                      <div className="contact-item">
                                          <div className="icon">
                                              <i className="fa-solid fa-location-dot"></i>
                                          </div>
                                          <div className="info">
                                              <h4 className="title">Office Locations</h4>
                                              <p>New Delhi: F-398, Sector 63, Noida (NCR) 201307</p>
                                              <p className="mb-0 mt-10">Mumbai: 203, Sai Jewel, Plot 26, Sector 35/I, Kharghar, Navi Mumbai, Maharashtra 410210</p>
                                          </div>
                                      </div>
                                      <div className="contact-item">
                                          <div className="icon">
                                              <i className="fa-light fa-circle-phone"></i>
                                          </div>
                                          <div className="info">
                                              <h4 className="title">Call Us Anytime</h4>
                                              <div className="content">
                                                  Sales & Enquiries: <Link href="tel:+919004655099">+91 90046 55099</Link><br />
                                                  Availability: Working 24x7 | World Wide Work
                                              </div>
                                          </div>
                                      </div>
                                      <div className="contact-item">
                                          <div className="icon">
                                              <i className="fa-light fa-envelope"></i>
                                          </div>
                                          <div className="info">
                                              <h4 className="title">Send E-Mail</h4>
                                              <div className="content">
                                                  <Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link><br />
                                                  GST New Delhi: 09AARFP6594R1ZS<br />
                                                  GST Mumbai: 27AARFP6594R1ZU
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="social-links">
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">Facebook</span>
                                              <span className="effect-1">Facebook</span>
                                          </span>
                                      </Link>
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">Twitter/X</span>
                                              <span className="effect-1">Twitter/X</span>
                                          </span>
                                      </Link>
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">LinkedIn</span>
                                              <span className="effect-1">LinkedIn</span>
                                          </span>
                                      </Link>
                                      <Link href="#">
                                          <span className="link-effect">
                                              <span className="effect-1">Instagram</span>
                                              <span className="effect-1">Instagram</span>
                                          </span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-7">
                              <div className="contact-form">
                                  <h2 className="title mt--5 mb-35">Discuss your requirement with Panzer IT</h2>
                                  <form id="contact_form" className="contact_form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                      <div className="form-grid">
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-slab-press fa-regular fa-user"></i></span>
                                              <input type="text" id="fullName" name="name" placeholder="Your Name*" required={true} autoComplete="on" />
                                          </div>
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-building"></i></span>
                                              <input type="text" id="companyName" name="company" placeholder="Your Company*" required={true} autoComplete="on" />
                                          </div>
                                      </div>
                                      <div className="form-grid">
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-location-dot"></i></span>
                                              <input type="text" id="city" name="city" placeholder="Your City" autoComplete="on" />
                                          </div>
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                                              <input type="email" id="userEmail" name="email" placeholder="Your Email*" required={true} autoComplete="on" />
                                          </div>
                                      </div>
                                      <div className="form-grid">
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                              <input type="text" id="phone" name="phone" placeholder="Your Mobile" required={true} autoComplete="off" />
                                          </div>
                                          <div className="form-group">
                                              <span className="icon"><i className="fa-regular fa-tag"></i></span>
                                              <input type="text" id="subject" name="subject" placeholder="Subject*" required={true} autoComplete="on" />
                                          </div>
                                      </div>
                                      <div className="form-group">
                                          <textarea id="msg" name="msg" placeholder="Your Message*" required={true}></textarea>
                                      </div>
                                      <div className="form-group terms">
                                          <input type="checkbox" id="terms" required={true} />
                                          <label htmlFor="terms">I agree to be contacted regarding my enquiry.</label>
                                      </div>
                                      <button type="submit" className="theme-btn  mt-30" data-loading-text="Please wait...">
                                          <span className="link-effect">
                                              <span className="effect-1">Submit Now</span>
                                              <span className="effect-1">Submit Now</span>
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
                                      </button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>




               
              <section className="tv-branch-section space bg-light">
                  <div className="container">
                      
                      <div className="title-wrap three text-center" data-wow-duration="1.5s" data-wow-delay=".4s">
                          <div className="sub-title-2 text-theme">Our Branches</div>
                          <h2 className="sec-title no-title-animation">Connect with our office locations</h2>
                          <p>Panzer IT is available for discussions, enquiries and consultancy support through its New Delhi and Mumbai offices.</p>
                      </div>
                      <div className="row gy-30">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="branch-single-box">
                                  <div className="branch-content">
                                      <div className="branch-header">
                                          <h4 className="location-name">New Delhi</h4>
                                          <p className="location-type">NOIDA (NCR) OFFICE</p>
                                      </div>
                                      <div className="divider"></div>
                                      <p className="address">F-398, Sector 63, Noida (NCR) 201307</p>
                                      <div className="phone"><Link href="tel:+919004655099">+91 90046 55099</Link></div>
                                      <div className="email"><Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link></div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="branch-single-box">
                                  <div className="branch-content">
                                      <div className="branch-header">
                                          <h4 className="location-name">Mumbai</h4>
                                          <p className="location-type">KHARGHAR OFFICE</p>
                                      </div>
                                      <div className="divider"></div>
                                      <p className="address">203, Sai Jewel, Plot 26, Sector 35/I, Kharghar, Navi Mumbai, Maharashtra 410210</p>
                                      <div className="phone"><Link href="tel:+919004655099">+91 90046 55099</Link></div>
                                      <div className="email"><Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link></div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <div className="branch-single-box">
                                  <div className="branch-content">
                                      <div className="branch-header">
                                          <h4 className="location-name">Support Desk</h4>
                                          <p className="location-type">WORKING 24x7</p>
                                      </div>
                                      <div className="divider"></div>
                                      <p className="address">World Wide Work support for queries, requirements, discussions and IT security consultancy.</p>
                                      <div className="phone"><Link href="tel:+919004655099">+91 90046 55099</Link></div>
                                      <div className="email"><Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
    </>
  );
}
