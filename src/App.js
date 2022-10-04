import "./App.css";
import FatherCom from "./components/FatherCom";

function App() {
  const data = [
    {
      id: 1,
      userName: "Mohammed",
    },
    {
      id: 2,
      userName: "Mohammed",
    },
    {
      id: 3,
      userName: "Mohammed",
    },
    {
      id: 4,
      userName: "Mohammed",
    },
    {
      id: 5,
      userName: "Mohammed",
    },
  ];
  return (
    <div className="App">
      <FatherCom length={data.length} />
    </div>
  );
}

export default App;
