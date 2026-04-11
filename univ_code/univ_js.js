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
        mainContent.style.opacity = '0';
        mainContent.style.pointerEvents = 'none';
    }
});

navbar.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'width') {
        mainContent.style.opacity = '1';
        mainContent.style.pointerEvents = 'auto';
    }
});