import React, { useState } from "react";
import TextEnglish from "./TextEnglish";
import TextFrench from "./TextFrench";

const TextCombined = () => {
  const [french, setFrench] = useState("Le mot de mecredi ");
  const [english, setEnglish] = useState("Wednesday's word is ");

  return (
    <div>
      <TextFrench french={french} setFrench={setFrench} />
      <TextEnglish english={english} setEnglish={setEnglish} />
      <div className="wedCombinedText">
        {french}
        <br />
        <br />
        {english}
      </div>
    </div>
  );
};

export default TextCombined;
