export function header(addEventOnElem) {
    // Navbar toggle
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");

    if (navbar && overlay && navTogglers.length > 0) {
        const toggleNavbar = function () {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        };
        addEventOnElem(navTogglers, "click", toggleNavbar);
    } else {
        console.warn('Navbar or togglers not found!');
    }

    // Close navbar on navbar link click
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const closeNavbar = function (event) {
        // Check if the clicked link is inside the portfolio-parent element
        if (event.target.closest('.portfolio-parent')) {
            // Prevent default click behavior (no scrolling)
            event.preventDefault();
            // Toggle the dropdown instead of closing the sidebar
            const portfolioParent = event.target.closest('.portfolio-parent');
            portfolioParent.classList.toggle('active');
            return; // Stop here, do not close the sidebar
        }

        // Default behavior for other links: close the navbar
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    };
    addEventOnElem(navLinks, "click", closeNavbar);

    // Header active on scroll
    const headerElem = document.querySelector("[data-header]");
    if (headerElem) {
        const headerActive = function () {
            window.scrollY > 100
                ? headerElem.classList.add("active")
                : headerElem.classList.remove("active");
        };
        addEventOnElem(window, "scroll", headerActive);
    } else {
        console.warn('Header element not found!');
    }
}
