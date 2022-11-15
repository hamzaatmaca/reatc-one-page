import React from "react";

const Button = (props) => {
  const { text, backgroundColor, textColor } = props;
  return (
    <React.Fragment>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        className="button_comp"
      >
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;
