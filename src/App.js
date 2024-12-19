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
  const [checked, setChecked] = useState([]);
  const handleSubmit = () => {
    console.log({ ids: checked });
  };

  console.log(checked);

  const handleCheck = (id) => {
    setChecked((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id).sort();
      }
      return [...prev, id].sort();
    });
  };

  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
