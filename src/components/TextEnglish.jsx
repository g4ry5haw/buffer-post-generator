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
        // cols="60"
        rows="3"
        defaultValue={english}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextEnglish;
