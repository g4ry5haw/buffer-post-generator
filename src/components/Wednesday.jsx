import React from "react";
import { useRef, useState } from "react";
import wednesdayImage from "../assets/wednesday_word_background.png";
import "../App.css";

const Wednesday = () => {
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState("");

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  return (
    <div>
      <div>
        <input
          className="wedInput"
          ref={inputRef}
          type="text"
          id="wedWord"
          name="wedWord"
          placeholder="Wednesday word"
        />
        <button onClick={handleClick}>Update</button>
      </div>

      <div className="container">
        <img className="image" src={wednesdayImage} alt="" />
        <h2 className="center">{updated}</h2>
      </div>
    </div>
  );
};

export default Wednesday;
