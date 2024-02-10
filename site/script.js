document.addEventListener('DOMContentLoaded', function() {
    console.log("Yay the page has loaded!");
});



const box = document.getElementById("input");
box.addEventListener('input', function(event) {
    const input = event.target.value;
    console.log("input", input);    
});


function submitInput() {
    var input = document.getElementById("input").value;
    alert("Your entry was: " + input);
}