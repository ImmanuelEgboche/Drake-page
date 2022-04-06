import React from "react";
import { Outlet } from "react-router-dom";
import { DrakeInfo } from "../../components"

const Home = () => {
    return(
        <div>
            <DrakeInfo />
        
        <section>
            <Outlet />
        </section>
        
        </div>
    )
}

export default Home;