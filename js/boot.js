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

   setTimeout(() => {
        loader.classList.add("loader-fade-out");

        setTimeout(() => {
            loader.style.display = "none";
            
            mainContent.classList.add("show");
        }, 500); 
        
    }, 1500); 
});