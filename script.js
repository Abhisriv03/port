document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in the nav bar
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // Toggle mobile navigation menu
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');

    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Toggle dark mode
    const darkModeToggle = document.getElementById('dark-mode');

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Form validation
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            e.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            e.preventDefault();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});

// Open Resume Modal
function openResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
}

// Close Resume Modal
function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
}
