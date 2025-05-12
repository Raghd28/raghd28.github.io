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
hoverSound.volume = 0.3;

document.querySelectorAll(".project").forEach(card => {
  card.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Insert sticky container
const stickyContainer = document.createElement('div');
stickyContainer.className = 'sticky-container';
stickyContainer.innerHTML = `
  <textarea placeholder="Write something..." class="note-input"></textarea>
  <div class="note-buttons">
    <button id="submit-note">✏️ Post</button>
    <button id="random-note">🎲 Inspire Me</button>
  </div>
  <div class="note-display"></div>
`;
document.body.appendChild(stickyContainer);

// Quotes
const stickyQuotes = [
  "Keep going!",
  "Just press publish ✨",
  "Art is never finished, only abandoned.",
  "Trust the process!",
  "Done is better than perfect."
];

// Show message inside note
function updateNoteDisplay(text) {
  document.querySelector('.note-display').textContent = text;
}

// Post user message
document.getElementById('submit-note').onclick = () => {
  const val = document.querySelector('.note-input').value.trim();
  if (val) {
    updateNoteDisplay(val);
    document.querySelector('.note-input').value = '';
  }
};

// Random quote
document.getElementById('random-note').onclick = () => {
  const quote = stickyQuotes[Math.floor(Math.random() * stickyQuotes.length)];
  updateNoteDisplay(quote);
};

// Make sticky draggable
let isDragging = false;
let offsetX, offsetY;

stickyContainer.addEventListener('mousedown', (e) => {
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
  isDragging = true;
  offsetX = e.clientX - stickyContainer.offsetLeft;
  offsetY = e.clientY - stickyContainer.offsetTop;
  stickyContainer.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    stickyContainer.style.left = `${e.clientX - offsetX}px`;
    stickyContainer.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  stickyContainer.style.cursor = 'move';
});