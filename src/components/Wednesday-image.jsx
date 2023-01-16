import React, { createRef } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { useRef, useState } from "react";
import "../App.css";
import wednesdayImage from "../assets/images/wednesday_word_background.png";

const Wednesday = () => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const inputRef = useRef(null);
  const [updated, setUpdated] = useState("");

  const handleChange = () => {
    // 👇 "inputRef.current.value" is input value
    setUpdated(inputRef.current.value);
  };

  // const wednesdayImage =
  //   "https://www.acebits.in/static/media/structure.19ad511fefb2168aa599f86b71d8900b.svg";

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
      </div>

      <div className="banner" ref={ref}>
        <img className="wedImage" src={wednesdayImage} alt="" />
        <h2 className="wedImageText">{updated}</h2>
      </div>

      <div>
        <button onClick={downloadScreenshot}>Download image</button>
      </div>
    </div>
  );
};

export default Wednesday;
