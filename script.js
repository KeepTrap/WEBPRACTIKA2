document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        toggleButton.textContent = 'Светлая тема';
    }

    toggleButton.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            toggleButton.textContent = 'Тёмная тема';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-theme');
            toggleButton.textContent = 'Светлая тема';
            localStorage.setItem('theme', 'dark');
        }
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert(`Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.`);
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы');
            }
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});