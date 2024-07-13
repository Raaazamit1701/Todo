import React, { useState } from "react";
import { v4 as uniqueKey } from "uuid";

export default function Todo() {
  const [insertTodo, setInserttodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const key = uniqueKey();
  const Addtodo = (inserted) => {
    const newData = {
      id: key,
      todo: inserted,
      status: true,
    };
    setTodoData([...todoData, newData]);
    setInserttodo("");
  };
  // update todo
  const EditTodo = (id, todo) => {
    setEditId(id);
    setEditText(todo);
  };
  // update 
  const update = (id)=>{
    const updataediting = todoData.map((e)=>{
        return  (id === e.id ?{...e,todo:editText}:e)
    })
    setTodoData(updataediting);
    setEditId(null);
    setEditText('');
  }
  // delete todo
  const DeleteTodo = (id) => {
    const updateData = todoData.filter((e) => {
      return e.id !== id;
    });
    setTodoData(updateData);
  };

  return (
    <div className="flex border border-black m-10 gap-5">
      <div className=" flex flex-col  border border-green-200 w-[30%] h-[20vh] ">
        <input
          type="text"
          placeholder="type somthing.."
          value={insertTodo}
          onChange={(e) => setInserttodo(e.target.value)}
          className=" border border-black"
        ></input>
        <button className=" bg-blue-600" onClick={() => Addtodo(insertTodo)}>
          Add todo
        </button>
      </div>
      <div className=" w-[65%] border border-blue-800 h-[60vh] flex flex-wrap gap-3">
        {todoData.map((e) => {
          return (
            <div className=" border border-pink-600 w-[200px] h-[100px] relative">
              {editId === e.id ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={e=>setEditText(e.target.value)}
                    >
                    </input>
                    <button onClick={()=>update(e.id)}>Save</button>
                </>
              ) : (
                <>
                  <p>{e.todo}</p>
                  <div className=" absolute top-2 right-2">
                    <p onClick={() => EditTodo(e.id, e.todo)}>E</p>
                    <p onClick={() => DeleteTodo(e.id)}>D</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
