//Navbar scripts
const toggleNavBtn = document.getElementById('toggleBtn');
const navbar = document.getElementById('navbar');
const pageContainer = document.getElementById('pageContainer');
const contentIframe = document.getElementById('contentIframe');
// Make navbar closed by default
// navbar.classList.add('tucked'); // This line is removed as it's handled by the CSS
// mainContent.style.marginLeft = '60px'; // These lines are removed as they are replaced by class toggling
// mainContent.style.width = 'calc(100% - 60px)'; // These lines are removed as they are replaced by class toggling
// Navbar click toggle
toggleNavBtn.addEventListener('click', () => {
    navbar.classList.toggle('tucked');
    pageContainer.classList.toggle('tucked');
    
    // if (navbar.classList.contains('tucked')) { // These blocks are removed as the styles are now managed by CSS classes
    //     mainContent.style.marginLeft = '60px';
    //     mainContent.style.width = 'calc(100% - 60px)';
    // } else {
    //     mainContent.style.marginLeft = '250px';
    //     mainContent.style.width = 'calc(100% - 250px)';
    // }
});

// Lag reduction - hide iframe content during transition and show after
navbar.addEventListener('transitionstart', (e) => {
    if (e.propertyName === 'width') {
        contentIframe.style.opacity = '0';
        contentIframe.style.pointerEvents = 'none';
    }
});

navbar.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'width') {
        contentIframe.style.opacity = '1';
        contentIframe.style.pointerEvents = 'auto';
    }
});

