document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            selectedRating = rating;
            
            stars.forEach(s => s.classList.remove('active'));
            
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-rating')) <= rating) {
                    s.classList.add('active');
                }
            });
        });
    });
    
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const feedbackText = document.getElementById('feedbackText').value;
            const wordCount = feedbackText.trim().split(/\s+/).length;
            
            if (name.trim() === '') {
                alert('Please enter your name before submitting.');
                return;
            }
            
            if (feedbackText.trim() === '') {
                alert('Please enter your message for Theo before submitting.');
                return;
            }
            
            if (selectedRating === 0) {
                alert('Please rate Theo\'s cuteness before submitting.');
                return;
            }
            
            alert(`Thank you, ${name}! Theo appreciates your ${wordCount} word message and your ${selectedRating}-star rating!`);
            
            this.reset();
            stars.forEach(s => s.classList.remove('active'));
            selectedRating = 0;
        });
    }
}); 