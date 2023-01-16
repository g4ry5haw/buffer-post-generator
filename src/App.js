// import { Emoji } from "emoji-picker-react";
import Emoji from "./components/Emoji";
import { useState } from "react";
import "./App.css";
import Hashtags from "./components/Hashtags";
import TextCombined from "./components/TextCombined";
// import Nav from "./components/Nav";
import TextEnglish from "./components/TextEnglish";
import TextFrench from "./components/TextFrench";
import Wednesday from "./components/Wednesday-image";
// import EmojiComponent from "./components/EmojiPicker";

function App() {
  // const [french, setFrench] = useState("");
  // const [english, setEnglish] = useState("");

  const [french, setFrench] = useState("Le mot de mecredi ");
  const [english, setEnglish] = useState("Wednesday's word is ");
  const [emoji, setEmoji] = useState(" 🙂");

  return (
    <div className="App">
      {/* <Nav /> */}
      <Wednesday />
      <TextFrench french={french} setFrench={setFrench} />
      <TextEnglish english={english} setEnglish={setEnglish} />
      <Emoji emoji={emoji} setEmoji={setEmoji} />
      <TextCombined french={french} english={english} emoji={emoji} />
      <Hashtags />
    </div>
  );
}

export default App;
