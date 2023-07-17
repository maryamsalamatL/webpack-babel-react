import "./App.css";
import img from "./academy6.jpg";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <h1>Costum React app : {process.env.NODE_ENV}</h1>
      <p>{process.env.NAME}</p>
      <Counter />
    </div>
  );
};

export default App;
