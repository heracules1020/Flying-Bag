import React from "react";
import { Row, Col, NavLink } from "reactstrap";

const dividerStyle = {
  height: "10px",
  backgroundColor: "#2F72E8",
  marginBottom: "50px"
};

const navStyle = {
  fontSize: "10px",
  color: "#98AFD2",
  fontFamily: "Campton Regular"
};

const footerStyle = {
  fontSize: "10px",
  color: "#2F72E8"
};

const Footer = props => {
  return (
    <React.Fragment>
      <Row className="mx-0 mx-md-n3 footer mb-lg-0 mb-4">
        <Col className="px-0 px-md-3 offset-md-1 mt-5">
          <Row className="mx-0">
            <NavLink style={navStyle} className="py-0 px-1 px-sm-2 px-md-3">
              Conditions de transport
            </NavLink>
            <NavLink style={navStyle} className="py-0 px-1 px-sm-2 px-md-3">
              Notice européenne
            </NavLink>
            <NavLink style={navStyle} className="py-0 px-1 px-sm-2 px-md-3">
              Confidentialité
            </NavLink>
          </Row>
          <Row className="mx-0">
            <NavLink style={navStyle} className="py-0 px-1 px-sm-2 px-md-3">
              Payer en toute sécurité
            </NavLink>
            <NavLink style={navStyle} className="py-0 px-1 px-sm-2 px-md-3">
              Conditions d’utilisation
            </NavLink>
            <NavLink style={navStyle} className="py-0 px-1 px-sm-2 px-md-3">
              Politique des cookies
            </NavLink>
          </Row>
        </Col>
      </Row>
      <Row className="mx-0 mx-md-n3 flex-row-reverse">
        <Col xs="10" md="5" sm="8" className="px-0 px-md-3">
          <p style={footerStyle}>
            Site réalisé par <strong>L’autreTribu.</strong> Tous droits
            réservés.
          </p>
          <div className="divider w-100" style={dividerStyle}></div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Footer;
