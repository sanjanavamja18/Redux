import React, { useState } from "react";
import { useCookies } from "react-cookie";

const App = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("Name", name, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
  };
  return (
    <div className="App">
      <h1>Name:</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Password:</h1>
      <input
        type="password"
        placeholder="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <br></br>
      <div>
        <button onClick={handle}>Set Cookie</button>
      </div>
    </div>
  );
};
export default App;
