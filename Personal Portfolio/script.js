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
  