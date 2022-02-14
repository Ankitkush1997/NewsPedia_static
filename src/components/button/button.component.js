import React from "react";
import './button.styles.css';
;


const Button = () => {
  return (
    <div>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Read More</span>
      </button>
    </div>
  );
};

export default Button;
