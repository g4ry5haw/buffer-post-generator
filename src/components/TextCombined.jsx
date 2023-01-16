import React from "react";

const TextCombined = ({
  french,
  frenchSentence,
  english,
  englishSentence,
  emoji,
}) => {
  // don't delete gap - it's used to copy the right format for pasting in Buffer
  const combinedText = `${french} ${emoji}
${frenchSentence} ${emoji}

${english} ${emoji}
${englishSentence} ${emoji}`;

  return (
    <div>
      <div className="wedCombinedText">
        {french} {emoji}
        <br />
        {frenchSentence} {emoji}
        <br />
        <br />
        {english} {emoji}
        <br />
        {englishSentence} {emoji}
        <br />
        <br />
      </div>
      <div>
        <button
          className="copyTextButton"
          onClick={() => navigator.clipboard.writeText(combinedText)}
        >
          Copy text for Buffer
        </button>
      </div>
    </div>
  );
};

export default TextCombined;
