import React from "react";
// import { useRef } from "react";
import "../App.css";

const TextFrench = ({ french, setFrench, setFrenchSentence }) => {
  const handleChange = (e) => {
    setFrench(e.target.value);
  };

  const handleSentence = (e) => {
    setFrenchSentence(e.target.value);
  };

  return (
    <div>
      <textarea
        className="wedTextBox"
        name="wedText"
        id="wedText"
        // ref={inputRef}
        // cols="60"
        rows="2"
        defaultValue={french}
        onChange={handleChange}
      />
      <textarea
        className="wedTextBox"
        name="wedSentence"
        // ref={inputRef}
        // cols="60"
        rows="2"
        placeholder="French sentence..."
        onChange={handleSentence}
      />
    </div>
  );
};

export default TextFrench;
