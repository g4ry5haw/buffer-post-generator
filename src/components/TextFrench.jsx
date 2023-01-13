import React from "react";
import { useRef } from "react";
import "../App.css";

const TextFrench = () => {
  const inputRef = useRef("");
  // const [updated, setUpdated] = useState("");

  return (
    <div>
      <textarea
        className="wedTextBox"
        name="wedText"
        id="wedText"
        ref={inputRef}
        cols="40"
        rows="5"
        defaultValue={"Le mot de mecredi "}
      ></textarea>
    </div>
  );
};

export default TextFrench;
