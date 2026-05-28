import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="panzer-page panzer-page-blog-details">
<div className="page-wrapper bg-light">

              
              


              
               <SiteHeader />

              
              


              
              
              


              
              
              


              
              
              


              
              
              <Breadcrumb title="Blog List" paths={[{"name":"Blog List","url":"/"},{"name":"Blog Details"}]} />




              
              
              <section className="blog-details-section space bg-light">
                  <div className="container">
                      <div className="row gy-30 flex-column-reverse flex-lg-row">

                          <div className="col-xl-8 col-lg-8">
                              <div className="blog-details-left">
                                  <div className="blog-list-card style-2">
                                      <div className="image overlay-anim1">
                                          <Image src="/assets/images/blog/blog-thumb05.webp" alt="Meeting Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                      </div>
                                      <div className="card-content">
                                          <span className="category">Marketing</span>
                                          <h3 className="title">10 Free SEO Marketing Tools Growing Business</h3>
                                          <div className="author-info">
                                              <div className="author">
                                                  <Image src="/assets/images/blog/social-pr01.jpg" alt="Author Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                                  <span className="name"><span>By</span> Robert Aguilar</span>
                                              </div>
                                              <span className="date"><i className="icon-calender"></i> August 18, 2025</span>
                                          </div>
                                          <div className="pt-20 pb-25"><div className="border dark"></div></div>
                                          <p className="text">Conveniently extend vertical benefits and forward processes. Holisticly impact alternative e-commerce 
                                              through 24/365 paradigms. Enthusiastically enable goal-oriented maximize goal-oriented ideas whereas 
                                              interoperable platforms. Collaboratively enable integrated outsourcing whereas visionary mindshare. 
                                              Compellingly optimize market results via functionalized</p>
                                          <p>Authoritatively build turnkey products for wireless ROI. Seamlessly grow open-source imperative process
                                              leadership skills. Continually reinvent strategic leadership via resource sucking</p>
                                          <h3 className="title mt-45 mb-10"><Link href="/blog-details">Paid Marketing Campaigns</Link></h3>
                                          <p className="mb-35">Credibly myocardinate multidisciplinary supply chains for low-risk high-yield catalysts for change main
                                              leverage other's technically sound leadership vis-a-vis business deliverables. Progressively formulate
                                              models before synergistic processes. Interactively restore equity</p>
                                          <div className="blogs-quote">
                                              <p>Completely optimize standards compliant vortals for compelling portals engineer
                                                  highly efficient convergence with tactical mindshare intrinsiclye</p>
                                              <span className="name">Linda F. Collins</span>
                                          </div>
                                          <div className="image overlay-anim1">
                                              <Image src="/assets/images/blog/blog-thumb06.webp" alt="Meeting Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized />
                                          </div>
                                          <h3 className="title mt-30 mb-20"><Link href="/blog-details">3 Most Popular Marketing Tips</Link></h3>
                                          <p className="mb-25">Credibly myocardinate multidisciplinary supply chains for low-risk high-yield catalysts for change main
                                              leverage other's technically sound leadership vis-a-vis business deliverables. Progressively formulate
                                              models before synergistic processes. Interactively restore equity</p>
                                          <div className="featured-list-box">
                                              <div className="featured-list">
                                                  <ul className="list-style-2">
                                                      <li> Appropriately synergize real-time leadership </li>
                                                      <li> Rapidiously simplify extensive to data </li>
                                                      <li> Synergistically envisioneer go forward </li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="blog-details__bottom">
                                              <div className="blog-details__tags">
                                                  <span>Posted In :</span>
                                                  <ul className="blog-details__tags">
                                                      <li>BUSINESS</li>
                                                      <li>FINANCE</li>
                                                  </ul>
                                              </div>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="comment-one">
                                      <h3 className="comment-one__title">1 Comment</h3>
                                      <div className="comment-one__single">
                                          <div className="comment-one__image"> <Image src="/assets/images/blog/comment-1.png" alt=""  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /> </div>
                                          <div className="comment-one__content">
                                              <div className="title"><h5>James Noel</h5><span>August 18, 2025</span></div>
                                              <p>Globally supply resource maximizing total linkage whereas seamless experiences
                                                  resource sucking outsourcing before viral e-services</p>
                                              <Link href="/blog-details" className="comment-one__btn">
                                                  <i className="fa-regular fa-share"></i><span className="btn-title">Reply</span>
                                              </Link>
                                          </div>
                                      </div>
                                      <div className="comment-form">
                                          <h3 className="comment-one__title">Add a Comment</h3>
                                          <form id="comment-form" className="comment-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                              <div className="row">
                                                  <div className="mb-20">
                                                      <textarea name="form_message" className="form-control" rows={6} placeholder="Write Comments..."></textarea>
                                                  </div>
                                                  <div className="col-sm-6">
                                                      <div className="mb-20">
                                                          <input name="form_name" className="form-control" type="text" placeholder="Your Name *" required={true} />
                                                      </div>
                                                  </div>
                                                  <div className="col-sm-6">
                                                      <div className="mb-20">
                                                          <input name="form_email" className="form-control" type="email" placeholder="Enter E-Mail *" required={true} />
                                                      </div>
                                                  </div>
                                                  <div className="mb-25">
                                                      <input name="form_subject" className="form-control" type="text" placeholder="Subject *" required={true} />
                                                  </div>
                                              </div>
                                              <div className="mb-0">
                                                  <div className="form-group remember-check mb-0">
                                                      <input type="checkbox" id="remember-me" required={true} />
                                                      <label htmlFor="remember-me">Save my name & email in the Browser</label>
                                                  </div>
                                                  <button type="submit" className="theme-btn error bg-theme mt-25" data-loading-text="Please wait...">
                                                      <span className="link-effect">
                                                          <span className="btn-title">Submit Now</span>
                                                      </span><i className="fa-regular fa-arrow-right-long"></i>
                                                  </button>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-xl-4 col-lg-4">
                              <div className="sidebar-widget blog-sidebar pl-15 lg-pl-0">
                                  <div className="widget-box sidebar-search">
                                      <form action="#" className="sidebar__search-form">
                                          <input type="search" name="search" placeholder="Search..." required={true} />
                                          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                      </form>
                                  </div>
                                  <div className="sidebar-category-list">
                                      <h4 className="sidebar-title"> Category </h4>
                                      <div className="widget-box">
                                          <ul className="categories">
                                              <li><Link href="/blog-grid">Finance Consulting <span>(5)</span></Link></li>
                                              <li><Link href="/blog-grid">Business Consulting <span>(3)</span></Link></li>
                                              <li><Link href="/blog-grid">Maketing <span>(6)</span></Link></li>
                                              <li><Link href="/blog-grid">Technology <span>(4)</span></Link></li>
                                              <li><Link href="/blog-grid">IT Solutions <span>(2)</span></Link></li>
                                              <li><Link href="/blog-grid">Artificial Intelligence <span>(3)</span></Link></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="sidebar-latest-posts">
                                      <h4 className="sidebar-title"> Latest Posts </h4>
                                      <div className="widget-box">
                                          <div className="latest-posts">
                                              <div className="post">
                                                  <Link href="#"><Image src="/assets/images/blog/latest-details01.webp" alt="Post Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                                                  <div className="post-content">
                                                      <Link href="#">How to Install Droip into Local WP Server?</Link>
                                                      <p>August 17, 2025</p>
                                                  </div>
                                              </div>
                                              <div className="post">
                                                  <Link href="#"><Image src="/assets/images/blog/latest-details02.webp" alt="Post Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                                                  <div className="post-content">
                                                      <Link href="#">10 Free SEO Marketing tools Growing Business</Link>
                                                      <p>August 18, 2025</p>
                                                  </div>
                                              </div>
                                              <div className="post">
                                                  <Link href="#"><Image src="/assets/images/blog/latest-details03.webp" alt="Post Image"  width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} unoptimized /></Link>
                                                  <div className="post-content">
                                                      <Link href="#">Most popular Promt for Sales Growth in 2025</Link>
                                                      <p>August 19, 2025</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="sidebar-tags">
                                      <h4 className="sidebar-title"> Latest Posts </h4>
                                      <div className="widget-box">
                                          <div className="tag-list">
                                              <span className="tag">BUSINESS</span>
                                              <span className="tag active">FINANCE</span>
                                              <span className="tag">DATA</span>
                                              <span className="tag">CORPORATE</span>
                                              <span className="tag">CONSULTING</span>
                                              <span className="tag">MARKETING</span>
                                              <span className="tag">TRADING</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="sidebar-newsletter">
                                      <h4 className="sidebar-title"> Newsletter </h4>
                                      <div className="widget-box mb-0">
                                          <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                                              <div className="form-group">
                                                  <input type="email" name="email" className="email mb-0" placeholder="Enter email" autoComplete="on" required={true} />
                                                  <button type="submit">
                                                      <i className="far fa-paper-plane"></i>
                                                      <span className="btn-title"></span>
                                                  </button>
                                              </div>
                                          </form>
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
