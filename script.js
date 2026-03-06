document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
    
    function activateCurrentSection() {
        let current = '';
        const scrollPosition = window.scrollY + 150; 
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        removeActiveClasses();
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1); 
            if (href === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', activateCurrentSection);
    

    activateCurrentSection();

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s';
        observer.observe(card);
    });
    
    const hobbies = document.querySelectorAll('.hobby');
    hobbies.forEach(hobby => {
        hobby.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});