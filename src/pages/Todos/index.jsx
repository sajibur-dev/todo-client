import React from "react";
import { Link } from "react-router-dom";
import ListTodos from "./ListTodos";

const Todos = () => {
  return (
    <div className="w-4/5 mx-auto my-10 px-5 py-10">
      <h1 className="text-5xl mb-5">Todos</h1>
      <div>
        {/* <TodosPosts /> */}
        <ListTodos/>
        <Link to="/postTodo" className="btn btn-sm btn-primary mt-5">add todo</Link>
      </div>
    </div>
  );
};

export default Todos;
