import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Label,
  DropdownItem,
  ButtonToggle,
  Button
} from "reactstrap";
import { addLuggage, setLuggagePopUpStatus } from "../../../redux/action";
import "react-toastify/dist/ReactToastify.css";
import { StyleSheet, css } from "aphrodite";
import LuggagePopUp from "../addLuggage/LuggagePopUp";
import LuggageItem from "./luggageItem";
import LuggageCharge from "./LuggageCharge";
import CheckBox from "../../common/form /CheckBox";

const styles = StyleSheet.create({
  btn: {
    height: "36px",
    width: "180px"
  },
  btn1: {
    height: "36px",
    width: "120px"
  },
  rowMargin: {
    marginBottom: "400px!important"
  }
});

class Luggages extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowPopUp: false,
      isConfirmPolicy: false
    };
  }
  onShowPopUp = () => {
    this.setState({ isShowPopUp: true });
    this.props.setLuggagePopUpStatus(true);
  };
  handlePopUp = () => {
    this.forceUpdate();
    // this.setState({ isShowPopUp: tmpShow });
  };
  onPrev = () => {
    this.props.prev();
  };

  onNext = () => {
    this.props.next();
  };
  onItemDelete = () => {
    this.forceUpdate();
    // this.setState({ isShowPopUp: !tmpShow });
  };
  handleCheck = () => {
    const isConfirmPolicy = this.state.isConfirmPolicy;
    this.setState({ isConfirmPolicy: !isConfirmPolicy });
  };
  componentDidMount() {
    console.log(this.props.luggageList);
    // this.fileSelector = buildFileSelector();
  }
  addButton = (
    <ButtonToggle
      color="success"
      onClick={this.onShowPopUp}
      className={"bg-green-light large-border-radius my-5 " + css(styles.btn)}
    >
      <i className="fa fa-plus-circle font-18 mr-1 align-middle"></i>
      Ajouter vos bagages
    </ButtonToggle>
  );
  render() {
    return (
      <React.Fragment>
        <Row className="mx-0">
          <Label className="font-22 mb-0 campton-bold blue-light">
            {this.props.page !== "admin"
              ? "Vos bagages"
              : "Bagages enregistrés"}
          </Label>
        </Row>

        <Row className="mx-0 mb-3">
          <DropdownItem divider className="w-100" />
        </Row>
        {this.props.page && (
          <Row className="mx-0 mb-5">
            <Label className="w-100 mb-0 text-left font-14 itc-book blue-deep">
              Modifier les champs ci-dessous si nécessaire.
            </Label>
          </Row>
        )}
        {!this.props.luggageList ? (
          <React.Fragment>
            <Row className="mx-0 mb-5">
              <Label className="mb-0 font-14 blue-deep itc-book">
                Vous n'avez pas encore renseigné vos bagages. Afin de commencer
                le processus, appuyez sur le bouton ci-dessous.
              </Label>
            </Row>
            <Row
              className={
                "mb-5 justify-content-center " +
                `${this.props.page ? css(styles.rowMargin) : ""}`
              }
            >
              {this.addButton}
            </Row>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Row className="mx-0 mb-5">
              <Col
                md={this.props.page !== "admin" ? 7 : 11}
                className="mt-n5 px-0"
              >
                <Row className="mx-0 mb-n5 justify-content-end">
                  {this.addButton}
                </Row>
                <Row className="mx-0">
                  <Col xs="12">
                    {this.props.luggageList.map((item, index) => {
                      return (
                        <LuggageItem
                          content={item}
                          index={index}
                          key={index}
                          handleDelete={this.onItemDelete}
                        />
                      );
                    })}
                  </Col>
                </Row>
              </Col>
              {!this.props.page && (
                <Col md="5" className="px-0 pl-md-2">
                  <LuggageCharge />
                </Col>
              )}
            </Row>
            {!this.props.page && (
              <>
                <Row>
                  <Col md="7" className="mt-5">
                    <CheckBox
                      labeltext="Vous confirmez la présence de tous les propriétaires. L’absence de chaque propriétaire de bagage empêchera l’enlèvement du bagage."
                      className="mb-2"
                      onCheckChange={this.handleCheck}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="7" className="my-5 px-xs-2 px-md-0 text-right">
                    <Button
                      className={
                        "font-12 mr-3 large-border-radius " + css(styles.btn1)
                      }
                      onClick={this.onPrev}
                    >
                      Retour
                    </Button>
                    <Button
                      color="primary"
                      disabled={!this.state.isConfirmPolicy}
                      onClick={this.onNext}
                      className={
                        "bg-blue-deep font-12 large-border-radius " +
                        css(styles.btn1)
                      }
                    >
                      Valider
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </React.Fragment>
        )}
        <LuggagePopUp onClosePopUp={this.handlePopUp} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // const { luggageList } = state;
  return { luggageList: state.luggageList };
};
export default connect(mapStateToProps, { addLuggage, setLuggagePopUpStatus })(
  Luggages
);
