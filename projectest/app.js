document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generateButton");
    const randomButton = document.getElementById("randomButton");

    randomButton.addEventListener("click", () => {
        fetch("http://127.0.0.1:5005/get_random_colors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const colorPalette = document.getElementById("colorPalette");
                colorPalette.innerHTML = ""; // Clear old colors

                const hexCodes = data.colors.split("\n");
                hexCodes.forEach((hexCode) => {
                    const colorBox = document.createElement("div");
                    colorBox.classList.add("color-box");
                    colorBox.style.backgroundColor = hexCode;
                    colorPalette.appendChild(colorBox);
                });
            })
            .catch((error) => {
                const errorMessage = document.getElementById("errorMessage");
                errorMessage.textContent =
                    "Error communicating with the server.";
            });
    });

    generateButton.addEventListener("click", () => {
        const wordInput = document.getElementById("wordInput");
        const word = wordInput.value.trim();

        fetch("http://127.0.0.1:5005/get_colors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ word }),
        })
            .then((response) => response.json())
            .then((data) => {
                const colorPalette = document.getElementById("colorPalette");
                colorPalette.innerHTML = ""; // Clear old colors

                const hexCodes = data.colors.split("\n");
                hexCodes.forEach((hexCode) => {
                    const colorBox = document.createElement("div");
                    colorBox.classList.add("color-box");
                    colorBox.style.backgroundColor = hexCode;
                    colorPalette.appendChild(colorBox);
                });
            })
            .catch((error) => {
                const errorMessage = document.getElementById("errorMessage");
                errorMessage.textContent =
                    "Error communicating with the server.";
            });
    });
});
