import React from "react";

const Hashtags = () => {
  return (
    <div>
      <p>Instagram hashtags</p>
      <textarea
        className="instaTextBox"
        name="instaHashtags"
        cols="40"
        rows="5"
        defaultValue={
          "#learnfrench #apprendrelefrançais #parlefrançais #parlerfrançais #speakfrench #lovefrench #oldham #rochdale #adultlearning #frenchphrases"
        }
      />
      <p>Twitter hashtags</p>
      <textarea
        className="twitterTextBox"
        name="twitterHashtags"
        cols="40"
        rows="2"
        defaultValue={"#langtwt #learnfrench"}
      />
    </div>
  );
};

export default Hashtags;
