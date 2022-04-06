import React from "react";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from ".";

export default {
    title: 'layout/NavBar',
    component: NavBar,
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
}

export const Default = () => <Footer />