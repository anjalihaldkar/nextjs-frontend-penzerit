"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const solutionLinks = [
  "Scopd DLP with UEBA",
  "Vulnerability Scanner, Assessment & Penetration Testing",
  "Employee Monitoring Solution",
  "Most Advance Anti-Malware",
  "Backup & Disaster Recovery",
  "Backup Solution",
  "Data Leak Prevention - DLP",
  "Advance Threat Prevention | EDR | EPS",
];

const brandLinks = [
  { label: "Netand IAM PAM", href: "/brand-detail#netand" },
  { label: "Mirobase Employee Monitoring", href: "/brand-detail#mirobase" },
  { label: "FalconGaze SecureTower - UBA", href: "/brand-detail#falcongaze" },
  { label: "Somansa Endpoint Data Loss Prevention", href: "/brand-detail#somansa" },
  { label: "SecPoint Penetrator Vulnerability Scanner & Assessment", href: "/brand-detail#secpoint" },
  { label: "Netop - Secure Remote Access", href: "/brand-detail#netop" },
  { label: "Emsisoft - Advance Malware Protection", href: "/brand-detail#emsisoft" },
  { label: "Vembu BDR Suite", href: "/brand-detail#vembu" },
  { label: "Acronis Backup Solution", href: "/brand-detail#acronis" },
];

function ExpandToggle({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <span
      className="mean-expand-class"
      aria-expanded={isOpen}
      role="button"
      tabIndex={0}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onToggle();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
    />
  );
}

