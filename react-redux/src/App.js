import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrememt counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <button
          className="quantity__minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          -
        </button>
        {myState}
        <button
          className="quantity__plus"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
