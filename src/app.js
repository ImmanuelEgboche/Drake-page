import React from "react";
import ArtistInfo from "./components/ArtistInfo"
import DrakeInfo from "./components/DrakeInfo";
import UserForm from "./components/UserForm"
import NavBar from "./components/NavBar";

function App() {
    return(
        <main>
            <h1>Drake</h1>
            <NavBar />
            <UserForm />
            <DrakeInfo />
            <ArtistInfo />
        </main>
    )
}

export default App;