function MainNavigation({
  className = "navigation",
  mobile = false,
  openSubmenu,
  onToggleSubmenu,
  onNavigate,
}: {
  className?: string;
  mobile?: boolean;
  openSubmenu?: string | null;
  onToggleSubmenu?: (menu: string) => void;
  onNavigate?: () => void;
}) {
  const solutionsOpen = openSubmenu === "solutions";
  const brandsOpen = openSubmenu === "brands";
  const companyOpen = openSubmenu === "company";

  return (
    <ul className={className}>
      <li className="active">
        <Link className="active" href="/" onClick={onNavigate}>Home</Link>
      </li>
      <li className={`menu-item-has-children${mobile ? " submenu-item-has-children" : ""}${solutionsOpen ? " active-class" : ""}`}>
        <Link href="/solution" onClick={onNavigate}>
          Solutions
          {mobile && <ExpandToggle isOpen={solutionsOpen} onToggle={() => onToggleSubmenu?.("solutions")} />}
        </Link>
        <ul
          className={`sub-menu solution-sub-menu${mobile ? " submenu-class" : ""}${solutionsOpen ? " menu-open" : ""}`}
          style={mobile ? { display: solutionsOpen ? "block" : "none" } : undefined}
        >
          {solutionLinks.map((label) => (
            <li key={label}>
              <Link href="/solution-details" onClick={onNavigate}>{label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={`menu-item-has-children${mobile ? " submenu-item-has-children" : ""}${brandsOpen ? " active-class" : ""}`}>
        <Link href="/brand" onClick={onNavigate}>
          Brands
          {mobile && <ExpandToggle isOpen={brandsOpen} onToggle={() => onToggleSubmenu?.("brands")} />}
        </Link>
        <ul
          className={`sub-menu brand-sub-menu${mobile ? " submenu-class" : ""}${brandsOpen ? " menu-open" : ""}`}
          style={mobile ? { display: brandsOpen ? "block" : "none" } : undefined}
        >
          {brandLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onNavigate}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <Link href="/blog-grid" onClick={onNavigate}>Blogs</Link>
      </li>
      <li>
        <Link href="/download" onClick={onNavigate}>Resources</Link>
      </li>
      <li className={`menu-item-has-children${mobile ? " submenu-item-has-children" : ""}${companyOpen ? " active-class" : ""}`}>
        <Link href="/about" onClick={onNavigate}>
          Company
          {mobile && <ExpandToggle isOpen={companyOpen} onToggle={() => onToggleSubmenu?.("company")} />}
        </Link>
        <ul
          className={`sub-menu${mobile ? " submenu-class" : ""}${companyOpen ? " menu-open" : ""}`}
          style={mobile ? { display: companyOpen ? "block" : "none" } : undefined}
        >
          <li><Link href="/about" onClick={onNavigate}>About Us</Link></li>
          
        </ul>
      </li>
    </ul>
  );
}

function SocialLinks({ className }: { className: string }) {
  return (
    <ul className={className}>
      <li><Link href="/contact" aria-label="Contact Panzer IT on X"><i className="fab fa-twitter"></i></Link></li>
      <li><Link href="/contact" aria-label="Contact Panzer IT on Facebook"><i className="fab fa-facebook-f"></i></Link></li>
      <li><Link href="/contact" aria-label="Contact Panzer IT on Pinterest"><i className="fab fa-pinterest"></i></Link></li>
      <li><Link href="/contact" aria-label="Contact Panzer IT on Instagram"><i className="fab fa-instagram"></i></Link></li>
    </ul>
  );
}

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const updateStickyHeader = () => {
      setIsSticky(window.scrollY > 100);
    };

    updateStickyHeader();
    window.addEventListener("scroll", updateStickyHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateStickyHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("search-active", isSearchOpen);
    document.body.classList.toggle("open-sidebar", isSidebarOpen);

    return () => {
      document.body.classList.remove("search-active");
      document.body.classList.remove("open-sidebar");
    };
  }, [isSearchOpen, isSidebarOpen]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element | null;

      if (target?.closest(".search-btn")) {
        event.preventDefault();
        setIsSearchOpen(true);
      }

      if (target?.closest(".sidebar-trigger")) {
        event.preventDefault();
        setIsSidebarOpen((isOpen) => !isOpen);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => {
      if (isOpen) {
        setOpenMobileSubmenu(null);
      }

      return !isOpen;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu((current) => (current === menu ? null : menu));
  };

  return (
    <>
      <header className="tv-header header-style3 panzer-image-header">
        <div className="main-wrapper">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto logo">
                <div className="header-logo">
                  <Link href="/">
                    <Image alt="logo" src="/assets/images/logo/logo.png" width={160} height={50} style={{ height: "auto" }} />
                    <Image alt="logo" src="/assets/images/logo/logo.png" width={160} height={50} style={{ height: "auto" }} />
                  </Link>
                </div>
              </div>
              <div className="col-auto nav-outer ms-auto">
                <div className="nav-menu">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <MainNavigation />
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button className="menu-toggle sidebar-btn" type="button" aria-label="Open menu" onClick={toggleMobileMenu}>
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto header-right-wrapper">
                <div className="outer-box">
                  <Link href="/contact" className="panzer-header-cta">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-wrapper${isMobileMenuOpen ? " body-visible" : ""}`} onClick={closeMobileMenu}>
        <div className="mobile-menu-area" onClick={(event) => event.stopPropagation()}>
          <button className="menu-toggle" type="button" aria-label="Close menu" onClick={toggleMobileMenu}><i className="fas fa-times"></i></button>
          <div className="mobile-logo">
            <Link href="/" onClick={closeMobileMenu}><Image width={864} height={200} alt="Panzer IT" src="/assets/images/logo/logo.webp" /></Link>
          </div>
          <nav className="mobile-menu" aria-label="Mobile navigation">
            <MainNavigation
              className="navigation clearfix"
              mobile
              openSubmenu={openMobileSubmenu}
              onToggleSubmenu={toggleMobileSubmenu}
              onNavigate={closeMobileMenu}
            />
          </nav>
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <span className="icon fa-solid fa-phone"></span>
                <span className="title">Call Panzer IT</span>
                <Link href="tel:+919004655099">+91 90046 55099</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon fa-light fa-envelope"></span>
                <span className="title">Email Us</span>
                <Link href="mailto:Sales@PanzerIT.com">Sales@PanzerIT.com</Link>
              </div>
            </li>
            <li>
              <div className="contact-info-box">
                <span className="icon fa-light fa-alarm-clock"></span>
                <span className="title">Availability</span>
                Working 24x7 | World Wide Work
              </div>
            </li>
          </ul>
          <SocialLinks className="social-links" />
        </div>
      </div>

      <div className={`sticky-header${isSticky ? " fixed-header" : ""}`}>
        <div className="container">
           <div className="main-wrapper">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto logo">
                <div className="header-logo">
                  <Link href="/">
                    <Image alt="logo" src="/assets/images/logo/logo.png" width={160} height={50} style={{ height: "auto" }} />
                    <Image alt="logo" src="/assets/images/logo/logo.png" width={160} height={50} style={{ height: "auto" }} />
                  </Link>
                </div>
              </div>
              <div className="col-auto nav-outer ms-auto">
                <div className="nav-menu">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <MainNavigation />
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button className="menu-toggle sidebar-btn" type="button" aria-label="Open menu" onClick={toggleMobileMenu}>
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto header-right-wrapper">
                <div className="outer-box">
                  <Link href="/contact" className="panzer-header-cta">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="search-popup">
        <button className="close-search style-1" type="button" aria-label="Close search" onClick={() => setIsSearchOpen(false)}><i className="fa fa-times"></i></button>
        <button className="close-search" type="button" aria-label="Close search" onClick={() => setIsSearchOpen(false)}><i className="fas fa-arrow-up"></i></button>
        <form method="get" action="/blog-grid">
          <div className="form-group">
            <input id="search1" type="search" name="q" defaultValue="" placeholder="Search..." required={true} />
            <button type="submit" aria-label="Search"><i className="fa fa-search"></i></button>
          </div>
        </form>
      </div>

      <div id="sidebar-area" className="sidebar">
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
        <div className="sidebar-wrapper">
          <button className="sidebar-close-btn" type="button" aria-label="Close sidebar" onClick={() => setIsSidebarOpen(false)}>
            <svg className="icon-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7" xmlSpace="preserve">
              <g>
                <rect x="0" y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width="16" height="2"></rect>
                <rect x="0" y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width="16" height="2"></rect>
              </g>
            </svg>
          </button>
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <Link className="dark-logo" href="/"><Image width={200} height={46} src="/assets/images/logo/logo.png" alt="logo" /></Link>
            </div>
            <div className="sidebar-menu-wrap"></div>
            <div className="sidebar-about">
              <h6>Make IT Secure</h6>
              <div className="sidebar-header">
                <h3>Continuous Secure Data Accessibility &amp; Availability</h3>
              </div>
            </div>
            <div className="instafeed-wrapper">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="insta-item">
                  <Link href="/contact">
                    <Image
                      src={`/assets/images/sidebar/sidebar${n === 1 ? "1.jpeg" : `-${n}.jpg`}`}
                      alt=""
                      width={180}
                      height={180}
                      sizes="180px"
                    />
                    <span className="overlay"><i className="fa-brands fa-instagram"></i></span>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center mt-40">Get latest updates on Panzer IT security solutions and product news</p>
            <form className="newsletter-form" action="https://formspree.io/f/mzbnjrnb" method="post">
              <div className="form-group">
                <input type="email" name="email" className="email" defaultValue="" placeholder="Enter Your Email" autoComplete="on" required={true} />
                <button type="submit" aria-label="Subscribe">
                  <i className="far fa-paper-plane"></i>
                  <span className="btn-title"></span>
                </button>
              </div>
            </form>
            <SocialLinks className="sidebar-social" />
          </div>
        </div>
      </div>
    </>
  );
}
