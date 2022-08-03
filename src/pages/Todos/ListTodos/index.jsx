import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";
import {  toast } from 'react-toastify';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://localhost:5001/todo-server-5f960/us-central1/app/todo"
      );
      const data = await res.json();
      setTodos(data.data);
    })();
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    (
      async () => {
        const res = await fetch(`http://localhost:5001/todo-server-5f960/us-central1/app/todo/${id}`,{
          method:'DELETE'
        })
        const data = await res.json();
        console.log(data);
        if(data.success){
          const remaing = todos.filter(todo => todo.id !== id);
          setTodos(remaing)
          toast.success(data.msg);
        } else {
          toast.error(data.msg)
        }
      }
    )()
  };
  console.log(todos);
  return (
    <div>
      <div className="space-y-5">
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default ListTodos;
