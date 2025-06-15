// Animate skill bars when in view
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-percentage');
    
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
            const width = bar.parentElement.previousElementSibling.querySelector('span').textContent;
            bar.style.width = width;
        }
    });
};

// Portfolio item animation
const animatePortfolioItems = () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.classList.add('visible');
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    animateSkillBars();
    animatePortfolioItems();
});

window.addEventListener('scroll', () => {
    animateSkillBars();
    animatePortfolioItems();
});