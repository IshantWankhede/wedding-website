document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown-timer');
    const weddingDate = new Date('February 3, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "WE ARE MARRIED!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} DAYS ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS TO GO!`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
});
