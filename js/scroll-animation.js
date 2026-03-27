document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.main-categories, .topic-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the element is in view
            if (entry.isIntersecting) {
                // Add the 'fade-in' class to trigger the animation
                entry.target.classList.add('fade-in');
                // Stop observing the element so the animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options: start the animation when the element is 10% visible
        threshold: 0.1
    });

    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
