import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";

const ListTodos = () => {
  const {
    data: todos,
    isLoading,
    refetch,
  } = useQuery(["todos"], () =>
    fetch("http://localhost:5001/todo-server-5f960/us-central1/app/todo").then(
      (res) => res.json()
    )
  );


  console.log(todos);

  const deleteTodo = (id) => {
    console.log(id);
    fetch(
      `http://localhost:5001/todo-server-5f960/us-central1/app/todo/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("d", data);
        if (data.success) {
          refetch();
          toast.success(data.msg);
        } else {
          toast.error(data.msg);
        }
      })
      .catch((err) => console.log(err.message));
  };
  console.log(todos);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="space-y-5">
            {todos?.data?.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                refetch={refetch}
                deleteTodo={deleteTodo}
                isLoading={isLoading}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ListTodos;
