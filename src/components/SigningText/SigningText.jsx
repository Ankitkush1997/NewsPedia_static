import React from "react";
import "./SigningText.css";

const SigningText = () => {
  return (
    <>
      <div className="content">
        <h2 className="text" data-text="<====Warning====>">
        ==== Warning ====
        </h2>
      </div>
      <div
        className="content"
        style={{ marginBottom: -"70px", marginTop: "-36px" }}
      >
        <h2 className="text" data-text="This is a Demo Project">
          This is a Demo Project
        </h2>
      </div>
    </>
  );
};

export default SigningText;
