import "./App.css";
import Photos from "./components/navBar";
import Greeting from "./components/SayHello";
import Assets from "./components/assets";

function App() {
  return (
    <div className="App">
      <Photos />
      <Greeting />
      <Assets />
    </div>
  );
}

export default App;
