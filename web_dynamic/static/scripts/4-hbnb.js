document.addEventListener("DOMContentLoaded", function() {
    function handleButtonClick() {
        var checkedAmenities = [];
        document.querySelectorAll('.amenities input[type="checkbox"]:checked').forEach(function(checkbox) {
            checkedAmenities.push(checkbox.getAttribute('data-id'));
        });

        fetch('http://0.0.0.0:5001/api/v1/places_search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amenities: checkedAmenities
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Add event listener to the button
    var searchButton = document.querySelector('button');
    searchButton.addEventListener('click', handleButtonClick);
});

