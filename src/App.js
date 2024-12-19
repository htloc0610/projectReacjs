import "./App.css";
import { useState } from "react";

function App() {
  const [list, listState] = useState(() => {
    const savedJobs = JSON.parse(localStorage.getItem("Jobs")) ?? [];
    console.log("Loaded jobs from localStorage:", savedJobs);
    return savedJobs;
  });
  const [input, inputState] = useState("");

  const changeAction = () => {
    listState((prev) => {
      const newJobs = [...prev, input];

      const jsonJobs = JSON.stringify(newJobs);

      console.log(jsonJobs);

      localStorage.setItem("Jobs", jsonJobs);

      return newJobs;
    });
    inputState("");
  };

  return (
    <div className="App">
      <input value={input} onChange={(e) => inputState(e.target.value)} />
      <button onClick={changeAction}>Add</button>

      <ul>
        {list.map((part, index) => (
          <li key={index}>{part}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
