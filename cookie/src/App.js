import React, { useState } from "react";
import { useCookies } from "react-cookie";

const App = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const [token, setToken] = useState("");
  const sign = require("jwt-encode");
  const secret = "secret";

  const handle = () => {
    setCookie("Name", name, { path: "/" });
    setCookie("Password", pwd, { path: "/" });
    setToken(jwt);
    console.log("Token Created:::", jwt);

    if (setName == data.name && setPwd == data.passward) {
      console.log("Login Successfully...");
    } else {
      console.log("Logout Successfully...");
    }
  };

  const data = {
    sub: "1234567890",
    name: "sanjana",
    passward: 1234,
  };
  const jwt = sign(data, secret);

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
