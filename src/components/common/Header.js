import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const headerStyle = {
  backgroundColor: "#FFFFFF!important",
  height: "86px",
  boxShadow: "0 2px 5px 0 rgba(47,114,232,0.16)"
};

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="py-1 pr-md-4" style={headerStyle}>
        <NavbarBrand href="/" className="ml-3">
          <img src={Logo} alt="logo"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="mx-n3 mx-md-0">
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-4">
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light"
                to="/"
              >
                Nos services
              </NavLink>
            </NavItem>
            <NavItem className="mx-4">
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light"
                to="/price"
              >
                Tarifs
              </NavLink>
            </NavItem>
            <NavItem className="mx-4">
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light"
                to="/french"
              >
                FR
              </NavLink>
            </NavItem>
            <NavItem className="mx-4">
              {isAuthenticated ? (
                <label className="navbar__link blue-deep font-weight-bold itc-demi">
                  John Doe
                </label>
              ) : (
                <NavLink
                  onClick={toggle}
                  activeClassName="navbar__link--active"
                  className="navbar__link blue-light"
                  to="/auth"
                >
                  Connexion
                </NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
