// import React, {} from 'react';

// function script() {
//     const [input, setInput] = useState('');


//     const handleInputChange = (event) => {
//         setInput(event.target.value);
//         console.log("input", event.target.value);
//     };

//     const handleSubmit = () => {
//         alert("Youre entry was: " + input);
//     };


//     return (
//         <div>
//             <input
//                 id="input"
//                 type="text"
//                 value = {input}
//                 onChange = {handleInputChange}
//             />
//             <button onClick = {handleSubmit}>Submit</button>
//         </div>
//     );
// }


// export default script;


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