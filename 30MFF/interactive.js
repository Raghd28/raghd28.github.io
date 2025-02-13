// Wait till the document is fully loaded before executing 
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

// Set canvas size to match the full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Adjust canvas size when the window is resized
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
// Array to store objects
    const leaves = [];
    const numLeaves = 50;

// Generate objects with random positions, sizes, speeds, and opacit
    for (let i = 0; i < numLeaves; i++) {
        leaves.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 2,
            speed: Math.random() * 1 + 0.5,
            opacity: Math.random() * 0.7 + 0.3
        });
    }
 // Function to draw and animate 
    function drawLeaves() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(76, 175, 80, 0.6)";

        leaves.forEach(leaf => {
            ctx.beginPath();
            ctx.arc(leaf.x, leaf.y, leaf.radius, 0, Math.PI * 2);
            ctx.fill();
            leaf.y += leaf.speed;
// If the it moves past the bottom of the screen, reset it to the top
            if (leaf.y > canvas.height) {
                leaf.y = 0;
                leaf.x = Math.random() * canvas.width;
            }
        });
// Request the next animation frame to keep the animation running
        requestAnimationFrame(drawLeaves);
    }
// Start the animation
    drawLeaves();
});