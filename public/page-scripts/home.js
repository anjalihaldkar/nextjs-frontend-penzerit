/* Home page route behavior. */
(function () {
  // In Next.js, page scripts can load AFTER DOMContentLoaded / window.load.
  // Also, vendor scripts (Swiper) may load after this file.
  function whenReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  function whenWindowLoaded(fn) {
    if (document.readyState === "complete") {
      fn();
    } else {
      window.addEventListener("load", fn, { once: true });
    }
  }

  function whenSwiperReady(fn) {
    var tries = 0;
    (function check() {
      // eslint-disable-next-line no-undef
      if (typeof Swiper !== "undefined") {
        fn();
        return;
      }
      tries += 1;
      if (tries > 200) return; // ~10s max
      setTimeout(check, 50);
    })();
  }

  function whenMarqueeReady(fn) {
    var tries = 0;
    (function check() {
      if (window.jQuery && window.jQuery.fn && window.jQuery.fn.marquee) {
        fn(window.jQuery);
        return;
      }
      tries += 1;
      if (tries > 200) return; // ~10s max
      setTimeout(check, 50);
    })();
  }

  function initBrandPartners() {
    var brandPanel = document.querySelector(".panzer-cyber-brand-panel");
    var brandSliderElement = brandPanel ? brandPanel.querySelector(".brands-slider-three") : null;

    if (!brandSliderElement) return;

    whenSwiperReady(function () {
      // eslint-disable-next-line no-undef
      if (typeof Swiper === "undefined") return;

      var brandSlideTotal = brandSliderElement.querySelectorAll(".swiper-wrapper > .swiper-slide").length;
      var brandPrevButton = brandPanel.querySelector(".panzer-brand-prev");
      var brandNextButton = brandPanel.querySelector(".panzer-brand-next");

      if (brandSliderElement.swiper && !brandSliderElement.swiper.destroyed) {
        brandSliderElement.swiper.destroy(true, true);
      }

      // eslint-disable-next-line no-undef
      var brandSlider = new Swiper(brandSliderElement, {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        loop: brandSlideTotal > 6,
        speed: 650,
        allowTouchMove: true,
        observer: true,
        observeParents: true,
        navigation: false,
        breakpoints: {
          0: { slidesPerView: 1 },
          540: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          854: { slidesPerView: 4 },
          1199: { slidesPerView: 6 },
        },
      });

      function moveBrandSlider(direction, event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }

        var currentTranslate = brandSlider.getTranslate();
        brandSlider.setTransition(0);
        brandSlider.setTranslate(currentTranslate);
        brandSlider.animating = false;
        brandSlider.updateProgress(currentTranslate);
        brandSlider.updateActiveIndex();
        brandSlider.updateSlidesClasses();

        if (direction === "prev") {
          brandSlider.slidePrev(450, true);
        } else {
          brandSlider.slideNext(450, true);
        }
      }

      if (brandPrevButton) {
        ["pointerdown", "pointerup", "touchstart", "touchend"].forEach(function (eventName) {
          brandPrevButton.addEventListener(eventName, function (event) {
            event.stopPropagation();
          });
        });

        brandPrevButton.addEventListener("click", function (event) {
          moveBrandSlider("prev", event);
        });
      }

      if (brandNextButton) {
        ["pointerdown", "pointerup", "touchstart", "touchend"].forEach(function (eventName) {
          brandNextButton.addEventListener(eventName, function (event) {
            event.stopPropagation();
          });
        });

        brandNextButton.addEventListener("click", function (event) {
          moveBrandSlider("next", event);
        });
      }
    });
  }

  function initHeroAndService() {
    var serviceScroller = document.querySelector(".panzer-scroll-service");
    var servicePrevButton = document.querySelector(".panzer-service-prev");
    var serviceNextButton = document.querySelector(".panzer-service-next");

    if (serviceScroller && servicePrevButton && serviceNextButton && !serviceScroller.dataset.panzerServiceReady) {
      serviceScroller.dataset.panzerServiceReady = "true";

      function getServiceStep() {
        var firstSlide = serviceScroller.querySelector(".swiper-slide");
        var wrapper = serviceScroller.querySelector(".swiper-wrapper");
        var gap = wrapper
          ? parseFloat(window.getComputedStyle(wrapper).columnGap || window.getComputedStyle(wrapper).gap)
          : 0;

        return firstSlide
          ? firstSlide.getBoundingClientRect().width + (Number.isNaN(gap) ? 0 : gap)
          : serviceScroller.clientWidth;
      }

      function moveServiceScroller(direction, event) {
        event.preventDefault();
        serviceScroller.scrollBy({
          left: direction * getServiceStep(),
          behavior: "smooth",
        });
      }

      servicePrevButton.addEventListener("click", function (event) {
        moveServiceScroller(-1, event);
      });

      serviceNextButton.addEventListener("click", function (event) {
        moveServiceScroller(1, event);
      });
    }

    var sliderElement = document.querySelector(".panzer-cyber-slider");
    var currentElement = document.querySelector(".panzer-cyber-current");
    var totalElement = document.querySelector(".panzer-cyber-total");
    if (!sliderElement) return;

    whenSwiperReady(function () {
      // eslint-disable-next-line no-undef
      if (typeof Swiper === "undefined") return;

      var slideTotal = sliderElement.querySelectorAll(".swiper-wrapper > .swiper-slide").length;

      if (sliderElement.swiper && !sliderElement.swiper.destroyed) {
        sliderElement.swiper.destroy(true, true);
      }

      function formatSlideNumber(value) {
        return String(value).padStart(2, "0");
      }

      function updateSlideCounter(swiperInstance) {
        if (currentElement) currentElement.textContent = formatSlideNumber(swiperInstance.realIndex + 1);
        if (totalElement) totalElement.textContent = "/ " + formatSlideNumber(slideTotal);
      }

      function syncSlideVideos(swiperInstance) {
        var allVideos = sliderElement.querySelectorAll(".panzer-cyber-visual-video");
        var activeVideo = swiperInstance.slides[swiperInstance.activeIndex]
          ? swiperInstance.slides[swiperInstance.activeIndex].querySelector(".panzer-cyber-visual-video")
          : null;

        allVideos.forEach(function (videoElement) {
          if (videoElement !== activeVideo) videoElement.pause();
        });

        if (activeVideo) {
          activeVideo.muted = true;
          var playPromise = activeVideo.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {});
          }
        }
      }

      // eslint-disable-next-line no-undef
      new Swiper(".panzer-cyber-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: false,
        rewind: slideTotal > 1,
        speed: 900,
        grabCursor: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 5200,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".panzer-cyber-prev",
          nextEl: ".panzer-cyber-next",
        },
        keyboard: {
          enabled: true,
        },
        a11y: {
          enabled: true,
        },
        on: {
          init: function () {
            updateSlideCounter(this);
            syncSlideVideos(this);
          },
          slideChange: function () {
            updateSlideCounter(this);
          },
          slideChangeTransitionEnd: function () {
            syncSlideVideos(this);
          },
        },
      });
    });
  }

  function initMarquee() {
    var marquee = document.querySelector(".tv-marquee-section .marquee_mode");
    if (!marquee) return;

    whenMarqueeReady(function ($) {
      var $marquee = $(marquee);

      if ($marquee.find(".js-marquee-wrapper").length) {
        $marquee.marquee("destroy");
      }

      $marquee.marquee({
        speed: 40,
        gap: 0,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    });
  }

  whenWindowLoaded(initBrandPartners);
  whenReady(function () {
    initHeroAndService();
    initMarquee();
  });
})();
