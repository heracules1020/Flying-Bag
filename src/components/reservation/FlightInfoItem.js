import React from "react";
import CheckBox from "../common/form /CheckBox";
import { Row, Col } from "reactstrap";
const FlightInfoItem = React.memo(props => {
  return (
    <React.Fragment>
      <Row className="mx-0 justify-content-center mt-5">
        <Col className="pr-0 d-flex align-items-center">
          <CheckBox className="align-top mr-1" />
          <span className="campton-bold blue-deep">
            {props.page !== "charge" && props.flightData.flightTime + " "}
            {props.flightData.flightDirection}
          </span>
        </Col>
        <Col className="text-right itc-demi blue-deep font-12">
          {props.flightData.flightDate}
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center">
        <Col className="pl-5 itc-book blue-deep">
          {props.flightData.flightDetail}
        </Col>
      </Row>
    </React.Fragment>
  );
});

export default FlightInfoItem;
