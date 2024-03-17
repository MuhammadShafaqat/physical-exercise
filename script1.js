
// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var navbar = document.getElementById('navbar');
    var topButton = document.querySelector('.top-button');
    var sections = document.querySelectorAll('.section');

    menuIcon.addEventListener('click', function() {
        var ul = navbar.querySelector('ul');
        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'flex';
            ul.style.marginRight = '7rem'           
            moveElementsDown();
        } else {
            ul.style.display = 'none';
            moveElementsUp();
        }
    });

    function moveElementsDown() {
        // topButton.style.marginTop = navbar.offsetHeight + 'px';
        topButton.style.marginTop =  '60px';
        sections.forEach(function(section) {
            section.style.marginTop = navbar.offsetHeight + 'px';
        });
    }

    function moveElementsUp() {
        topButton.style.marginTop = '0';
        sections.forEach(function(section) {
            section.style.marginTop = '40px'; // Adjust as needed
        });
    }
});


