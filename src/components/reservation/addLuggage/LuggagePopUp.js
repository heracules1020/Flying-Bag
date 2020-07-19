import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  Row,
  Col,
  Label,
  DropdownItem,
  ButtonToggle,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroup,
  Button
} from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyleSheet, css } from "aphrodite";
import {
  addLuggage,
  setLuggagePopUpStatus,
  setLuggageDetail
} from "../../../redux/action";
import PopUp from "../../common/popup";
import LuggageCarousel from "./luggageCarousel";
import ColorPicker from "../../common/ColorPicker";

const styles = StyleSheet.create({
  btn: {
    height: "36px",
    width: "180px"
  }
});
const buildFileSelector = () => {
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  fileSelector.setAttribute("multiple", "multiple");
  return fileSelector;
};
const notify = () => toast.success("Enregistré avec succès");

const LuggagePopUp = React.memo(props => {
  const isShowPopUp = useSelector(state => state.popupStatus);
  const luggageInfo = useSelector(state => state.luggageDetail, shallowEqual);
  let luggageList = useSelector(state => state.luggageList, shallowEqual);
  const luggageDetail = luggageInfo ? luggageInfo.info : "";
  const luggageIndex = luggageInfo ? luggageInfo.index : "";
  const dispatch = useDispatch();
  const [luggageType, setLuggageType] = useState("");
  const [luggageColor, setLuggageColor] = useState("");
  const initial_form = {
    firstName: "",
    lastName: "",
    idNumber: "",
    description: ""
  };
  const [formValueList, setFormVale] = useState(initial_form);
  useEffect(() => {
    setLuggageType(luggageDetail ? luggageDetail.luggageType : "");
    setLuggageColor(luggageDetail ? luggageDetail.luggageColor : "");
    setFormVale({
      firstName: luggageDetail ? luggageDetail.firstName : "",
      lastName: luggageDetail ? luggageDetail.lastName : "",
      idNumber: luggageDetail ? luggageDetail.idNumber : "",
      description: luggageDetail ? luggageDetail.description : ""
    });
  }, [luggageDetail, luggageDetail.luggageType]);
  const fileSelector = buildFileSelector();
  const onClosePopUp = () => {
    setFormVale(initial_form);
    setLuggageType("");
    setLuggageColor("");
    dispatch(setLuggageDetail(""));
    dispatch(setLuggagePopUpStatus(false));
    props.onClosePopUp();
  };
  const onChooseFile = e => {
    e.preventDefault();
    fileSelector.click();
  };
  const onHandleChangeInput = e => {
    setFormVale({
      ...formValueList,
      [e.target.name]: e.target.value
    });
  };
  const onChooseLuggageType = res => {
    setLuggageType(res);
  };
  const getColor = res => {
    setLuggageColor(res);
  };
  const onSubmit = () => {
    if (luggageDetail && luggageIndex >= 0) {
      luggageList[luggageIndex].firstName = formValueList.firstName;
      luggageList[luggageIndex].lastName = formValueList.lastName;
      luggageList[luggageIndex].idNumber = formValueList.idNumber;
      luggageList[luggageIndex].luggageType = luggageType;
      luggageList[luggageIndex].luggageColor = luggageColor;
      luggageList[luggageIndex].description = formValueList.description;
    } else {
      if (!luggageList) luggageList = [];
      luggageList.push({
        firstName: formValueList.firstName,
        lastName: formValueList.lastName,
        idNumber: formValueList.idNumber,
        luggageType: luggageType,
        luggageColor: luggageColor,
        description: formValueList.description
      });
    }
    dispatch(addLuggage(luggageList));
    notify();
  };
  return (
    <>
      <PopUp
        showModal={isShowPopUp}
        onCloseModal={onClosePopUp}
        modalClassName="modal-lg"
        headerClassName="pb-0"
        contentClassName="pt-2"
      >
        <Row className="mx-0 mx-md-5">
          <Label className="font-22 campton-bold blue-light">
            Ajouter un nouveau bagage
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
                Nom
              </Label>
              <Input
                id="firstName"
                autoComplete="off"
                className="green-bordered"
                placeholder="Doe"
                name="firstName"
                value={formValueList.firstName}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col md="6" className="px-0 pl-md-3 mt-2">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="lastName" className="campton-regular black-blue">
                Prénom
              </Label>
              <Input
                id="lastName"
                autoComplete="off"
                className="green-bordered"
                placeholder="John"
                name="lastName"
                value={formValueList.lastName}
                onChange={onHandleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col md="8" className="px-0 mt-2">
            <FormGroup className="mb-4 position-relative text-left">
              <Label for="idNumber" className="campton-regular black-blue">
                Veuillez scanner votre pièce d’identité
              </Label>
              <InputGroup>
                <Input
                  id="idNumber"
                  autoComplete="off"
                  className="green-bordered opacity-holder"
                  placeholder="Uploader ma pièce d’identité"
                  name="idNumber"
                  value={formValueList.idNumber}
                  onChange={onHandleChangeInput}
                />
                <InputGroupAddon addonType="append">
                  <Button
                    color="success"
                    className="bg-green-light campton-bold"
                    onClick={onChooseFile}
                  >
                    Parcourir
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm="12" className="px-0 mt-1">
            <Label className="campton-bold black-blue">Nouveau bagage</Label>
          </Col>
          <Col sm="12" className="px-0 mt-1">
            <Label className="campton-regular black-blue">
              Choisissez votre type de bagage
            </Label>
          </Col>
          <Col sm="12" className="px-0 mt-1">
            <LuggageCarousel
              onChooseLuggageType={onChooseLuggageType}
              defaultType={luggageType}
            />
          </Col>
          <Col sm="12" className="px-0 mt-5 d-flex">
            <Label className="campton-regular black-blue mb-0 mr-3 align-items-center">
              Définissez la couleur du bagage
            </Label>
            <ColorPicker onPickColor={getColor} defaultColor={luggageColor} />
          </Col>
          <Col sm="12" className="px-0 mt-1">
            <FormGroup className="position-relative text-left">
              <Label for="description" className="campton-regular black-blue">
                Description
              </Label>
              <Input
                type="textarea"
                className="opacity-holder"
                name="description"
                rows="5"
                id="description"
                value={formValueList.description}
                onChange={onHandleChangeInput}
                placeholder="Apporter une description à votre bagage afin de l’identifier plus rapidement."
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
              Enregistrer le bagage
            </ButtonToggle>
          </Col>
        </Row>
      </PopUp>
    </>
  );
});

export default LuggagePopUp;
