import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowefd] = useState(false);
  const [length, setLength] = useState(8);

  // const passwordGenerator = useCallback(() => {
  //   let pass = "";
  //   let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (numberAllowed) string += "0123456789";
  //   if (charAllowed) string += "!@#$%^*&*()[]{}";

  //   for (let i = 0; i < length; i++) {
  //     let pos = Math.floor(Math.random() * string.length + 1);
  //     pass += string.charAt(pos);
  //   }
  //   setPassword(pass);
  // }, [numberAllowed, charAllowed, length]);

  const copy = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^*&*()[]{}";

    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(pos);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed])
  return (
    <div className="main">
      <h1 className="heading">Password Generator</h1>
      <div className="container">
        <div className="pass">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="input_box"
            readOnly
          ></input>
          <button className="btn" onClick={copy}>copy</button>
        </div>
        <input
          type="range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        ></input>
        <label>Length : {length}</label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((e) => !e);
          }}
        ></input>
        <label>Numbers</label>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowefd((e) => !e);
          }}
        ></input>
        <label>Characters</label>
      </div>
    </div>
  );
}

export default App;
