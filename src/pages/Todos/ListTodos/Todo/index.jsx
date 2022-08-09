import React from "react";
import TodoDetailModal from "./TodoDetailModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../../../components/Loading";

const Todo = ({ todo, refetch, deleteTodo, isLoading }) => {
  console.log(todo);
  const { title, id, completed } = todo;
  const getTodoDetail = (id) => {
    console.log(id);
  };

  const handleChecked = (id) => {
    console.log(id);
    fetch(
      `http://localhost:5001/todo-server-5f960/us-central1/app/todo/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" border-2 rounded-md py-3 px-2 border-primary">
          <div class=" flex justify-between">
            <label
              class="label cursor-pointer"
              onClick={() => handleChecked(id)}
            >
              <input type="checkbox" checked={completed} class="checkbox" />
            </label>
            <div>
              <p className="text-2xl">{title}</p>
            </div>
            <div>
              <button onClick={() => deleteTodo(id)} className="mr-3">
                <FontAwesomeIcon
                  className="text-error text-xl"
                  icon={faTrashCan}
                />
              </button>
              <label
                for="todoDetail"
                class="btn btn-sm btn-success modal-button"
                onClick={() => getTodoDetail(id)}
              >
                <FontAwesomeIcon icon={faInfo} />
              </label>
            </div>
          </div>

          <TodoDetailModal todo={todo} />
        </div>
      )}
    </>
  );
};

export default Todo;
