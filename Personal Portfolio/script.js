function toggleDescription(projectElement) {
    const desc = projectElement.querySelector('.description');
    const allDescriptions = document.querySelectorAll('.project .description');
    allDescriptions.forEach(el => {
      if (el !== desc) el.style.display = 'none';
    });
    desc.style.display = (desc.style.display === 'block') ? 'none' : 'block';
  }
  
  // Fade-in animation for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
  
  const hoverSound = new Audio("mouse-click-290204.mp3");
hoverSound.volume = 0.5; // not too loud

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    // Restart from beginning if hovering repeatedly
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});