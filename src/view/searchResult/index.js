import React from "react";
import {
  Row,
  Container,
  DropdownItem,
  FormGroup,
  Label,
  Input,
  Col,
  ButtonToggle
} from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import FlightInfoItem from "../../components/reservation/FlightInfoItem";
import flightData from "../reservation/data";

const styles = StyleSheet.create({
  formGroup: {
    maxWidth: "195px"
  },
  icon: {
    top: "0"
  },
  select: {
    maxWidth: "215px"
  },
  button: {
    height: "36px",
    width: "120px"
  }
});

export default class SearchResult extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  onSubmit = () => {
    this.props.history.push("/service/reservation");
  };
  render() {
    return (
      <React.Fragment>
        <Row className="mx-0 justify-content-center">
          <Col xs="12" sm="10">
            <Container className="px-md-4 px-2">
              <Row className="mt-5 mx-0">
                <p className="font-22 blue-light campton-bold">Numéro de vol</p>
              </Row>
              <DropdownItem divider className="mb-5" />
              <Row className="mx-0 mb-5 justify-content-center">
                <Col md="10" className="px-2">
                  <FormGroup
                    className={
                      "has-icon position-relative mb-0 " + css(styles.formGroup)
                    }
                  >
                    <Input
                      id="flightNumber"
                      placeholder="FR1123"
                      className=" green-bordered"
                    />
                    <span
                      className={
                        "fa fa-search form-control-icon " + css(styles.icon)
                      }
                    ></span>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mx-0 mb-2 justify-content-center">
                <Col md="10" className="px-2">
                  <Label className="blue-light campton-bold font-weight-bold">
                    Informations du vol
                  </Label>
                </Col>
              </Row>
              <Row className="mx-0 mb-2 justify-content-center">
                <Col md="10" className="px-2 d-flex justify-content-between">
                  <Label className="font-16 grey-deep campton-bold font-weight-bold">
                    Vol
                  </Label>
                  <Label className="font-16 grey-deep campton-bold font-weight-bold">
                    FR1123
                  </Label>
                </Col>
              </Row>
              <Row className="mx-0 mb-2 justify-content-center">
                <Col md="11" className="px-2">
                  <DropdownItem divider />
                </Col>
              </Row>
              <Row className="mx-0 mb-5 justify-content-center">
                <Col md="8" lg="6" className="px-2">
                  {flightData.map((item, index) => {
                    return <FlightInfoItem key={index} flightData={item} />;
                  })}
                </Col>
              </Row>
              <Row className="mx-0 mb-2 justify-content-center">
                <Col md="11" className="px-2">
                  <DropdownItem divider />
                </Col>
              </Row>
              <Row className="mx-0 mb-5 justify-content-center">
                <Col xs="10" sm="6" md="6" className="px-2">
                  <FormGroup className="position-relative text-center text-md-left mb-3">
                    <Label
                      for="flightNumber"
                      className="blue-light font-weight-bold campton-bold"
                    >
                      Choisissez votre service{" "}
                      <span className="green-bordered">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="serviceType"
                      id="serviceType"
                      className={
                        "green-bordered mx-auto ml-md-0 " + css(styles.select)
                      }
                      // onChange={changeUnmountOnClose}
                    >
                      <option value="1">Domicile vers aéroport</option>
                      <option value="2">Aéroport vers domicile</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="10" sm="6" md="3" className="px-2">
                  <FormGroup className="position-relative text-center text-md-left mb-3">
                    <Label
                      for="flightNumber"
                      className="blue-light font-weight-bold campton-bold"
                    >
                      Code postal <span className="green-bordered">*</span>
                    </Label>
                    <Input
                      id="flightNumber"
                      placeholder="92600"
                      className={
                        "green-bordered mx-auto mr-md-0 " + css(styles.select)
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mx-0 mb-5 justify-content-center">
                <Col md="10" className="px-2">
                  <Label
                    for="flightNumber"
                    className="blue-deep campton-bold font-14 itc-book"
                  >
                    <span className="green-bordered">*</span> Ces champs sont
                    obligatoires pour passer à l’étape suivante.
                  </Label>
                </Col>
              </Row>
              <Row className="mx-0 mb-5 justify-content-center">
                <Col md="10" className="px-2 text-right">
                  <ButtonToggle
                    color="primary"
                    className={
                      "bg-blue-light large-border-radius mb-4 " +
                      css(styles.button)
                    }
                    onClick={this.onSubmit}
                  >
                    Valider
                  </ButtonToggle>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
