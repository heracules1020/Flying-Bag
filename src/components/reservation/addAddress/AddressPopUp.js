import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Label,
  DropdownItem,
  ButtonToggle,
  FormGroup,
  Input
} from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyleSheet, css } from "aphrodite";
import { addAddress } from "../../../redux/action";
import PopUp from "../../common/popup";

const styles = StyleSheet.create({
  btn: {
    height: "36px",
    width: "180px"
  }
});

const notify = () => toast.success("Enregistré avec succès");

const AddressPopUp = React.memo(props => {
  const dispatch = useDispatch();
  let addressList = useSelector(
    state => state.addressList,
    () => {}
  );
  const initial_State = {
    wording: "",
    street: "",
    additionalInfo: "",
    postalCode: "",
    city: ""
  };
  const [formValueList, setFormVale] = useState(initial_State);
  useEffect(() => {
    setFormVale({
      wording: props.defaultAddress.wording ? props.defaultAddress.wording : "",
      street: props.defaultAddress.street ? props.defaultAddress.street : "",
      additionalInfo: props.defaultAddress.additionalInfo
        ? props.defaultAddress.additionalInfo
        : "",
      postalCode: props.defaultAddress.postalCode
        ? props.defaultAddress.postalCode
        : "",
      city: props.defaultAddress.city ? props.defaultAddress.city : ""
    });
  }, [props.defaultAddress]);
  const onClosePopUp = () => {
    props.handlePopUp();
  };

  const onHandleChangeInput = e => {
    setFormVale({
      ...formValueList,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    if (props.defaultAddressIndex === 0 || props.defaultAddressIndex) {
      addressList[props.defaultAddressIndex].wording = formValueList.wording;
      addressList[props.defaultAddressIndex].street = formValueList.street;
      addressList[props.defaultAddressIndex].additionalInfo =
        formValueList.additionalInfo;
      addressList[props.defaultAddressIndex].postalCode =
        formValueList.postalCode;
      addressList[props.defaultAddressIndex].city = formValueList.city;
    } else {
      if (!addressList) addressList = [];
      addressList.push(formValueList);
    }
    dispatch(addAddress(addressList));
    setFormVale(initial_State);
    notify();
  };

  return (
    <>
      <PopUp
        showModal={props.isShowPopUp}
        onCloseModal={onClosePopUp}
        modalClassName="modal-lg"
        headerClassName="pb-0"
        contentClassName="pt-2"
      >
        <Row className="mx-0 mx-md-5">
          <Label className="font-22 campton-bold blue-light">
            Ajouter une nouvelle adresse
          </Label>
        </Row>
        <Row className="mx-0 mx-md-5">
          <Col className="px-0">
            <DropdownItem divider />
          </Col>
        </Row>
        <Row className="mx-0 mx-md-5">
          <Col sm="12" className="px-0 mt-1">
            <Label className="campton-bold black-blue">Propriétaire</Label>
          </Col>
          <Col md="6" className="px-0 pr-md-3 mt-2">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="firstName" className="campton-regular black-blue">
                Libellé
              </Label>
              <Input
                id="wording"
                autoComplete="off"
                placeholder="Ex: maison n*1"
                name="wording"
                value={formValueList.wording}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mx-0 mx-md-5">
          <Col md="6" className="px-0 pr-md-3 mt-2">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="firstName" className="campton-regular black-blue">
                Rue
              </Label>
              <Input
                id="street"
                autoComplete="off"
                placeholder="Ex: rue de la Gaiété"
                name="street"
                value={formValueList.street}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col sm="12" className="px-0 mt-1">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="firstName" className="campton-regular black-blue">
                Compléments d’informations
              </Label>
              <Input
                id="additionalInfo"
                autoComplete="off"
                placeholder="Digicode, code étage, accés,..."
                name="additionalInfo"
                type="textarea"
                rows="5"
                value={formValueList.additionalInfo}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>

          <Col md="6" className="px-0 pr-md-3 mt-2">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="firstName" className="campton-regular black-blue">
                Code postal
              </Label>
              <Input
                id="postalCode"
                autoComplete="off"
                placeholder="ex: 75013"
                name="postalCode"
                value={formValueList.postalCode}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col md="6" className="px-0 pl-md-3 mt-2">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="lastName" className="campton-regular black-blue">
                Ville
              </Label>
              <Input
                id="city"
                autoComplete="off"
                placeholder="ex:Paris"
                name="city"
                value={formValueList.city}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="my-4 mx-0 mx-md-5">
          <Col sm="12" className="px-0 text-right">
            <ButtonToggle
              color="primary"
              onClick={onSubmit}
              className={
                "bg-blue-light ml-auto large-border-radius " + css(styles.btn)
              }
            >
              Enregistrer l’adresse
            </ButtonToggle>
          </Col>
        </Row>
      </PopUp>
    </>
  );
});

export default AddressPopUp;
