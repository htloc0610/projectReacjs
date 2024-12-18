import "./App.css";
import { useState } from "react";

// One-way-binding, two-way-binding

// Respond from API
const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(name, email);
  };

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} value={name}></input>
      <input onChange={(e) => setEmail(e.target.value)} value={email}></input>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
