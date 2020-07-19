import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import icon_address from "../../assets/img/admin/Target.svg";
import icon_info from "../../assets/img/admin/User-2.svg";
import icon_luggage from "../../assets/img/admin/suitcase.svg";
import icon_order from "../../assets/img/admin/commande.svg";

const styles = StyleSheet.create({
  navbar: {
    top: "25%"
  },
  navitem: {
    marginBottom: "40px"
  }
});

const Sidebar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="h-100 position-relative">
      <Navbar
        light
        expand="md"
        className={
          "py-1 px-0 sidebar_navbar position-fixed " + css(styles.navbar)
        }
      >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="mx-n3 mx-md-0">
          <Nav navbar vertical>
            <NavItem className={css(styles.navitem)}>
              <img src={icon_address} className="mr-3" alt="address icon" />
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light sidebar_nav"
                to="/admin/addresses"
              >
                Mes adresses
              </NavLink>
            </NavItem>
            <NavItem className={css(styles.navitem)}>
              <img src={icon_info} className="mr-3" alt="info icon" />
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light sidebar_nav"
                to="/admin/info"
              >
                Mes informations
              </NavLink>
            </NavItem>
            <NavItem className={css(styles.navitem)}>
              <img src={icon_luggage} className="mr-3" alt="luggage icon" />
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light sidebar_nav"
                to="/admin/luggages"
              >
                Mes bagages
              </NavLink>
            </NavItem>
            <NavItem className="mb-3">
              <img src={icon_order} className="mr-3" alt="order icon" />
              <NavLink
                onClick={toggle}
                activeClassName="navbar__link--active"
                className="navbar__link blue-light sidebar_nav"
                to="/admin/orders"
              >
                Mes commandes
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
