import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { Row, Col } from "reactstrap";
import adminRouterList from "../../router/adminRouter";
import Sidebar from "../../components/admin/Sidebar";

const styles = StyleSheet.create({
  col: {
    marginTop: "60px"
  }
});
const Admin = () => {
  return (
    <Row className="mx-0 justitfy-content-center">
      <Col md="3" className="pl-md-4 pr-0">
        <Sidebar />
      </Col>
      <Col md="9" className={"pr-0 " + css(styles.col)}>
        <Redirect from="/admin" to="/admin/orders" />
        <Switch>
          {adminRouterList.map((item, key) => {
            return (
              <Route
                path={item.path}
                key={key}
                component={item.component}
                exact={item.exact}
              />
            );
          })}
        </Switch>
      </Col>
    </Row>
  );
};
export default Admin;
