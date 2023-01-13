import "./App.css";
import Nav from "./components/Nav";
import TextEnglish from "./components/TextEnglish";
import TextFrench from "./components/TextFrench";
import Wednesday from "./components/Wednesday-image";

function App() {
  return (
    <div className="App">
      <Nav />
      <Wednesday />
      <TextFrench />
      <TextEnglish />
    </div>
  );
}

export default App;
