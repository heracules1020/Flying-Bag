import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Row, Col, DropdownItem } from "reactstrap";
import FlightInfoItem from "../FlightInfoItem";
import flightData from "../../../view/reservation/data";

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#F6F6F6",
    borderRadius: "3px 3px 0 0"
  },
  divider: {
    backgroundColor: "rgba(5,55,142,0.6)"
  }
});
const LuggageCharge = props => {
  return (
    <div className={"w-100 py-4 " + css(styles.parent)}>
      <Row className="mx-0">
        <Col>
          <p className="blue-deep campton-bold mb-0">Vol</p>
        </Col>
        <Col className="text-right">
          <p className="blue-deep campton-bold mb-0">FR1123</p>
        </Col>
      </Row>
      <Row className="mx-0">
        <Col>
          <DropdownItem
            divider
            className={css(styles.divider) + " " + props.borderClass1}
          />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col className="px-0">
          {flightData.map((item, index) => {
            return (
              <FlightInfoItem key={index} flightData={item} page="charge" />
            );
          })}
        </Col>
      </Row>
      <Row className="mx-0">
        <Col className="mt-4">
          <p className="blue-deep campton-bold">Bagages</p>
        </Col>
      </Row>
      <Row className="mx-0">
        <Col className="text-left itc-book blue-deep pl-5">Type 08</Col>
        <Col className="text-right itc-book blue-deep">2x 10 &euro;</Col>
      </Row>
      <Row className="mx-0">
        <Col className="text-left itc-book blue-deep pl-5">Type 10</Col>
        <Col className="text-right itc-book blue-deep">3x 10 &euro;</Col>
      </Row>
      <Row className="mx-0">
        <Col className="text-left itc-book blue-deep pl-5">Type 22R</Col>
        <Col className="text-right itc-book blue-deep">2x 30 &euro;</Col>
      </Row>
      <Row className="mx-0 mt-4">
        <Col>
          <DropdownItem
            divider
            className={css(styles.divider) + " " + props.borderClass2}
          />
        </Col>
      </Row>
      <Row className="mx-0 mt-3">
        <Col
          className={
            "text-left blue-deep " +
            `${props.showTTC ? "" : "compton-bold font-weight-bold"}`
          }
        >
          Total HT
        </Col>
        <Col className="text-right itc-book blue-deep">1000 &euro;</Col>
      </Row>
      {props.showTTC && (
        <Row className="mx-0">
          <Col className="text-left itc-bold font-weight-bold blue-deep">
            Total TTC
          </Col>
          <Col className="text-right itc-bold blue-deep">1000 &euro;</Col>
        </Row>
      )}
    </div>
  );
};

export default LuggageCharge;
