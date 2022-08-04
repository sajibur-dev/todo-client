import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TodoDetailModal = ({ todo }) => {
  const [color,setColor] = useState("")
  const { title, description, date,priority } = todo;
  
  useEffect(()=>{
    const appliedColor = () => {
      const colors =  [{name:"High",color:"red"},{name:"Medium",color:"blue"},{name:"Low",color:"gray"}]
      const color =  colors.find((color => color.name === priority));
      setColor(color?.color)
      
  }
  appliedColor()

  },[priority])

  console.log('color',color);
  
  return (
    <div>
      <input type="checkbox" id="todoDetail" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class={`modal-box border-l-8 border-${color}-700`}>
          <label
            for="todoDetail"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">{title}</h3>
          <h2>{date}</h2>
          <p class="py-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoDetailModal;
