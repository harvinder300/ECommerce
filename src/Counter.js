import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleOnChange = (e) => {
        // Parse the input value as an integer and update the counter
        const value = parseInt(e.target.value);
        setCounter(value);
    };

    const IncrementCounter = () => {
        setCounter(counter + 1);
    };

    const DecrementCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h3>
                Create a functional component called Counter. This component should
                display a counter that starts at 0 and has "Increment" and "Decrement"
                buttons to increase or decrease the counter value.
            </h3>

            <label htmlFor="inputNumber">Enter the Number</label>
            <br />
            <input
                id="inputNumber"
                // Ensure the input type is 'number'
                placeholder="0"
                value={counter} // Set input value to the counter state
                onChange={handleOnChange}
            />
            <br />
            <button onClick={IncrementCounter}>Increment</button>
            <button onClick={DecrementCounter}>Decrement</button>
            <p>Current Count: {counter}</p>
        </>
    );
}

export default Counter;
