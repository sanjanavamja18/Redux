import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import React from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            <div>
              <h3>test</h3>
              <i
                className="far fa-trash-alt add-btn"
                title="delete item"
                onClick={() =>
                  dispatch(deleteTodo(inputData), setInputData(""))
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
