document.addEventListener('DOMContentLoaded', function() {
    console.log("Yay the page has loaded!");
});


function submitInput() {
    var input = document.getElementById("input").value;
    alert("Your entry was: " + input);
}