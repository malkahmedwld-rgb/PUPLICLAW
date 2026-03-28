document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle active class for the icon rotation
            this.classList.toggle('active');

            const content = this.nextElementSibling;

            // Animate the panel
            if (content.style.maxHeight) {
                // If it's open, close it
                content.style.maxHeight = null;
            } else {
                // If it's closed, open it by setting max-height to its scrollHeight
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
