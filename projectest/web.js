$(document).ready(function() {
    $("#generateButton").click(function() {
        const word = $("#wordInput").val();

        $.ajax({
            url: 'http://127.0.0.1:5005/get_colors', 
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ word: word }),
            success: function(response) {
                $("#colorPalette").empty(); // Clear old colors

                // Split the response by newline characters to get an array of hex codes

                // Assuming response holds a newline-separated string of hex codes:

                hexCodes.forEach(hexCode => { 
                    const colorBox = $('<div class="color-box"></div>'); 
                    colorBox.css('background-color', hexCode); 
                    $("#colorPalette").append(colorBox);  
                }); 
            },
            error: function(error) { 
                $("#errorMessage").text("Error communicating with the server."); 
            }
        });
    });
});
