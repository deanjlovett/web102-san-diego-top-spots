$(document).ready(function() {
// write your code here
    $.getJSON("data.json", 
        (json)=>{
            var sdTopSpots = '';
            $.each(json, 
                (key, value)=>{
                    sdTopSpots += '<tr>'
                    sdTopSpots += '<td>' + value.name + '</td>';
                    sdTopSpots += '<td>' + value.description + '</td>';
                    sdTopSpots += '<td> <a href="https://www.google.com/maps?q=' + value.location + '">Open in Google Maps</a></td>';
                    sdTopSpots += '</tr>';
            });
        $('#san-diego-top-spots').append(sdTopSpots);
        console.log(sdTopSpots);
    });
});
