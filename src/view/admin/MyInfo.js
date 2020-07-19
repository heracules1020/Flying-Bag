import React, { useState } from "react";
import {
  Row,
  DropdownItem,
  FormGroup,
  Input,
  ButtonToggle,
  Label,
  Col
} from "reactstrap";
// import { useHistory } from "react-router-dom";
import RadioBox from "../../components/common/form /RadioBox";

const btnStyle1 = {
  height: "36px",
  width: "200px",
  marginLeft: "auto!important"
};

const labelStyle = {
  color: "#05378E",
  fontFamily: "Campton Bold"
};

const eyeIconStyle = {
  top: "32px",
  cursor: "pointer"
};

// const clearIconStyle = {
//   top: "0",
//   cursor: "pointer"
// };

const MyInfo = () => {
  // const history = useHistory();
  const [inputType, setinputType] = useState("password");
  // const [isShowPopUp, handlePopup] = useState(false);
  const [formValueList, setFormVale] = useState({
    password: "",
    confirmPass: "",
    email: "",
    telephone: "",
    firstName: "",
    lastName: "",
    civility: 0
  });
  const handleChangeForm = e => {
    setFormVale({
      ...formValueList,
      [e.target.name]: e.target.value
    });
  };
  // const onClearFirstName = () => {
  //   setFormVale({
  //     ...formValueList,
  //     firstName: ""
  //   });
  // };
  // const onClearLastName = () => {
  //   setFormVale({
  //     ...formValueList,
  //     lastName: ""
  //   });
  // };
  const onLookPass = () => {
    if (inputType === "password") setinputType("text");
    else setinputType("password");
  };
  // const onClosePopUp = () => {
  // handlePopup(false);
  //   history.push("/");
  // };
  const handleCheckRadio = event => {
    setFormVale({
      ...formValueList,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = () => {
    // handlePopup(true);
  };
  return (
    <React.Fragment>
      <Row className="mx-0">
        <Label className="font-22 mb-0 campton-bold blue-light">
          Informations personnelles
        </Label>
      </Row>

      <Row className="mx-0 mb-3">
        <DropdownItem divider className="w-100 mr-5" />
      </Row>
      <Row className="mx-0 mb-5">
        <Label className="w-100 mb-0 text-left font-14 itc-book blue-deep">
          Modifier les champs ci-dessous si nécessaire.
        </Label>
      </Row>
      <Row className="mx-0 mb-4">
        <Col md="7" className="px-0">
          <p className="font-16 font-weight-bold" style={labelStyle}>
            Civilité
          </p>
          <RadioBox
            onChange={handleCheckRadio}
            name="civility"
            bodyClass1="ml-3"
            bodyClass2="ml-5"
            label1="homme"
            label2="femme"
          />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col md="7" className="px-0">
          <FormGroup className="has-icon position-relative text-left mb-5">
            <Label for="password" className="font-16" style={labelStyle}>
              Nom
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formValueList.lastName}
              onChange={handleChangeForm}
              placeholder="Nom"
            />
          </FormGroup>
          <FormGroup className="has-icon position-relative text-left mb-5">
            <Label for="password" className="font-16" style={labelStyle}>
              Prénom
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formValueList.firstName}
              onChange={handleChangeForm}
              placeholder="Prénom"
            />
          </FormGroup>
          <FormGroup className="has-icon position-relative text-left mb-5">
            <Label for="password" className="font-16" style={labelStyle}>
              Téléphone
            </Label>
            <Input
              id="telephone"
              name="telephone"
              type="number"
              value={formValueList.telephone}
              onChange={handleChangeForm}
              placeholder="Téléphone"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row className="mx-0">
        <Label className="font-22 mb-0 campton-bold blue-light">Compte</Label>
      </Row>

      <Row className="mx-0 mb-3">
        <DropdownItem divider className="w-100 mr-5" />
      </Row>
      <Row>
        <Col md="7">
          <FormGroup className="has-icon position-relative text-left mb-5">
            <Label for="password" className="font-16" style={labelStyle}>
              E-mail
            </Label>
            <Input
              id="email"
              name="email"
              value={formValueList.email}
              onChange={handleChangeForm}
              placeholder="e-mail"
            />
          </FormGroup>
          <FormGroup className="has-icon position-relative text-left mb-5">
            <Label for="password" className="font-16" style={labelStyle}>
              Modifier votre mot de passe
            </Label>
            <Input
              id="password"
              name="password"
              value={formValueList.password}
              type={inputType}
              onChange={handleChangeForm}
              placeholder="Mot de passe (> 8 caractères)"
            />
            <span
              hidden={!formValueList.password}
              className={
                "form-control-icon " +
                (inputType === "text" ? "fa fa-eye-slash" : "fa fa-eye")
              }
              style={eyeIconStyle}
              onClick={onLookPass}
            ></span>
          </FormGroup>
          <FormGroup className="has-icon position-relative text-left mb-5">
            <Label for="confirmPass" className="font-16" style={labelStyle}>
              Confirmer votre mot de passe
            </Label>
            <Input
              id="confirmPass"
              name="confirmPass"
              type={inputType}
              value={formValueList.confirmPass}
              onChange={handleChangeForm}
              placeholder="Mot de passe (> 8 caractères)"
            />
            <span
              hidden={!formValueList.confirmPass}
              className={
                "form-control-icon " +
                (inputType === "text" ? "fa fa-eye-slash" : "fa fa-eye")
              }
              style={eyeIconStyle}
              onClick={onLookPass}
            ></span>
          </FormGroup>
        </Col>
      </Row>
      <Row className="mx-0">
        <Col md="7" className="px-0 text-right">
          <p style={labelStyle} className="text-left">
            Supprimer définivement votre compte
          </p>
          <p className="text-left font-12 campton-regular grey-deep pb-4">
            Lorsque vous supprimez votre compte, vous ne pouvez plus en
            récupérer le contenu ou les informations renseignés.{" "}
          </p>
          <ButtonToggle
            color="primary"
            style={btnStyle1}
            className="bg-blue-light large-border-radius"
            onClick={onSubmit}
          >
            Supprimer mon compte
          </ButtonToggle>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default MyInfo;
