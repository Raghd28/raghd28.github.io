document.addEventListener("DOMContentLoaded", function() {
    // Save third-page and fourth-page buttons as variables
    let thirdButton = document.getElementById('third-page');
    let fourthButton = document.getElementById('fourth-page');

    // Add click event to both elements and set scrollPage function as callback function
    thirdButton.addEventListener('click', scrollPage);
    fourthButton.addEventListener('click', scrollPage);

    function scrollPage() {
        if (this.id === 'third-page') {
            window.scrollTo({
                top: window.innerHeight * 2,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (this.id === 'fourth-page') {
            window.scrollTo({
                top: window.innerHeight * 3,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    // An array of stories as strings
    let stories = [
        'Hello!',
        'I am Tweety, your storyteller.',
        'I am here to tell you how I escaped the cage.',
        'This is my fictional world, welcome.'
    ];

    let catDiv = document.getElementById('cat-div');
    let catText = document.getElementById('cat-text');
    let navButtons = document.getElementsByClassName('nav-btn');

    // Add scroll event for the whole HTML document
    document.addEventListener('scroll', function() {
        let pos = window.scrollY; // Get vertical scroll position
        let width = window.innerWidth; // Get screen width
        let height = document.documentElement.scrollHeight - window.innerHeight; // Get max scroll height

        // Calculate the progress of scrolling (0 to 1)
        let scrollProgress = pos / height;

        // Move the cat from the left edge (0px) to the right edge (window width - cat width)
        let maxMove = width - 300; // Ensure cat stays within the screen
        catDiv.style.left = (scrollProgress * maxMove) + "px";

        // Calculate the current section (0, 1, 2, 3) based on scroll position
        let sectionNum = Math.min(stories.length - 1, parseInt(pos / window.innerHeight));

        // Change cat text based on the section
        catText.innerHTML = stories[sectionNum];

        // Reset navigation button colors
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.backgroundColor = 'white';
        }

        // Highlight the current section button
        if (navButtons[sectionNum]) {
            navButtons[sectionNum].style.backgroundColor = 'black';
        }
    });
});