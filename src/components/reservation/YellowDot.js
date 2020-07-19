import React from "react";
const dotStyle = {
  height: "7px",
  width: "7px",
  backgroundColor: "#FFC62E",
  borderRadius: "50%"
};

const YellowDot = () => {
  return (
    <React.Fragment>
      <div className="d-flex ml-2">
        {[1, 2, 3].map(i => {
          return <div style={dotStyle} key={i} className="mr-3"></div>;
        })}
      </div>
    </React.Fragment>
  );
};
export default YellowDot;
