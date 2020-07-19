import React, { useState } from "react";
import UserInfo from "../../components/auth/UserInfo";
import { TabContent, Nav, NavItem, NavLink } from "reactstrap";

const navLinkStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  fontFamily: "Campton Bold"
};

const tabContentStyle = {
  border: "1px solid #D8E0ED",
  borderRadius: "3px 0 3px 3px",
  marginBottom: "120px"
};
const UserDetail = props => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="auth-container mx-auto mt-5 px-2">
      <Nav tabs>
        <NavItem className="w-100">
          <NavLink
            style={navLinkStyle}
            className="active"
            onClick={() => {
              toggle("1");
            }}
          >
            Inscription
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent
        activeTab={activeTab}
        style={tabContentStyle}
        className="px-4 py-5"
      >
        <UserInfo />
      </TabContent>
    </div>
  );
};
export default UserDetail;
