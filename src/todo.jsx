import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo.css";
export default function Todo() {
  let [arr, setArr] = useState([]);
  let [arr1, setArr1] = useState([""]);
  function addTask() {
    if (arr1[0].trim() != "") {
      setArr((prevTodo) => {
        return [...prevTodo, { task: arr1, id: uuidv4(), isDone: false }];
      });
    }

    setArr1([""]);
  }
  function updateValue(event) {
    setArr1(event.target.value);
  }
  function done(id) {
    setArr((todo) =>
      todo.map((arr) => {
        if (arr.id == id) {
          return { ...arr, done: true };
        } else {
          return arr;
        }
      })
    );
  }
  function deleteTodo(id) {
    setArr((prev) => arr.filter((prev) => prev.id != id));
  }
  return (
    <div>
      <div className="inputSection">
        <input type="text" placeholder="Add a task" onChange={updateValue}
          value={arr1}
          name=""
          id=""
        />
          <button id="enterbtn" onClick={addTask}>Add</button>
      </div>
    
      <div className="listArea">
        <ul>
          {arr.map((a) => (
            <li key={a.id}>
              <span
                style={
                  a.done
                    ? {
                        textDecoration: "line-through",
                        textDecorationColor: "red",
                      }
                    : {}
                }
              >
                {a.task}
              </span>
              <span>
                
                <button id="delete" onClick={() => deleteTodo(a.id)}>Delete</button>
                <button id="mark" onClick={() => done(a.id)}>Done</button>

              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
