import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kocca from './routes/Kocca';
import Megabox from './routes/Megabox';
import Soomgo from './routes/Soomgo';
import Todolist from './routes/Todolist';
import Trello from './routes/Trello';
import Cointracker from './routes/Cointracker';
import Netflix from './routes/Netflix';
import Home from './conponents/Home';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Kocca' element={<Kocca />} />
                <Route path='/Megabox' element={<Megabox />} />
                <Route path='/Soomgo' element={<Soomgo />} />
                <Route path='/Todolist' element={<Todolist />} />
                <Route path='/Trello' element={<Trello />} />
                <Route path='/Cointracker' element={<Cointracker />} />
                <Route path='/Netflix' element={<Netflix />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;