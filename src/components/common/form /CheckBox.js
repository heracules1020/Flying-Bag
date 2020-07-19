import React from "react";
const labelStyle = {
  whiteSpace: "normal",
  textAlign: "left",
  fontSize: "12px",
  color: "#05378E",
  fontFamily: "ITC Avant Garde Gothic Pro Book"
};

const divStyle = {
  minHeight: "17px"
};

const CheckBox = React.memo(props => {
  return (
    <div className={"pretty p-icon p-round " + props.className}>
      <input type="checkbox" onChange={props.onCheckChange} />
      <div
        style={divStyle}
        className="state p-primary-o d-flex align-items-center"
      >
        <i className="icon fa fa-check"></i>
        <label></label>
        {props.labeltext && (
          <p style={labelStyle} className="ml-2 mb-0">
            {props.labeltext}
          </p>
        )}
      </div>
    </div>
  );
});
export default CheckBox;
