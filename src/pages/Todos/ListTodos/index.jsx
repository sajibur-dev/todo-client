import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
        const res = await fetch('http://localhost:5001/todo-server-5f960/us-central1/app/todo');
        const data = await res.json()
        setTodos(data.data)
    })();
  }, []);
  console.log(todos);
  return (
    <div>
      <div className="space-y-5">

      {
        todos?.map(todo => <Todo key={todo.id} todo={todo}/>)
      }
      </div>
      
      
    </div>
  );
};

export default ListTodos;
