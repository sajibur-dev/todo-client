import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  console.log(todo);
  const { title, description, id, completed } = todo;
  return (
    <div className=" border-2 rounded-md py-3 px-2 border-primary">
      <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" checked={completed} class="checkbox" />
          <span class="label-text text-2xl">{title}</span>
          <button onClick={() => deleteTodo(id)}>delete</button>
        </label>
      </div>
    </div>
  );
};

export default Todo;
