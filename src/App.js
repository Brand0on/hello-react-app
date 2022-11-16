import "./App.css";
import Foto from "./components/navBar";
import Greeting from "./components/SayHello";
import Assets from "./components/assets";

function App() {
  return (
    <div className="App">
      <Foto />
      <Greeting />
      <Assets />
    </div>
  );
}

export default App;
