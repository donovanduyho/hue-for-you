import React from 'react';


const express=require('express');
const app=express();


app.use(express.static('public'));

const port =proces.env.PORT||3000;
app.listen(port, ()=> {
    console.log('server is running on another port');
});
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