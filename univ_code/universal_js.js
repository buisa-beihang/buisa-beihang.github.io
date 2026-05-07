// Navbar scripts
const toggleNavBtn = document.getElementById('toggleBtn');
const navbar = document.getElementById('navbar');
const mainContent = document.querySelector('.univ_page-main-content');

// Make navbar closed by default
navbar.classList.add('tucked');
mainContent.style.marginLeft = '60px';
mainContent.style.width = 'calc(100% - 60px)';

// Navbar click toggle
toggleNavBtn.addEventListener('click', () => {
    navbar.classList.toggle('tucked');
    
    // Check if mobile
    if (window.innerWidth <= 900) {
        // Toggle mobile menu visibility without shifting layout
        navbar.classList.toggle('active');
        return;
    }
    
    if (navbar.classList.contains('tucked')) {
        mainContent.style.marginLeft = '60px';
        mainContent.style.width = 'calc(100% - 60px)';
    } else {
        mainContent.style.marginLeft = '250px';
        mainContent.style.width = 'calc(100% - 250px)';
    }
});

// Lag reduction - hide content during transition and show after transition
navbar.addEventListener('transitionstart', (e) => {
    if (e.propertyName === 'width') {
        const isMobile = window.innerWidth <= 900;
        const isTucked = navbar.classList.contains('tucked');

        if (isMobile) {
            if (isTucked) {
                mainContent.style.opacity = '1';
                mainContent.style.pointerEvents = 'auto';
            } else {
                mainContent.style.opacity = '0';
                mainContent.style.pointerEvents = 'none';
            }
        } else {
            mainContent.style.opacity = '0';
            mainContent.style.pointerEvents = 'none';
        }
    }
});

navbar.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'width') {
        const isMobile = window.innerWidth <= 900;
        const isTucked = navbar.classList.contains('tucked');

        if (isMobile) {
            if (isTucked) {
                mainContent.style.opacity = '1';
                mainContent.style.pointerEvents = 'auto';
            }
        } else {
            mainContent.style.opacity = '1';
            mainContent.style.pointerEvents = 'auto';
        }
    }
});
