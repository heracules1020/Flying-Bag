import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import classnames from "classnames";
import { TabContent, Nav, NavItem, NavLink } from "reactstrap";

const navLinkStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  fontFamily: "Campton Bold"
};

const tabContentStyle = {
  border: "1px solid #D8E0ED",
  borderRadius: "3px 0 3px 3px",
  marginBottom: "125px"
};
const Auth = props => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="auth-container mx-auto mt-5 px-2">
      <Nav tabs>
        <NavItem className="w-50">
          <NavLink
            style={navLinkStyle}
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Inscription
          </NavLink>
        </NavItem>
        <NavItem className="w-50">
          <NavLink
            style={navLinkStyle}
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Connexion
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent
        activeTab={activeTab}
        style={tabContentStyle}
        className="px-4 py-5"
      >
        {activeTab === "1" ? <SignUp /> : <Login />}
      </TabContent>
    </div>
  );
};
export default Auth;
