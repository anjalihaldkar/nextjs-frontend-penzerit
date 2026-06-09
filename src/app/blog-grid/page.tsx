import { Breadcrumb } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
<Breadcrumb title="Latest Blog" paths={[{"name":"Latest Blog"}]} />

              
              <section className="tv-blog-section space bg-light">
                  <div className="container">
                      <div className="row gy-30">
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog01.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>16 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">Top 10 Most Popular <br /> Tools For Marketing</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                                 <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog02.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>17 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">Business Growing Tips for <br /> Sales Globally</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog03.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>29 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">Installation Sales Navigator <br />Extension on Chrome</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog-grid01.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>17 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">How to Install Droip into <br /> Local WP Server?</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog-grid02.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>18 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">10 Free SEO Marketing tools <br /> Growing Business</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog-grid03.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>19 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">Most popular Prompt for Sales<br />Growth in 2025</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                              <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>

                               <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog-grid01.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>17 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">How to Install Droip into <br /> Local WP Server?</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                               <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog-grid02.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>18 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">10 Free SEO Marketing tools <br /> Growing Business</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                                <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-6">
                              <article className="blog-single-box">
                                  <div className="inner-box">
                                      <div className="blog-image">
                                          <Image src="/assets/images/blog/blog-grid03.webp" alt="Blog Image" width={392} height={284} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                          <div className="category-tag"><span></span>19 Aug, 2025</div>
                                      </div>
                                      <div className="blog-content">
                                          <h4 className="title"><Link href="/blog-details">Most popular Prompt for Sales<br />Growth in 2025</Link></h4>
                                          <div className="pt-25 pb-30"><div className="border dark"></div></div>
                                          <div className="blog-meta">
                                              <Link href="/blog-details" className="continue-reading">Read More</Link>
                                                 <div className="blog-details__social-list">
                                                  <span>Share:</span>
                                                  <Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                                                  <Link href="https://x.com/"><i className="fa-brands fa-x-twitter"></i></Link>
                                                  <Link href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </article>
                          </div>
                      </div>
                      {/* <ul className="pagination-menu mt-80 vxs-mt-40 text-center">
                          <li><Link href="#" className="current">1</Link></li>
                          <li><Link href="#">2</Link></li>
                          <li><Link href="#">3</Link></li>
                          <li><Link href="#"><span className="icon fa-light fa-arrow-right-long"></span></Link></li>
                      </ul> */}
                  </div>
              </section>
    </>
  );
}
