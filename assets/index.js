document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const movieName = document.getElementById('movieName').value;
    const movieReview = document.getElementById('movieReview').value;

    if(movieName && movieReview) {
        addReview(movieName, movieReview);

        // Clear the input fields
        document.getElementById('movieName').value = '';
        document.getElementById('movieReview').value = '';
    }
});

function addReview(name, review) {
    const reviewList = document.getElementById('reviewList');
    
    const listItem = document.createElement('li');
    listItem.className = 'review-item';
    
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = name;
    
    const movieReview = document.createElement('p');
    movieReview.textContent = review;

    listItem.appendChild(movieTitle);
    listItem.appendChild(movieReview);
    
    reviewList.appendChild(listItem);
}