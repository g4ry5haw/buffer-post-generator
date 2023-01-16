import React, { createRef } from "react";
// import {disable-next-line} from "eslint";
// import Text from "./Text";
// import { useScreenshot, createFileName } from "use-react-screenshot";
import { createFileName } from "use-react-screenshot";

const Screenshot = () => {
  const ref = createRef(null);
  // eslint-disable-next-line
  // const [image, takeScreenShot] = useScreenshot({
  //   type: "image/jpeg",
  //   quality: 1.0,
  // });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div>
      <button onClick={downloadScreenshot}>Download screenshot</button>
    </div>
  );
};

export default Screenshot;
