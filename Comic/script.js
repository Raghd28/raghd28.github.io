document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.getElementById("svgFrame");

    iframe.addEventListener("load", function() {
        let svgDoc = iframe.contentDocument || iframe.contentWindow.document;
        let apple = svgDoc.getElementById("apple"); // Try getElementById for better compatibility

        if (!apple) {
            console.error("Apple element not found in SVG.");
            return;
        }

        window.addEventListener("scroll", function() {
            let scrollPos = window.scrollY;
            let fallDistance = Math.min(scrollPos * 0.5, 100); // Adjust fall speed

            apple.setAttribute("transform", `translate(0, ${fallDistance})`);
        });
    });
});