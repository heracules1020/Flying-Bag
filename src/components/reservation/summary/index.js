import React, { useState } from "react";
import { Row, Label, DropdownItem, Col, Button } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LuggageCharge from "../addLuggage/LuggageCharge";
import CheckBox from "../../common/form /CheckBox";

const styles = StyleSheet.create({
  btn: {
    height: "36px",
    width: "180px"
  },

  btn1: {
    height: "36px",
    width: "120px"
  }
});
const Summary = React.memo(props => {
  const [confirmSecurity, setConfirmSecurity] = useState(false);
  const deliveryDate = useSelector(state => state.deliveryDate);
  const deliveryAddressID = useSelector(state => state.deliveryAddressID);
  const addressList = useSelector(state => state.addressList);
  const deliveryTimeSlot = useSelector(state => state.deliveryTimeSlot);
  const timeSlotList = [
    { value: 1, startTime: "10", endTime: "12" },
    { value: 2, startTime: "14", endTime: "16" },
    { value: 3, startTime: "16", endTime: "18" }
  ];
  const onPrev = () => {
    props.prev();
  };
  // const onNext = () => {
  //   props.next();
  // };
  const handleCheck = () => {
    setConfirmSecurity(!confirmSecurity);
  };
  const formatDate = val => {
    let tmpDate = new Date(val);
    let month = tmpDate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    return month + "/" + tmpDate.getDate() + "/" + tmpDate.getFullYear();
  };
  return (
    <>
      <Row className="mx-0">
        <Label className="font-22 mb-0 campton-bold blue-light">
          Récapitulatif de votre commande
        </Label>
      </Row>
      <Row className="mx-0 mb-3">
        <DropdownItem divider className="w-100" />
      </Row>
      <Row className="mx-0 mb-5">
        <Label className="w-100 mb-0 text-left font-14 itc-book blue-deep">
          Diam in arcu cursus eu smod Integer malesuada nunc vel risus commodo.
        </Label>
      </Row>
      <Row className="justify-content-center py-2">
        <Col md="4" className="font-15 itc-demi blue-light">
          Adresse de livraison
        </Col>
        <Col md="4">
          <Row className="mx-0">
            <Col className="px-0 itc-book blue-deep font-15">
              <Label>{addressList[deliveryAddressID].wording}</Label>
            </Col>
          </Row>
          <Row className="mx-0">
            <Col className="px-0 itc-book blue-deep font-15">
              {addressList[deliveryAddressID].street}&nbsp;&#8213;&nbsp;
              {addressList[deliveryAddressID].codePostal}&nbsp;
              {addressList[deliveryAddressID].city}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <DropdownItem divider />
        </Col>
      </Row>
      <Row className="justify-content-center py-2">
        <Col md="4" className="font-15 itc-demi blue-light">
          Date de livraison
        </Col>
        <Col md="4" className="font-15 itc-book blue-deep">
          {formatDate(deliveryDate)}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <DropdownItem divider />
        </Col>
      </Row>
      <Row className="justify-content-center py-2 mb-5">
        <Col md="4" className="font-15 itc-demi blue-light">
          Créneau horaire
        </Col>
        <Col md="4" className="font-15 itc-book blue-deep">
          entre {timeSlotList[deliveryTimeSlot - 1].startTime}
          h00&nbsp;et&nbsp;{timeSlotList[deliveryTimeSlot - 1].endTime}h00
        </Col>
      </Row>
      <Row className="mx-0 justify-content-center ">
        <Col md="8" className="px-0 mt-5">
          <LuggageCharge
            borderClass1="blue-border"
            borderClass2="green-border"
            showTTC="true"
          />
        </Col>
      </Row>
      <Row className="mx-0 mt-5">
        <Label className="w-100 mb-0 text-left font-14 itc-book blue-deep">
          Diam in arcu cursus eu smod Integer malesuada nunc vel risus commodo.
        </Label>
      </Row>
      <Row>
        <Col>
          <CheckBox
            labeltext="J'accepte les conditions générales de vente."
            className="mb-2"
            onCheckChange={handleCheck}
          />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col xs="11" className="my-5 px-xs-2 px-md-0 text-right">
          <Button
            className={"font-12 mr-3 large-border-radius " + css(styles.btn1)}
            onClick={onPrev}
          >
            Retour
          </Button>
          <Link to="/admin">
            <Button
              color="primary"
              disabled={!confirmSecurity}
              // onClick={onNext}
              className={
                "bg-blue-deep font-12 large-border-radius " + css(styles.btn1)
              }
            >
              Valider
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
});
export default Summary;
