import React, { useState } from "react";
import { Animated } from "react-animated-css";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="toggle">{isActive ? "-" : "+"}</div>
      </div>

      {isActive && (
        <Animated
          animationIn="slideInUp"
          animationOut="slideInDown"
          isVisible={true}
        >
          <div className="accordion-content">{content}</div>
        </Animated>
      )}
    </div>
  );
};

export default Accordion;
