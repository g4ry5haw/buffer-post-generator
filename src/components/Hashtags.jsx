import React from "react";

const Hashtags = () => {
  return (
    <div>
      <p>Instagram hashtags</p>
      <textarea
        className="wedTextBox"
        name="instaHashtags"
        cols="40"
        rows="5"
        defaultValue={
          "#learnfrench #apprendrelefrançais #parlefrançais #parlerfrançais #speakfrench #lovefrench #oldham #rochdale #adultlearning #frenchphrases"
        }
      />
      <p>Twitter hashtags</p>
      <textarea
        className="wedTextBox"
        name="twitterHashtags"
        cols="40"
        rows="5"
        defaultValue={"#langtwt #learnfrench"}
      />
    </div>
  );
};

export default Hashtags;
