// for the mobile navigation or humburger menu
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.toggleAttribute("data-visible");
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", true) : navToggle.setAttribute("aria-expanded", false);
});

// for the active page link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".primary-navigation a");

navLinks.forEach(link => {
    if(link.href == window.location.origin + activePage)
        link.classList.add('active');
});


