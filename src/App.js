import "./App.css";
import { useState } from "react";

const orders = [100, 200, 300];

function App() {
  // Chỉ lấy lần đầu tiên thôi
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });

  const handleIncrease = () => {
    // Xong sẽ gọi lại hàm app
    // setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
