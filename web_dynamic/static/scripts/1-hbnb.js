$(document).ready(function() {
    // Initialize an empty list to store Amenity IDs
    var checkedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function() {
        var amenityID = $(this).data('id');
        var amenityName = $(this).data('name');

        // If the checkbox is checked, add the Amenity ID to the list
        if ($(this).is(':checked')) {
            checkedAmenities.push(amenityID);
        } else {
            // If the checkbox is unchecked, remove the Amenity ID from the list
            var index = checkedAmenities.indexOf(amenityID);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        $('div#amenities h4').text(checkedAmenities.join(', '));
    });
});

