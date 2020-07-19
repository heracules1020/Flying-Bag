import React, { useState } from "react";
import { Form, FormGroup, Input, ButtonToggle, Label } from "reactstrap";
import { useHistory } from "react-router-dom";
import PopUp from "../common/popup";

const btnStyle1 = {
  height: "36px",
  width: "147px"
};

const labelStyle = {
  color: "#05378E",
  fontFamily: "Campton Bold"
};

const eyeIconStyle = {
  top: "32px",
  cursor: "pointer"
};

const clearIconStyle = {
  top: "0",
  cursor: "pointer"
};
const pStyle1 = {
  fontFamily: "Campton Bold",
  color: "#05378E",
  fontSize: "18px"
};

const pStyle2 = {
  fontFamily: "ITC Avant Garde Gothic Pro Book",
  color: "#05378E",
  fontSize: "15px"
};

const aStyle = {
  fontFamily: "ITC Avant Garde Gothic Pro Book",
  fontWeight: "700",
  color: "#2F72E8",
  fontSize: "15px"
};

const UserInfo = () => {
  const history = useHistory();
  const [inputType, setinputType] = useState("password");
  const [isShowPopUp, handlePopup] = useState(false);
  const [formValueList, setFormVale] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPass: ""
  });
  const handleChangeForm = e => {
    setFormVale({
      ...formValueList,
      [e.target.name]: e.target.value
    });
  };
  const onClearFirstName = () => {
    setFormVale({
      ...formValueList,
      firstName: ""
    });
  };
  const onClearLastName = () => {
    setFormVale({
      ...formValueList,
      lastName: ""
    });
  };
  const onLookPass = () => {
    if (inputType === "password") setinputType("text");
    else setinputType("password");
  };
  const onClosePopUp = () => {
    handlePopup(false);
    history.push("/");
  };
  const onSubmit = () => {
    handlePopup(true);
  };
  return (
    <React.Fragment>
      <Form className="mx-auto text-center">
        <FormGroup className="has-icon mb-4 position-relative text-left">
          <Label for="firstName" className="font-16" style={labelStyle}>
            Quels sont vos noms & prénoms ?
          </Label>
          <span
            className="fa fa-times-circle-o form-control-icon"
            hidden={!formValueList.firstName}
            onClick={onClearFirstName}
          ></span>
          <Input
            id="firstName"
            autoComplete="off"
            placeholder="Nom"
            name="firstName"
            value={formValueList.firstName}
            onChange={handleChangeForm}
          />
        </FormGroup>
        <FormGroup className="has-icon mb-5 position-relative">
          <Input
            id="lastName"
            name="lastName"
            autoComplete="off"
            placeholder="Prénom"
            value={formValueList.lastName}
            onChange={handleChangeForm}
          />
          <span
            className="fa fa-times-circle-o form-control-icon"
            style={clearIconStyle}
            hidden={!formValueList.lastName}
            onClick={onClearLastName}
          ></span>
        </FormGroup>
        <FormGroup className="has-icon position-relative text-left mb-5">
          <Label for="password" className="font-16" style={labelStyle}>
            Choisissez votre mot de passe
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
            Confirmez votre mot de passe
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
        <ButtonToggle
          color="primary"
          style={btnStyle1}
          className="bg-blue-light large-border-radius"
          onClick={onSubmit}
        >
          Continuer
        </ButtonToggle>
      </Form>
      <PopUp
        showModal={isShowPopUp}
        onCloseModal={onClosePopUp}
        modalClassName="modal-md"
      >
        <React.Fragment>
          <p style={pStyle1}>Nous vous remercions pour votre inscription.</p>
          <p style={pStyle2}>
            Nous vous avons envoyé un lien pour valider votre compte. Veuillez
            contrôler votre boîte de réception. Vous pourrez ainsi confirmer
            votre compte et vous connecter.
          </p>
          <p style={pStyle2}>
            Si vous n’avez reçu aucun e-mail,{" "}
            <a href style={aStyle}>
              cliquez ici pour que nous vous envoyons un nouvel e-mail.
            </a>
          </p>
        </React.Fragment>
      </PopUp>
    </React.Fragment>
  );
};
export default UserInfo;
