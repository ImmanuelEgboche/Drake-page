import React, { useState } from "react";

const DrakeInfo = () => {
    const [ readerCounter, setReaderCounter ] = useState(0)

    const increaseReaderCount = () => setReaderCounter(readerCounter + 1)

    return (
        <div>
    <h3>Welcome</h3>
    <h3>To the</h3>
    <h3>Current readers: {readerCounter}</h3>
    <button onClick={increaseReaderCount}>
        I've just read!
    </button>
    </div>
    );
}

export default DrakeInfo;