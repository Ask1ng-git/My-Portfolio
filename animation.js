// Select Header and Navigation attributs
const header = document.querySelector('header');
const nav = document.querySelector('nav');

//Function to hide the navigation bar based on the header position

window.onscroll = function() {
    const headerHeight = header.offsetHeight;

// Check if the scroll position is greater or less than the header height
    if (window.scrollY > headerHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

// Function to change the color of the navigation bar links depending on the section we are in 

document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";
// loop for browsing all sections of the pages
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Check if the scroll is greater or egal to the vertical - the height / 3 
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  // Check if the link's href contains the current section's ID if TRUE, add the "active" class to the current selection's id
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
