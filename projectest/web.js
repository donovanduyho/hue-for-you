$(document).ready(function () {
    $("#generateButton").click(function () {
        const word = $("#wordInput").val();

        $.ajax({
            url: "http://127.0.0.1:5005/get_colors",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ word: word }),
            success: function (response) {
                $("#colorPalette").empty(); // Clear old colors

                // Split the response by newline characters to get an array of hex codes
                const hexCodes = response.colors.split("\n");
                // Assuming response holds a newline-separated string of hex codes:

                hexCodes.forEach((hexCode) => {
                    const colorContainer = $(
                        '<div class="color-container"></div>'
                    );
                    const colorBox = $('<div class="color-box"></div>');
                    colorBox.css("background-color", hexCode);
                    const hexVal = $(
                        '<div class="hex-val">' + hexCode + "</div>"
                    );
                    colorContainer.append(colorBox).append(hexVal);
                    $("#colorPalette").append(colorContainer);
                });
            },
            error: function (error) {
                $("#errorMessage").text("Error communicating with the server.");
            },
        });
    });
    $("#randomButton").click(function () {
        $.ajax({
            url: "http://127.0.0.1:5005/get_random_colors",
            type: "POST",
            contentType: "application/json",
            success: function (response) {
                $("#colorPalette").empty(); // Clear old colors

                // Split the response by newline characters to get an array of hex codes
                const hexCodes = response.colors.split("\n");
                // Assuming response holds a newline-separated string of hex codes:

                hexCodes.forEach((hexCode) => {
                    const colorContainer = $(
                        '<div class="color-container"></div>'
                    );
                    const colorBox = $('<div class="color-box"></div>');
                    colorBox.css("background-color", hexCode);
                    const hexVal = $(
                        '<div class="hex-val">' + hexCode + "</div>"
                    );
                    colorContainer.append(colorBox).append(hexVal);
                    $("#colorPalette").append(colorContainer);
                });
            },
            error: function (error) {
                $("#errorMessage").text("Error communicating with the server.");
            },
        });
    });
});
