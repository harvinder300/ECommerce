import React, { useState } from "react";

function CounterWithLimit() {
    const [limit, setLimit] = useState(0);
    const [counter, setCounter] = useState(0);

    const startCounter = () => {
        if (counter < limit) {
            setCounter(counter + 1);
        } else {
            alert("Counter Reached its limit");
        }
    };

    const changeLimit = (event) => {
        setLimit(parseInt(event.target.value));
    };

    return (
        <>
            <h3>  Modify the CounterWithLimit component to include an input field and a "Set Limit" button to allow
                the user to set the upper limit for the counter.</h3>
            <h4>Counter With Limit</h4>
            <label htmlFor="idLimit">Enter the Limit</label><br />
            <input id="idLimit" onChange={changeLimit} /><br />
            <button id="idSetLimit" onClick={() => setCounter(0)}>Reset Counter</button>
            <button id="btnCounter" onClick={startCounter}>Counter</button>

            <p>Current Count: {counter}</p>
        </>
    );
}

export default CounterWithLimit;
