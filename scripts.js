// Get the button and the About section
const showAboutBtn = document.getElementById('show-about-btn');
const aboutSection = document.getElementById('about');

// Add an event listener to the button
showAboutBtn.addEventListener('click', function() {
    // Toggle the visibility of the About section
    if (aboutSection.style.display === 'none') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
});
function showMenu() {
    const menu = document.getElementById('hoverMenu');
    menu.classList.add('active'); // Show the menu
    setTimeout(() => {
        menu.classList.remove('active'); // Hide the menu after 9 seconds
    }, 9000);
}
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
window.onload = () => showSection('home');
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('data-section');
        showSection(sectionId);
    });
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

window.onload = () => showSection('home');



const projectsContainer = document.querySelector(".projects-container");
const projectsSection = document.querySelector(".projects-section");

projectsSection.addEventListener("mousemove", (e) => {
    const sectionWidth = projectsSection.offsetWidth;
    const containerWidth = projectsContainer.scrollWidth;

    const mouseX = e.clientX;
    const offset = (mouseX / sectionWidth) * (sectionWidth - containerWidth);

    projectsContainer.style.transform = `translateX(${offset}px)`;
});
