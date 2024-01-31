// import frame from "../images/frame.png";
// import grape from "../images/grapes.png";

// const Section3 = () => {

//   //section-3 effects:
//   document.querySelector(".grape-img").addEventListener("mouseover", () => {
//     document.querySelector(".section-3-wrapper").style.opacity = "0.5";
//   });

//   document.querySelector(".grape-img").addEventListener("mouseout", () => {
//     document.querySelector(".section-3-wrapper").style.opacity = "1";
//   });

//   return (
//     <div className="section-wrapper section-3-wrapper">
//       <h1 className="section-3-heading">The best quality</h1>
//       <img src={frame} alt="Grapes Frame" className="frame-img" />
//       <img src={grape} alt="Grapes" className="grapes-img" />
//     </div>
//   );
// };

// export default Section3;

import React, { useState } from 'react';
import frame from "../images/frame.png";
import grape from "../images/grapes.png";

const Section3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const wrapperStyle = {
    opacity: isHovered ? 0.5 : 1,
  };

  return (
    <div
      className="section-wrapper section-3-wrapper"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={wrapperStyle}
    >
      <h1 className="section-3-heading">The best quality</h1>
      <img src={frame} alt="Grapes Frame" className="frame-img" />
      <img src={grape} alt="Grapes" className="grapes-img" />
    </div>
  );
};

export default Section3;
