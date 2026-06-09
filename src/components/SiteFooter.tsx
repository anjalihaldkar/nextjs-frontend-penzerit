import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <>
      <footer className="footer-section panzer-compact-footer panzer-image-footer z-1 br-30 xxl-br-0 pt-75 position-relative mx-30 mb-30 xxl-m-0 overflow-hidden">
        <div className="bg image mbm-screen">
          <Image width={1880} height={651} src="/assets/images/footer/hm1-bg01.webp" alt="" />
        </div>
        <div className="footer-top space">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 footer-brand">
                <div className="brand-info wow fadeInUp" data-wow-delay=".2s">
                  <div className="panzer-footer-brand-block">
                    <div className="logo">
                      <Image width={200} height={46} src="/assets/images/logo/logo.png" alt="Panzer IT Logo"  />
                    </div>
                  </div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <h3 className="title">EMAIL</h3>
                      <Link href="mailto:Sales@PanzerIT.com">
                        <i className="fa-sharp fa-light fa-envelope"></i> Sales@PanzerIT.com
                      </Link>
                    </div>
                    <div className="contact-item">
                      <h3 className="title">CALL US :</h3>
                      <Link href="tel:+919004655099">
                        <i className="flaticon-phone"></i> +91 90046 55099
                      </Link>
                    </div>
                    <div className="contact-item">
                      <h3 className="title">LOCATION</h3>
                      <div className="panzer-footer-addresses">
                        <Link href="/contact">
                          <i className="fa-solid fa-location-dot"></i>
                          <span>Delhi (NCR) | Mumbai | All India Network</span>
                        </Link>
                    
                      </div>
                    </div>
                    <div className="contact-item panzer-footer-social-item">
                      <h3 className="title">SOCIAL LINKS</h3>
                      <div className="social-links">
                        <Link href="#" className="social-icon" aria-label="Panzer IT on LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                        <Link href="#" className="social-icon" aria-label="Panzer IT on Twitter"><i className="fab fa-x-twitter"></i></Link>
                        <Link href="#" className="social-icon" aria-label="Panzer IT on Google"><i className="fab fa-google"></i></Link>
                      </div>
                    </div>
                  </div>
                  <div className="panzer-footer-newsletter">
                    <h3 className="title">SUBSCRIBE TO OUR NEWSLETTERS</h3>
                    <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
                      <div className="form-group">
                        <input type="email" name="email" className="email" defaultValue="" placeholder="Email Address" autoComplete="on" required={true} />
                        <button type="submit" aria-label="Subscribe">
                          <i className="far fa-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row gy-15">
              <div className="col-md-6 order-2 order-md-1">
                <div className="copyright wow fadeInUp" data-wow-delay=".3s">
                  <p className="mb-0">Copyright &reg; Panzer IT - Make IT Secure. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6 text-md-end order-1 order-md-2">
                <div className="footer-policy wow fadeInUp" data-wow-delay=".6s">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll To Top */}
      <div className="scrollToTop">
        <div className="arrowUp">
          <i className="fa-light fa-arrow-up"></i>
        </div>
        <div className="water panzer-scroll-water">
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use xlinkHref="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use xlinkHref="#wave"></use>
          </svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 20" className="panzer-wave-symbols">
            <symbol id="wave">
              <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#" className="panzer-wave-path"></path>
              <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#"></path>
              <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#"></path>
              <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#"></path>
            </symbol>
          </svg>
        </div>
      </div>
    </>
  );
}
