    <script>
        // Simple tab functionality
        document.querySelectorAll('.pipboy-tab').forEach(tab => {
            tab.addEventListener('click', function () {
                document.querySelector('.pipboy-tab.active').classList.remove('active');
                this.classList.add('active');
                // Here you would add code to switch content panels
            });
        });

        // Glitch effect on hover for buttons
        document.querySelectorAll('.pipboy-button').forEach(button => {
            button.addEventListener('mouseenter', function () {
                this.classList.add('glitch');
                this.setAttribute('data-text', this.textContent.trim());
            });

            button.addEventListener('mouseleave', function () {
                this.classList.remove('glitch');
            });
        });

        // Simulate radio static
        const radio = document.querySelector('.radio-active');
        setInterval(() => {
            if (Math.random() > 0.7) {
                radio.style.animation = 'none';
                setTimeout(() => {
                    radio.style.animation = 'radio-active 0.5s infinite alternate';
                }, 100);
            }
        }, 3000);
    </script>