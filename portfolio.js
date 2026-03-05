var typed = new Typed(".text", {
    strings: ["Web Developer", "Mobile App Developer", "WordPress Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });

    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        scrollTop.classList.toggle('visible', window.scrollY > 400);
    }
});

const skillSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkills() {
    if (skillsAnimated || !skillSection) return;
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;
    if (sectionPos < screenPos) {
        skillBars.forEach(bar => {
            bar.classList.add('animate');
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

function revealOnScroll() {
    const elements = document.querySelectorAll('.project-card, .resume-item, .about-container, .contact-form');
    elements.forEach(el => {
        if (!el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
        }
        const pos = el.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.15;
        if (pos < screenPos) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}