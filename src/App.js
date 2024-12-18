// import "./App.css";
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
  const [checked, setChecked] = useState();
  const handleSubmit = () => {};

  console.log(checked);

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => {
              setChecked(course.id);
            }}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
