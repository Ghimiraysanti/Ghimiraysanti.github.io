document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Sticky Header on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    // Menu Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and categories
            tabBtns.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding category
            const categoryId = this.getAttribute('data-tab');
            document.getElementById(categoryId).classList.add('active');
        });
    });

    // Gallery Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.querySelector('.gallery-modal');
    const modalImg = document.querySelector('.modal-content');
    const modalCaption = document.querySelector('.modal-caption');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const imgAlt = this.querySelector('img').getAttribute('alt');
            
            modalImg.setAttribute('src', imgSrc);
            modalCaption.textContent = imgAlt;
            galleryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    galleryModal.addEventListener('click', function(e) {
        if (e.target === this) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // Reviews Slider
    const reviewSlides = document.querySelectorAll('.review-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(index) {
        reviewSlides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % reviewSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + reviewSlides.length) % reviewSlides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Initialize slider
    showSlide(currentSlide);
    
    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form Submissions
    const orderForm = document.getElementById('orderForm');
    const contactForm = document.getElementById('contactForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your order! We will contact you shortly to confirm.');
            this.reset();
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Scroll Reveal Animation
    const animateElements = document.querySelectorAll('.animate-up, .animate-left, .animate-right');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});