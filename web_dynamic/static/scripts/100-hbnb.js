$(document).ready(function() {
    var checkedStates = {};
    var checkedCities = {};

    $('input[type="checkbox"]').change(function() {
        var id = $(this).data('id');
        var name = $(this).data('name');
        
        if ($(this).parent().children('h2').length > 0) {
            if ($(this).is(':checked')) {
                checkedStates[id] = name;
            } else {
                delete checkedStates[id];
            }

            updateLocationsH4('States', checkedStates);
        } else {
            if ($(this).is(':checked')) {
                checkedCities[id] = name;
            } else {
                delete checkedCities[id];
            }

            updateLocationsH4('Cities', checkedCities);
        }
    });

    function updateLocationsH4(type, checkedItems) {
        var locationsH4 = '';
        for (var id in checkedItems) {
            locationsH4 += checkedItems[id] + ', ';
        }
        locationsH4 = locationsH4.slice(0, -2); // Remove the last comma and space
        $('.locations h4').text(locationsH4 ? 'Selected ' + type + ': ' + locationsH4 : '&nbsp;');
    }


    $('button').click(function() {
        var amenities = [];
        var data = {
            amenities: amenities,
            states: Object.keys(checkedStates),
            cities: Object.keys(checkedCities)
        };
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
					console.log(response);
            },
            error: function(xhr, status, error) {
					console.error(error);
            }
        });
    });
});

