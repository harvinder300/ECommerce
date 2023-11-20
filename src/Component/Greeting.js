import React from "react";


function Greeting(props) {
    return (
        <>
            <h3> Create a functional component called Greeting. This component should take a prop name and
                display a greeting message like "Hello, [name]."</h3>
            <label>Enter your Name </label><br></br>
            <input id="greet"></input><br></br>
            <button id="showName" onClick={Display}>Show Name</button>
            <p id="idDisplay"></p><br></br>
        </>

    )

    function Display() {
        var name = document.getElementById("greet").value;
        document.getElementById("idDisplay").innerHTML =props.message+" "+name;

    }
}

export default Greeting;