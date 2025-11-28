// Update dimensions
function updateDimensions() {
    window.wid = window.innerWidth;
    window.hgh = window.innerHeight;
}

window.addEventListener('resize', updateDimensions);

// Initial call to set dimensions
updateDimensions();

// Nav open
function openNav() {
    updateDimensions(); // Ensure dimensions are updated
    if (window.wid > window.hgh) {
        document.getElementById("mySidepanel").style.width = "20%";
    } else {
        document.getElementById("mySidepanel").style.width = "80%";
    }
}

// Nav close
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Change iframe content
function changeContent(url) {
    document.getElementById("contentFrame").src = url;
}
