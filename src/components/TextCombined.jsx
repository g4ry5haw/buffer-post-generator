import React from "react";

const TextCombined = ({ french, english, emoji }) => {
  // don't delete gap - it's used to copy the right format for pasting in Buffer
  const combinedText = `${french} ${emoji}

${english} ${emoji}`;

  return (
    <div className="wedCombinedText">
      {french} {emoji}
      <br />
      <br />
      {english} {emoji}
      <br />
      <br />
      <button onClick={() => navigator.clipboard.writeText(combinedText)}>
        Copy text for Buffer
      </button>
    </div>
  );
};

export default TextCombined;
