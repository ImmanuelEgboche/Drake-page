import React from "react";
import { Outlet } from "react-router-dom";


const News = () => {
    return (
        <div>
            <h1>This is news</h1>

            <section>
                <Outlet /> 
            </section>
        </div>
    )
}

export default News 

// should change way of exporting to function way