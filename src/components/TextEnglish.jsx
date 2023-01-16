import React from "react";
// import { useRef } from "react";
import "../App.css";

const TextEnglish = ({ english, setEnglish, setEnglishSentence }) => {
  const handleChange = (e) => {
    setEnglish(e.target.value);
  };

  const handleSentence = (e) => {
    setEnglishSentence(e.target.value);
  };

  return (
    <div>
      <textarea
        className="wedTextBox"
        name="wedText"
        id="wedText"
        // ref={inputRef}
        // cols="60"
        rows="3"
        defaultValue={english}
        onChange={handleChange}
      />
      <textarea
        className="wedTextBox"
        name="wedSentence"
        // ref={inputRef}
        // cols="60"
        rows="2"
        placeholder="English sentence..."
        onChange={handleSentence}
      />
    </div>
  );
};

export default TextEnglish;
