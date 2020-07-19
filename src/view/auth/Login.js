import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  ButtonToggle,
  DropdownItem,
  Row
} from "reactstrap";
import CheckBox from "../../components/common/form /CheckBox";
import { setAuthStatus } from "../../redux/action";

const btnStyle = {
  height: "46px"
};

const btnStyle1 = {
  height: "36px",
  width: "147px"
};

const fbIconStyle = {
  fontSize: "24px",
  background: "white",
  color: "#4267B2",
  width: "27px",
  verticalAlign: "bottom",
  borderRadius: "3px",
  marginRight: "10px"
};

const googleIconStyle = {
  fontSize: "20px",
  background: "white",
  color: "#F26052",
  width: "30px",
  height: "30px",
  verticalAlign: "sub",
  borderRadius: "50%",
  marginRight: "10px",
  padding: "5px 2px"
};

const eyeIconStyle = {
  top: "0",
  cursor: "pointer"
};

const Login = () => {
  const [inputType, setinputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const toggle = () => {
    if (inputType === "password") setinputType("text");
    else setinputType("password");
  };
  const onSubmit = () => {
    dispatch(setAuthStatus(true));
    history.push("/service/searchresult");
  };
  return (
    <Form className="mx-auto text-center">
      <FormGroup className="mb-5 position-relative">
        <Input
          id="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="mb-4 has-icon position-relative">
        <Input
          id="password"
          type={inputType}
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <span
          hidden={!password}
          className={
            "form-control-icon " +
            (inputType === "text" ? "fa fa-eye-slash" : "fa fa-eye")
          }
          style={eyeIconStyle}
          onClick={toggle}
        ></span>
      </FormGroup>
      <Row className="w-100 justify-content-between align-items-center mx-0 mb-4">
        <CheckBox labeltext="Se souvenir de moi" />
        <ButtonToggle className="bg-white blue-light border-0">
          Mot de passe oublié ?
        </ButtonToggle>
      </Row>
      <Row className="justify-content-between align-items-center mx-0 mb-5">
        <DropdownItem divider className="w-40" />
        <p className="mb-0 blue-light">ou</p>
        <DropdownItem divider className="w-40" />
      </Row>

      <ButtonToggle
        color="primary"
        style={btnStyle}
        className="w-100 mb-4 small-border-radius"
      >
        <i className="fa fa-facebook" style={fbIconStyle}></i>
        Se connecter avec Facebook
      </ButtonToggle>
      <ButtonToggle
        color="danger"
        style={btnStyle}
        className="w-100 bg-red-light small-border-radius"
      >
        <i className="fa fa-google-plus" style={googleIconStyle}></i>
        Se connecter avec Google
      </ButtonToggle>
      <ButtonToggle
        color="primary"
        style={btnStyle1}
        className="bg-blue-light large-border-radius mt-5"
        onClick={onSubmit}
      >
        Se connecter
      </ButtonToggle>
    </Form>
  );
};
export default Login;
