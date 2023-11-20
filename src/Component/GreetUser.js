import React from "react";
/*
Modify the GreetUser component to include an input box for the user's name and a button to show
greetings with the user's name upon clicking.

*/

function GreetUser() {
    return (
        <>  <h3>Modify the GreetUser component to include an input box for the user's name and a button to show
            greetings with the user's name upon clicking.</h3>
            <h4>Greet User</h4>
            <label>Enter your name</label><br></br>

            <input id="userName" />
            <p id="showGreet"></p>
            <button onClick={showGreet}>Show Greet</button>

        </>

    )
    function showGreet() {
        var user = document.getElementById("userName").value;
        document.getElementById("showGreet").innerHTML = "Hello " + user;
        alert("Hello " + user)
    }

}

export default GreetUser;