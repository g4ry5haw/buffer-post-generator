import React from "react";
import { useRef } from "react";
import "../App.css";

const TextEnglish = () => {
  const inputRef = useRef("");

  return (
    <div>
      <textarea
        className="wedTextBox"
        name="wedText"
        id="wedText"
        ref={inputRef}
        cols="40"
        rows="5"
        defaultValue={"Wednesday's word is "}
      />
    </div>
  );
};

export default TextEnglish;
