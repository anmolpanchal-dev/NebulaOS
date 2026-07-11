document.addEventListener("DOMContentLoaded", () => {
    // Purana Particle Code (Yahan rahega)
    const container = document.getElementById("particleContainer");
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        const size = Math.random() * 4 + 2;
        const leftPosition = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = Math.random() * 4 + 4;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${leftPosition}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        container.appendChild(particle);
    }
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loaderWrapper");
    const mainContent = document.getElementById("mainContent");

    // Ek chhota sa artificial delay (e.g. 1.5 seconds) takki user loader ko dekh sake
    // Agar turant hatana hai toh delay ko 0 kar sakte hain.
    setTimeout(() => {
        // 1. Loader ko smoothly fade out karein
        loader.classList.add("loader-fade-out");

        // 2. Animation khatam hone ke baad loader ko completely remove karein aur page dikhayein
        setTimeout(() => {
            loader.style.display = "none";
            
            // Main page ko display block karke fade-in karein
            mainContent.classList.add("show");
        }, 500); // 500ms match karta hai CSS ke fade-out transition se
        
    }, 1500); // 1500ms = 1.5 seconds ka buffer delay
});