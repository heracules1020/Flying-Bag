import React from "react";
import { Row, Col } from "reactstrap";

const dividerStyle = {
  height: "10px",
  backgroundColor: "#2F72E8",
  marginTop: "60px",
  marginBottom: "110px"
};

const Divider = props => {
  return (
    <React.Fragment>
      <Row className={`mx-0 mx-md-n3 ${props.reverse && "flex-row-reverse"}`}>
        <Col xs="6" md="5" className="px-0 px-md-3">
          <div className="divider w-100" style={dividerStyle}></div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Divider;
