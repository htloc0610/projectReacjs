import "./App.css";
import { useState } from "react";

const orders = [100, 200, 300];

function App() {
  const [info, setInfo] = useState({
    name: "Nguyễn Văn A",
    age: 18,
    address: "Ha Noi, VN",
  });

  const handleUpdate = () => {
    setInfo((prev) => {
      // Logic

      return {
        ...prev,
        bio: "Yêu màu hồng",
      };
    });
  };

  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Increase</button>
    </div>
  );
}

export default App;
