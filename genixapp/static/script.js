/*============================================================================
  PRODUCTION INITIALIZATION LAYER
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
      PREMIUM INTERACTIVE CUSTOM CURSOR
    ==========================================*/
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    // Track real-time mouse positions
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Instant dot movement for precision tracking
        if (dot) {
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        }
    });

    // Smooth physics-based interpolation for outer ring
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        if (cursor) {
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover State Bindings for Interactive Elements
    const interactiveElements = document.querySelectorAll(
        "a, button, .course-card, .placed-card, .cat-pill, .chat-pill-option, .tab, .tab-item, .affiliation-card"
    );

    interactiveElements.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (cursor) {
                cursor.style.width = "65px";
                cursor.style.height = "65px";
                cursor.style.background = "rgba(27, 58, 135, 0.12)";
                cursor.style.borderColor = "#1B3A87";
            }
            if (dot) {
                dot.style.transform = "translate(-50%, -50%) scale(1.8)";
                dot.style.background = "#FFC107";
            }
        });
        item.addEventListener("mouseleave", () => {
            if (cursor) {
                cursor.style.width = "40px";
                cursor.style.height = "40px";
                cursor.style.background = "transparent";
                cursor.style.borderColor = "#1B3A87";
            }
            if (dot) {
                dot.style.transform = "translate(-50%, -50%) scale(1)";
                dot.style.background = "#1B3A87";
            }
        });
    });

    // Mouse Down Click Scale Feedback
    window.addEventListener("mousedown", () => {
        if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(0.7)";
        if (dot) dot.style.transform = "translate(-50%, -50%) scale(0.5)";
    });

    window.addEventListener("mouseup", () => {
        if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1)";
        if (dot) dot.style.transform = "translate(-50%, -50%) scale(1)";
    });


    /*==========================================
      PARALLAX GRAPHICS LAYER & SHAPES
    ==========================================*/
    const layers = document.querySelectorAll(".layer");
    const shapes = document.querySelectorAll(".shape");

    window.addEventListener("mousemove", (e) => {
        const pageX = e.clientX;
        const pageY = e.clientY;

        // Dynamic multi-layer parallax calculation
        layers.forEach(layer => {
            const speed = parseFloat(layer.dataset.speed || 1);
            const x = (window.innerWidth - pageX * speed) / 120;
            const y = (window.innerHeight - pageY * speed) / 120;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Shape parallax calculation
        const shapeX = (window.innerWidth / 2 - pageX) / 25;
        const shapeY = (window.innerHeight / 2 - pageY) / 25;

        shapes.forEach(shape => {
            const speed = parseFloat(shape.dataset.speed || 1);
            shape.style.transform = `translate(${shapeX * speed}px, ${shapeY * speed}px)`;
        });
    });


    /*==========================================
      DYNAMIC GLASS NAVBAR ON SCROLL
    ==========================================*/
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 60) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }


    /*==========================================
      COURSE FILTER CONTROLLER
    ==========================================*/
    const filterPills = document.querySelectorAll(".cat-pill");
    const courseCards = document.querySelectorAll(".course-card");

    filterPills.forEach(pill => {
        pill.addEventListener("click", () => {
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");

            const selectedCategory = pill.textContent.trim().toLowerCase();

            courseCards.forEach(card => {
                const label = card.querySelector(".cat-pill-label");
                const cardCategory = label ? label.textContent.trim().toLowerCase() : "";

                if (selectedCategory === "all programs" || cardCategory === selectedCategory) {
                    card.style.display = "flex";
                    card.style.opacity = "1";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    /*==========================================
      INTERACTIVE ACTIVE STATE NAVIGATION SCROLL
    ==========================================*/
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });


    /*==========================================
      MOBILE HAMBURGER MENU TOGGLE LAYOUT
    ==========================================*/
    const menuBtn = document.querySelector(".menu-icon-btn");
    const navGroup = document.querySelector(".nav-links");

    if (menuBtn && navGroup) {
        menuBtn.addEventListener("click", () => {
            if (navGroup.style.display === "flex") {
                navGroup.style.display = "none";
            } else {
                navGroup.style.display = "flex";
                navGroup.style.flexDirection = "column";
                navGroup.style.position = "absolute";
                navGroup.style.top = "85px";
                navGroup.style.left = "0";
                navGroup.style.width = "100%";
                navGroup.style.background = "#ffffff";
                navGroup.style.padding = "20px";
                navGroup.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
            }
        });
    }


    /*==========================================
      ABOUT TABS CONTROLLER (UNIFIED)
    ==========================================*/
    const tabs = document.querySelectorAll(".about-tabs .tab, .tab-item");
    const contents = document.querySelectorAll(".tab-content, .tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");

            const targetId = tab.getAttribute("data-tab") || tab.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.classList.add("active");
            }
        });
    });


    /*==========================================
      LENIS SMOOTH SCROLL & GSAP SETUP
    ==========================================*/
    if (typeof Lenis !== "undefined") {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0, 0);

            // Real-time pen drawing SVG underline animation
            gsap.utils.toArray(".highlight-text").forEach(container => {
                const path = container.querySelector(".brush-line path");
                if (path) {
                    gsap.fromTo(path, 
                        { strokeDashoffset: 220 },
                        {
                            strokeDashoffset: 0,
                            duration: 1.4,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: container,
                                start: "top 82%",
                                toggleActions: "play none none reset"
                            }
                        }
                    );
                }
            });

            // Text Blur Reveal Animation
            gsap.utils.toArray(".blur-text").forEach(heading => {
                gsap.from(heading, {
                    opacity: 0,
                    filter: "blur(12px)",
                    y: 35,
                    duration: 1.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: "top 85%",
                    }
                });
            });
        }
    }


    /*==========================================
      ENQUIRY MODAL OPERATIONS
    ==========================================*/
    const enquiryModal = document.getElementById('enquiryModal') || document.querySelector('.modal-overlay');
    const closeModalBtn = document.getElementById('closeModalBtn') || document.querySelector('.modal-close-btn');
    const triggerBtns = document.querySelectorAll('.enquiry-modal-trigger-btn, .OpenModalUniversalBtn, #navEnquiryBtn');

    function openModal() {
        if (enquiryModal) {
            enquiryModal.classList.add('active');
            enquiryModal.style.display = 'flex';
            document.body.classList.add('modal-open');
        }
    }

    function closeModal() {
        if (enquiryModal) {
            enquiryModal.classList.remove('active');
            enquiryModal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    }

    triggerBtns.forEach(btn => btn.addEventListener('click', openModal));

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    if (enquiryModal) {
        enquiryModal.addEventListener('click', (e) => {
            if (e.target === enquiryModal) closeModal();
        });
    }
});


/*==========================================
  DYNAMIC BOOTSTRAP / HELPER MODAL FUNCTIONS
==========================================*/
function openGeneralModal(type, title) {
    const typeInput = document.getElementById('generalEnquiryType');
    const titleElem = document.getElementById('generalModalTitle');
    
    if (typeInput) typeInput.value = type;
    if (titleElem) titleElem.innerText = title || (`Enquire About ${type}`);
    
    const modalElem = document.getElementById('generalEnquiryModal');
    if (modalElem && typeof bootstrap !== "undefined") {
        const modal = new bootstrap.Modal(modalElem);
        modal.show();
    }
}

function openAdmissionModal(type, courseName) {
    const typeInput = document.getElementById('admissionEnquiryType');
    const courseInput = document.getElementById('admissionCourseInput');
    
    if (typeInput) typeInput.value = type;
    if (courseInput && courseName) courseInput.value = courseName;
    
    const modalElem = document.getElementById('admissionModal');
    if (modalElem && typeof bootstrap !== "undefined") {
        const modal = new bootstrap.Modal(modalElem);
        modal.show();
    }
}