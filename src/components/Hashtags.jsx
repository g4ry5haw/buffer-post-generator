import React, { useState } from "react";

const Hashtags = () => {
  const [copyInsta, setCopyInsta] = useState(
    "#learnfrench #apprendrelefrançais #parlefrançais #parlerfrançais #speakfrench #lovefrench #oldham #rochdale #adultlearning #frenchphrases"
  );
  const [copyTwitter, setCopyTwitter] = useState("#langtwt #learnfrench");

  const handleCopyInsta = () => {
    navigator.clipboard.writeText(copyInsta);
  };
  const handleCopyTwitter = () => {
    navigator.clipboard.writeText(copyTwitter);
  };

  return (
    <div>
      <div>
        <p>Instagram hashtags</p>
        <textarea
          className="instaTextBox"
          name="instaHashtags"
          cols="40"
          rows="5"
          value={copyInsta}
          onChange={(e) => setCopyInsta(e.target.value)}
        />
      </div>
      <div>
        <button className="copyHashtagButton" onClick={handleCopyInsta}>
          Copy Insta #
        </button>
      </div>
      <div>
        <p>Twitter hashtags</p>
        <textarea
          className="twitterTextBox"
          name="twitterHashtags"
          cols="40"
          rows="2"
          value={copyTwitter}
          onChange={(e) => setCopyTwitter(e.target.value)}
        />
      </div>
      <div>
        <button className="copyHashtagButton" onClick={handleCopyTwitter}>
          Copy Twitter #
        </button>
      </div>
    </div>
  );
};

export default Hashtags;
