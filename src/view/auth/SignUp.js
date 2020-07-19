import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  ButtonToggle,
  DropdownItem,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import CheckBox from "../../components/common/form /CheckBox";

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

const SignUp = () => {
  const [isDisableButton, setButtonStatus] = useState(true);
  const [email, setEmail] = useState("");
  const onCheckChange = () => setButtonStatus(!isDisableButton);
  const handlechangeEmail = event => {
    setEmail(event.target.value);
  };
  return (
    <Form className="mx-auto text-center">
      <ButtonToggle
        color="primary"
        style={btnStyle}
        className="w-100 mb-2 small-border-radius"
      >
        <i className="fa fa-facebook" style={fbIconStyle}></i>
        Se connecter avec Facebook
      </ButtonToggle>
      <ButtonToggle
        color="danger"
        style={btnStyle}
        className="w-100 bg-red-light small-border-radius mb-5"
      >
        <i className="fa fa-google-plus" style={googleIconStyle}></i>
        Se connecter avec Google
      </ButtonToggle>

      <Row className="justify-content-between align-items-center mx-0 mb-5">
        <DropdownItem divider className="w-40" />
        <p className="mb-0 blue-light">ou</p>
        <DropdownItem divider className="w-40" />
      </Row>

      <FormGroup className="mb-5 position-relative">
        <Input
          id="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handlechangeEmail}
          required
        />
      </FormGroup>
      <CheckBox
        labeltext="J'accepte les termes et conditions générales et la politique de
            confidentialité."
        onCheckChange={onCheckChange}
        className="mb-5"
      />
      <Link to="/signup/userdetail" disabled={isDisableButton}>
        <ButtonToggle
          color="primary"
          disabled={isDisableButton}
          style={btnStyle1}
          className="bg-blue-light large-border-radius"
        >
          Se connecter
        </ButtonToggle>
      </Link>
    </Form>
  );
};
export default SignUp;
