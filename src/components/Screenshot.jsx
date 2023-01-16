import React, { createRef } from "react";
// import {disable-next-line} from "eslint";
// import Text from "./Text";
import { useScreenshot, createFileName } from "use-react-screenshot";

const Screenshot = () => {
  const ref = createRef(null);
  // eslint-disable-next-line
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  console.log(image);

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
      {/* <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        fsdfsdfs
      </div> */}
    </div>
  );
};

export default Screenshot;
