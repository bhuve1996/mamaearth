import React, { useState } from "react";
import pdf from "../../UBTAN SHAADI WALA GLOW CONTESTCAMPAIGN.pdf";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {" "}
          <a href={pdf} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        {/* <div className="toggle">{isActive ? "-" : "+"}</div> */}
      </div>
      {/* {isActive && <div className="accordion-content">{content}</div>} */}
    </div>
    // UBTAN SHAADI WALA GLOW CONTESTCAMPAIGN
  );
};

export default Accordion;
