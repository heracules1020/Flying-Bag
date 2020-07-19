import React from "react";

const RadioBox = React.memo(props => {
  return (
    <React.Fragment>
      <div className={"pretty p-icon p-round mr-0" + props.bodyClass1}>
        <input
          type="radio"
          name={props.name}
          value="0"
          onChange={props.onChange}
        />
        <div className="state p-primary-o ">
          <i className="icon fa fa-check"></i>
          <label className="campton-bold font-weight-bold font-15 blue-deep">
            {props.label1}
          </label>
        </div>
      </div>

      <div className={"pretty p-icon p-round mr-0 " + props.bodyClass2}>
        <input
          type="radio"
          name={props.name}
          value="1"
          onChange={props.onChange}
        />
        <div className="state p-success-o">
          <i className="icon fa fa-check"></i>
          <label className="campton-bold font-weight-bold font-15 blue-deep">
            {props.label2}
          </label>
        </div>
      </div>
    </React.Fragment>
  );
});
export default RadioBox;
