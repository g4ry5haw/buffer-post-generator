// import { useState } from "react";
import "./App.css";
// import Hashtags from "./components/Hashtags";
import TextCombined from "./components/TextCombined";
// import Nav from "./components/Nav";
// import TextEnglish from "./components/TextEnglish";
// import TextFrench from "./components/TextFrench";
import Wednesday from "./components/Wednesday-image";

function App() {
  // const [french, setFrench] = useState("");
  // const [english, setEnglish] = useState("");

  // console.log(french, "app french");

  return (
    <div className="App">
      {/* <Nav /> */}
      <Wednesday />
      {/* <TextFrench setFrench={setFrench} /> */}
      {/* <TextEnglish setEnglish={setEnglish} /> */}
      {/* <Hashtags /> */}
      {/* <TextCombined french={french} english={english} /> */}
      <TextCombined />
    </div>
  );
}

export default App;
