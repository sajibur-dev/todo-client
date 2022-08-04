import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const TodosPosts = () => {
  const [todos, setTodos] = useState({});

  const hanldeInput = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    (async () => {
      try {
        const res = await fetch(
          "http://localhost:5001/todo-server-5f960/us-central1/app/todo",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(todos),
          }
        );
        const data = await res.json();
        console.log(data);
        if (data.success) {
          toast.success(data.msg);
        } else {
          toast.error(data.msg);
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  };
  console.log(todos);
  return (
    <div className="w-2/4 mx-auto px-5 py-10 text-black border-2 border-primary rounded-md my-5">
      <h1 className="text-2xl my-5">Add your today's tasks</h1>
      <form onSubmit={handleSubmit} className="space-y-5 w-full mx-auto">
        <div class="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="title"
            required
            name="title"
            onChange={(e) => hanldeInput(e)}
            class="input input-bordered w-full max-w-xs  input-primary"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <textarea
            class="textarea textarea-bordered textarea-primary"
            placeholder="description"
            name="description"
            onChange={(e) => hanldeInput(e)}
          ></textarea>
        </div>
        <div class="form-control w-full max-w-xs">
          <select
            class="select select-bordered w-full max-w-xs select-primary"
            name="priority"
            required
            onChange={(e) => hanldeInput(e)}
          >
            <option disabled selected>
              priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <input type="submit" value="add" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default TodosPosts;
