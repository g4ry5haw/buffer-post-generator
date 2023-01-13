import "./App.css";
import Hashtags from "./components/Hashtags";
// import Nav from "./components/Nav";
import TextEnglish from "./components/TextEnglish";
import TextFrench from "./components/TextFrench";
import Wednesday from "./components/Wednesday-image";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Wednesday />
      <TextFrench />
      <TextEnglish />
      <Hashtags />
    </div>
  );
}

export default App;
