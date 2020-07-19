import React from "react";
import { Row, Col, Label } from "reactstrap";
import Dot from "./Dot";
const rowStyle = {
  marginBottom: "110px"
};
const imgStyle = {
  maxHeight: "268px",
  maxWidth: "331px",
  width: "100%",
  height: "100%"
};

const HomeService = props => {
  return (
    <React.Fragment>
      <Row
        className={`mx-0 mx-md-n3 justify-content-center ${props.content
          .reverse && "flex-row-reverse"}`}
        style={rowStyle}
      >
        <Col md="4" className="pl-4">
          <Label
            className={`font-weight-bold service-title ${props.content.label2 &&
              "mb-0"}`}
          >
            {props.content.label1}
          </Label>
          {props.content.label2 && (
            <Label className="font-weight-bold service-title d-block">
              {props.content.label2}
            </Label>
          )}
          <Dot />
          <p className="description">{props.content.description}</p>
        </Col>
        <Col md="4" className="px-0 text-center">
          <img src={props.content.img} style={imgStyle} alt="img-section1" />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default HomeService;
