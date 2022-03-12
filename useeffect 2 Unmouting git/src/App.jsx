import { useState } from "react";
import { Timer } from "./Components/Timer";

import "./App.css"

function App() {
  const initial = 7
  const end = 17

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {show ? <Timer initial={initial} end={end} /> : ""}


      <button onClick={() => {
        setShow(show ? false : true)
      }}>Toggle / Unmout</button>
    </div>
  );
}

export default App;
