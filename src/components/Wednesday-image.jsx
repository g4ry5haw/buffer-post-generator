import React from "react";
import { useRef, useState } from "react";
// import wednesdayImage from "../assets/wednesday_word_background.png";
// import wednesdayImage from "https://www.acebits.in/static/media/structure.19ad511fefb2168aa599f86b71d8900b.svg";
import "../App.css";

const Wednesday = () => {
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState("");

  const handleClick = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  const wednesdayImage =
    "https://www.acebits.in/static/media/structure.19ad511fefb2168aa599f86b71d8900b.svg";

  return (
    <div className="container">
      <div>
        <input
          className="wedWord"
          ref={inputRef}
          type="text"
          id="wedWord"
          name="wedWord"
          placeholder="Wednesday word"
        />
        <button onClick={handleClick}>Update</button>
      </div>

      <div className="banner">
        <img className="wedImage" src={wednesdayImage} alt="" />
        {/* <img
          className="wedImage"
          src="https://www.acebits.in/static/media/structure.19ad511fefb2168aa599f86b71d8900b.svg"
          alt=""
        /> */}
        <h2 className="wedImageText">{updated}</h2>
      </div>
    </div>
  );
};

export default Wednesday;
