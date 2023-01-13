import React from "react";
import { useRef, useState } from "react";
import "../App.css";
// import wednesdayImage from "../assets/wednesday_word_background.png";

const Wednesday = () => {
  const inputRef = useRef(null);

  const [updated, setUpdated] = useState("");

  // const handleClick = () => {
  //   // 👇 "inputRef.current.value" is input value
  //   setUpdated(inputRef.current.value);
  // };

  const handleChange = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  const wednesdayImage =
    "https://www.acebits.in/static/media/structure.19ad511fefb2168aa599f86b71d8900b.svg";

  return (
    <div>
      <div>
        <input
          className="wedWord"
          ref={inputRef}
          type="text"
          id="wedWord"
          name="wedWord"
          placeholder="Enter the Wednesday word here"
          onChange={handleChange}
        />
        {/* <button onClick={handleClick}>Update</button> */}
      </div>

      <div className="banner">
        <img className="wedImage" src={wednesdayImage} alt="" />
        <h2 className="wedImageText">{updated}</h2>
      </div>
    </div>
  );
};

export default Wednesday;
