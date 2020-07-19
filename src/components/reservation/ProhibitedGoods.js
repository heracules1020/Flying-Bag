import React from "react";
import { Collapse, Row, Label, Col } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import CheckBox from "../common/form /CheckBox";

const styles = StyleSheet.create({
  dot: {
    height: "6px",
    width: "6px",
    backgroundColor: "#CACDD8",
    borderRadius: "50%",
    marginBottom: "0",
    marginRight: "15px"
  }
});
const ProhibitedGoods = React.memo(props => {
  return (
    <div>
      <Collapse isOpen={props.isCollapse}>
        <Row className="mx-0">
          <Label className="mb-5 font-14 itc-book blue-deep">
            Prenez connaissance des marchandises interdites.
          </Label>
        </Row>
        <Row className="mx-0 justify-content-center">
          <Col md="9">
            <Label className="d-flex blue-deep font-14 itc-book align-items-center">
              <p className={css(styles.dot)}></p>Les armes à feu
            </Label>
            <Label className="d-flex blue-deep font-14 itc-book align-items-center">
              <p className={css(styles.dot)}></p>
              Les armes ou objets pointus ou coupants comme les limes ou ciseaux
              à ongles ou les lames de rasoir.
            </Label>
            <Label className="d-flex blue-deep font-14 itc-book align-items-center">
              <p className={css(styles.dot)}></p>Les produits explosifs et
              inflammables comme les briquets
            </Label>
            <Label className="d-flex blue-deep font-14 itc-book align-items-center">
              <p className={css(styles.dot)}></p>
              Les objets contondants comme les battes de baseball ou les clubs
              de golf
            </Label>
            <Label className="d-flex blue-deep font-14 itc-book align-items-center">
              <p className={css(styles.dot)}></p>Les produits chimiques et
              toxiques
            </Label>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <CheckBox
              labeltext="Je confirme avoir pris connaissance de la liste des objets interdits."
              className="mb-2"
              onCheckChange={props.handleCheck}
            />
          </Col>
        </Row>
      </Collapse>
    </div>
  );
});

export default ProhibitedGoods;
