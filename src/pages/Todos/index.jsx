import React from "react";
import TodosPosts from "./TodosPost";

const Todos = () => {
  return (
    <div className="w-4/5 mx-auto my-10 px-5 py-10">
      <h1 className="text-5xl mb-5">Todo</h1>
      <div>
        <TodosPosts />
      </div>
    </div>
  );
};

export default Todos;
