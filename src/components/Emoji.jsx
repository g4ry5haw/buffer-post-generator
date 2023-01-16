import React from "react";
import "../App.css";

const Emoji = ({ emoji, setEmoji }) => {
  const handleChange = (e) => {
    setEmoji(e.target.value);
  };

  return (
    <div emojiTextBox>
      <textarea
        className="emojiTextBox"
        name="emojiTextBox"
        rows="2"
        defaultValue={emoji}
        onChange={handleChange}
      />
    </div>
  );
};

export default Emoji;
