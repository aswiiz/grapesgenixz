/*============================================================================
  PRODUCTION INITIALIZATION LAYER
============================================================================*/
document.addEventListener("DOMContentLoaded", () => {

    /* --- Technical Artifact: Cursor Elements --- */
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".cursor-dot");
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    /*==========================================
      PREMIUM INTERACTIVE CUSTOM CURSOR
    ==========================================*/
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (dot) {
            dot.style.left = mouseX + "px";
            dot.style.top = mouseY + "px";
        }
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        if (cursor) {
            cursor.style.left = cursorX + "px";
            cursor.style.top = cursorY + "px";
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    /* Hover State Bindings */
    document.querySelectorAll("a, button, .course-card, .placed-card, .cat-pill, .chat-pill-option").forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (cursor) {
                cursor.style.width = "70px";
                cursor.style.height = "70px";
                cursor.style.background = "rgba(27,58,135,.12)";
                cursor.style.borderColor = "#1B3A87";
            }
        });
        item.addEventListener("mouseleave", () => {
            if (cursor) {
                cursor.style.width = "40px";
                cursor.style.height = "40px";
                cursor.style.background = "transparent";
                cursor.style.borderColor = "#1B3A87";
            }
        });
    });

    /* Mouse Down Click Scale Feedback */
    window.addEventListener("mousedown", () => {
        if (cursor) cursor.style.transform = "translate(-50%,-50%) scale(.7)";
    });
    window.addEventListener("mouseup", () => {
        if (cursor) cursor.style.transform = "translate(-50%,-50%) scale(1)";
    });


    /*==========================================
      HERO PARALLAX GRAPHICS LAYER
    ==========================================*/
    const hero = document.querySelector("#hero");
    const layers = document.querySelectorAll(".layer");

    if (hero) {
        hero.addEventListener("mousemove", (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            layers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed || 0);
                const moveX = (x - 0.5) * speed * 25;
                const moveY = (y - 0.5) * speed * 25;
                layer.style.transform = `translate(${moveX}px, ${moveY}px) ${layer.classList.contains('hero-graphics') ? '' : ''}`;
            });
        });
    }


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
            // Remove active style from previous pill
            filterPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");

            const selectedCategory = pill.textContent.trim().toLowerCase();

            courseCards.forEach(card => {
                const label = card.querySelector(".cat-pill-label");
                const cardCategory = label ? label.textContent.trim().toLowerCase() : "";

                if (selectedCategory === "all programs" || cardCategory === selectedCategory) {
                    card.style.display = "flex";
                    // Reset opacity style to allow standard fade/rendering layouts
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
            // Safe toggle check logic for responsive viewport modifications
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
});

/*==================================
ABOUT TAB SWITCH
==================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const tabs=document.querySelectorAll(".tab-item");

    const panes=document.querySelectorAll(".tab-pane");

    tabs.forEach(tab=>{

        tab.addEventListener("click",()=>{

            tabs.forEach(t=>t.classList.remove("active"));

            panes.forEach(p=>p.classList.remove("active"));

            tab.classList.add("active");

            const target=document.getElementById(tab.dataset.target);

            if(target){

                target.classList.add("active");

            }

        });

    });

});
/*==================================
TESTIMONIAL SWIPER INITIALIZATION
==================================*/
const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");

let index = 1;

function slide(){

track.style.transform =
`translateX(-${index*410}px)`;

cards.forEach(card=>card.classList.remove("active"));

cards[index].classList.add("active");

index++;

if(index>=cards.length){

setTimeout(()=>{

index=0;

track.style.transform="translateX(0px)";

cards.forEach(card=>card.classList.remove("active"));

cards[0].classList.add("active");

},800);

}

}

setInterval(slide,4000);

/*==================================
animation
=========================*/
const shapes = document.querySelectorAll(".shape");

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.clientX)/25;

    const y = (window.innerHeight/2 - e.clientY)/25;

    shapes.forEach(shape=>{

        const speed = shape.dataset.speed;

        shape.style.transform =
        `translate(${x*speed}px,${y*speed}px)`;

    });

});

/*==================================
about us section
=========================*/
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});
document.addEventListener("mousemove", (e) => {

    document.querySelectorAll(".layer").forEach(layer => {

        const speed = layer.dataset.speed;

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform =
            `translate(${x}px, ${y}px)`;

    });

});



document.addEventListener("DOMContentLoaded", () => {

    /* [01] Lenis Smooth Scroll */
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

    /* [02] GSAP & ScrollTrigger Setup */
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0, 0);

    /* [03] REAL-TIME PEN DRAWING SVG UNDERLINE ANIMATION */
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

    /* [04] Text Blur Reveal */
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
});

// Open General Modal dynamically based on button data attributes
function openGeneralModal(type, title) {
  document.getElementById('generalEnquiryType').value = type;
  document.getElementById('generalModalTitle').innerText = title || (`Enquire About ${type}`);
  var modal = new bootstrap.Modal(document.getElementById('generalEnquiryModal'));
  modal.show();
}

// Open Admission Modal dynamically
function openAdmissionModal(type, courseName) {
  document.getElementById('admissionEnquiryType').value = type;
  if(courseName) {
     document.getElementById('admissionCourseInput').value = courseName;
  }
  var modal = new bootstrap.Modal(document.getElementById('admissionModal'));
  modal.show();
}

// Modal Operations
const modal = document.getElementById('enquiryModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const triggerBtns = document.querySelectorAll('.enquiry-modal-trigger-btn');

// Function to open modal
function openModal() {
    modal.classList.add('active');
    document.body.classList.add('modal-open'); // Prevents background scrolling
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open'); // Restores background scrolling
}

// Event Listeners
triggerBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});