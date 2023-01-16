import React from "react";
// import { useRef } from "react";
import "../App.css";

const TextFrench = ({ french, setFrench }) => {
  const handleChange = (e) => {
    setFrench(e.target.value);
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
        defaultValue={french}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextFrench;
