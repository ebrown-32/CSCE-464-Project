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
            
            const feedbackText = document.getElementById('feedbackText').value;
            const wordCount = feedbackText.trim().split(/\s+/).length;
            
            if (feedbackText.trim() === '') {
                alert('Please enter your feedback before submitting.');
                return;
            }
            
            if (selectedRating === 0) {
                alert('Please select a rating before submitting.');
                return;
            }
            
            alert(`Thank you for your ${wordCount} word feedback!`);
            
            this.reset();
            stars.forEach(s => s.classList.remove('active'));
            selectedRating = 0;
        });
    }
}); 