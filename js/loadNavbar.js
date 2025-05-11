document.addEventListener('DOMContentLoaded', function() {
    fetch('../components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // Highlight current page in navbar
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-list a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
            document.getElementById('navbar-placeholder').innerHTML = '<p>Error loading navigation</p>';
        });
});