import React from "react";

const TextCombined = ({ french, english }) => {
  return (
    <div className="wedCombinedText">
      {french}
      <br />
      <br />
      {english}
    </div>
  );
};

export default TextCombined;
