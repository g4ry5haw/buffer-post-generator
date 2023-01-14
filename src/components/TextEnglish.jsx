import React from "react";
// import { useRef } from "react";
import "../App.css";

const TextEnglish = ({ english, setEnglish }) => {
  const handleChange = (e) => {
    setEnglish(e.target.value);
  };

  return (
    <div>
      <textarea
        className="wedTextBox"
        name="wedText"
        id="wedText"
        // ref={inputRef}
        cols="40"
        rows="5"
        defaultValue={"Wednesday's word is "}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEnglish;
