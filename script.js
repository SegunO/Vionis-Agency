document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion Functionality
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
