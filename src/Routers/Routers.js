import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Todos from '../pages/Todos';
import TodosPosts from '../pages/Todos/TodosPost';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/todos' element={<Todos/>} />
            <Route path='/postTodo' element={<TodosPosts/>}/>
        </Routes>
    );
};

export default Routers;