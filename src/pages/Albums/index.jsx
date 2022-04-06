import React from "react";
import { Outlet } from "react-router-dom";
import { ArtistInfo } from '../../components'

const Albums = () => {
    return( 
        <div>
            <h1>Drake Discography</h1>
            <main>
                <ArtistInfo />
            </main>
            <section>
                <Outlet />
            </section>
        </div>
    )
}