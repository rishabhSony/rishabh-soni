// Handle form submission feedback
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form validation can be added here
            console.log('Form submitted');
            // Actual submission is handled by Flask
        });
    }
});