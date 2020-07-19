import React from "react";
const dotStyle = {
  height: "6px",
  width: "6px",
  backgroundColor: "#D8E0ED",
  borderRadius: "50%"
};

const Dot = () => {
  return (
    <React.Fragment>
      <div className="d-flex mb-2 ml-2">
        {[1, 2, 3, 4, 5, 6].map(i => {
          return <div style={dotStyle} key={i} className="mr-2"></div>;
        })}
      </div>
    </React.Fragment>
  );
};
export default Dot;
