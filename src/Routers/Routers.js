import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Todos from '../pages/Todos';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todos' element={<Todos/>} />
        </Routes>
    );
};

export default Routers;