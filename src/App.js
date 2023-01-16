import { useState } from "react";
import "./App.css";
import Hashtags from "./components/Hashtags";
import TextCombined from "./components/TextCombined";
// import Nav from "./components/Nav";
import TextEnglish from "./components/TextEnglish";
import TextFrench from "./components/TextFrench";
import Wednesday from "./components/Wednesday-image";

function App() {
  // const [french, setFrench] = useState("");
  // const [english, setEnglish] = useState("");

  const [french, setFrench] = useState("Le mot de mecredi ");
  const [english, setEnglish] = useState("Wednesday's word is ");

  return (
    <div className="App">
      {/* <Nav /> */}
      <Wednesday />
      <TextFrench french={french} setFrench={setFrench} />
      <TextEnglish english={english} setEnglish={setEnglish} />
      <Hashtags />
      <TextCombined french={french} english={english} />
    </div>
  );
}

export default App;
