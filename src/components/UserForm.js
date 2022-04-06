import React, { useState } from "react";

const FormHandler = e => {
    const [username, setUsername] = useState("");
    const [nameInput, setNameInput] = useState("")

    const handleInput = e => {
        setNameInput(e.target.value)
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        setNameInput("")
    };

    return(
        <div>
            <h3 aria-label="greeting" id="greeting">Hi there, {username ? username : 'Drake fan'}!</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Please enter name" value={nameInput} onChange={handleInput}/>
                <input type="submit" value="Update"/>
            </form>
        </div>
        )
}

export default FormHandler;