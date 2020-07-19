import React, { useState } from "react";
import { Row, Col, Label, DropdownItem, Button } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import RadioBox from "../common/form /RadioBox";
import ProhibitedGoods from "./ProhibitedGoods";

const styles = StyleSheet.create({
  btn1: {
    height: "36px",
    width: "120px"
  }
});
const SecurityQuestion = React.memo(props => {
  const [formValueList, setFormVale] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: ""
  });
  const [isCollapse, setCollapse] = useState(false);
  const [isConfirmPolicy, setConfirmPolicy] = useState(false);
  const handleCheckRadio = event => {
    setFormVale({
      ...formValueList,
      [event.target.name]: event.target.value
    });
  };
  const handleCollapse = () => {
    setCollapse(!isCollapse);
  };
  const handleCheck = () => {
    setConfirmPolicy(!isConfirmPolicy);
  };
  const onPrev = () => {
    props.prev();
  };

  const onNext = () => {
    props.next();
  };
  return (
    <>
      <Row className="mx-0">
        <Label className="font-22 mb-0 campton-bold blue-light">
          Questions de sécurité
        </Label>
      </Row>
      <Row className="mx-0 mb-3">
        <DropdownItem divider className="w-100" />
      </Row>
      <Row className="mx-0 mb-4">
        <Label className="w-100 text-left font-14 itc-book blue-deep">
          Répondez par oui ou non aux questions suivantes :{" "}
        </Label>
      </Row>
      <Row className="mx-0 justify-content-center">
        <Col md="7" xs="9" className=""></Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 justify-content-between d-flex"
        >
          <p className="font-12 itc-demi blue-deep">Oui</p>
          <p className="font-12 itc-demi blue-deep">Non</p>
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          Quam pellentesque nec nam aliquam sem et tortor consequat id ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question1" />
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          Leo duis ut diam quam nulla. Sagittis id consectetur purus ut faucibus
          ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question2" />
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          Vitae turpis massa sed elementum tempus egestas sed sed risus ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question3" />
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          Sit amet massa vitae tortor condimentum lacinia. Ornare arcu odio ut
          sem nulla pharetra ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question4" />
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          Quam vulputate dignissim suspendisse in est ante in nibh mauris. Sed
          cras ornare arcu dui vivamus ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question5" />
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          Nec nam aliquam sem et tortor. Rutrum tellus pellentesque eu tincidunt
          tortor aliquam nulla facilisi cras ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question6" />
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center mb-3">
        <Col md="7" xs="9" className="itc-book blue-deep font-14">
          A pellentesque sit amet porttitor eget dolor morbi. Sed turpis
          tincidunt id aliquet ?
        </Col>
        <Col
          md="2"
          xs="3"
          className="ml-lg-5 pt-1 px-0 d-flex justify-content-between"
        >
          <RadioBox onChange={handleCheckRadio} name="question7" />
        </Col>
      </Row>
      <Row className="mx-0 mt-5 d-flex justify-content-between position-relative">
        <Label className="font-22 mb-0 campton-bold blue-light">
          Consulter la liste des marchandises interdites
        </Label>
        <i
          className={
            "fa fa-angle-right float-right " + (isCollapse ? " active" : "")
          }
          onClick={handleCollapse}
        ></i>
      </Row>
      <Row className="mx-0 mb-3">
        <DropdownItem divider className="w-100" />
      </Row>
      <Row className="mx-0">
        <ProhibitedGoods isCollapse={isCollapse} handleCheck={handleCheck} />
      </Row>

      <Row className="mx-0">
        <Col xs="11" className="my-5 px-xs-2 px-md-0 text-right">
          <Button
            className={"font-12 mr-3 large-border-radius " + css(styles.btn1)}
            onClick={onPrev}
          >
            Retour
          </Button>
          <Button
            color="primary"
            disabled={!isConfirmPolicy}
            onClick={onNext}
            className={
              "bg-blue-deep font-12 large-border-radius " + css(styles.btn1)
            }
          >
            Valider
          </Button>
        </Col>
      </Row>
    </>
  );
});
export default SecurityQuestion;
