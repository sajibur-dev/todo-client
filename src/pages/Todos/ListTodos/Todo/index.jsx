import React from "react";

const Todo = ({todo}) => {
  console.log(todo);
  const {title,description} = todo;
  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border border-primary bg-base-100 rounded-box"
    >
      <div class="collapse-title text-xl font-medium">
        {title}
      </div>
      <div class="collapse-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Todo;
