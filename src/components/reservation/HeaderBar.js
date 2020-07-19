import React from "react";
import { Row } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  div: {
    height: "50px",
    backgroundColor: "#FFC62E"
  },
  span: {
    letterSpacing: "3px"
  },
  i: {
    backgroundColor: "#ffffff",
    width: "9px",
    height: "13px",
    marginTop: "-4px",
    transform: "skew(-35deg)"
  }
});

const HeaderBar = () => {
  return (
    <React.Fragment>
      <Row className="mx-0">
        <div
          className={
            css(styles.div) +
            " w-100 pr-5 d-flex justify-content-end align-items-center"
          }
        >
          <span
            className={
              "text-thick text-white font-weight-bold mr-2 " + css(styles.span)
            }
          >
            AIRFRANCE
          </span>
          <i className={css(styles.i)}></i>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default HeaderBar;
