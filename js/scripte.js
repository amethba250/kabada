document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.info-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // stop observer after animation
            }
        });
    }, {
        threshold: 0.2 // déclenche quand 20% de la carte est visible
    });

    cards.forEach(card => observer.observe(card));
});
