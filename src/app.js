import React from "react";
import { Layout } from '../layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}> 
                <Route index element={<Pages.Home />}>
                <Route path="Albums" element={<Pages.Albums />}>
                <Route path="News" element={<Pages.News />}>
                </Route>

                </Route>

                </Route>
            </Route>

        
        </Routes>
        
    )
}

export default App;