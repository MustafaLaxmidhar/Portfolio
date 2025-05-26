document.addEventListener('DOMContentLoaded', function() {
    fetch('./components/navbar.html')
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

            // Dropdown functionality
            const trigger = document.getElementById("navTrigger");
            const dropdown = document.getElementById("navDropdown");
            let isOpen = false;

            function openDropdown() {
                dropdown.classList.add("active");
                trigger.classList.add("active"); // Add active class to trigger
                isOpen = true;
                // Attach outside click listener
                document.addEventListener("click", handleOutsideClick);
            }

            function closeDropdown() {
                dropdown.classList.remove("active");
                trigger.classList.remove("active"); // Remove active class from trigger
                isOpen = false;
                // Remove outside click listener
                document.removeEventListener("click", handleOutsideClick);
            }

            function handleOutsideClick(e) {
                // If click is outside both the dropdown and the trigger, close it
                if (!dropdown.contains(e.target) && !trigger.contains(e.target)) {
                    closeDropdown();
                }
            }

            trigger.addEventListener("click", function (e) {
                // Prevent the click from immediately triggering handleOutsideClick
                e.stopPropagation();

                if (isOpen) {
                    closeDropdown();
                } else {
                    openDropdown();
                }
            });

            // Prevent clicks *inside* the dropdown from closing it
            dropdown.addEventListener("click", function (e) {
                e.stopPropagation();
            });
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
            document.getElementById('navbar-placeholder').innerHTML = '<p>Error loading navigation</p>';
        });
});

