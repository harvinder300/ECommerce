import React from "react";

function OddEven() {

    const FindOddEven = () => {
        let output = '';

        for (let i = 0; i < 20; i++) {
            if (i % 2 === 0) {
                output += <p key={i}>{i} is even</p>;
            } else {
                output += <p key={i}>{i} is odd</p>;
            }
        }

        return output;
    }

    return (
        <>
            {FindOddEven()}
        </>
    )
}

export default OddEven;
