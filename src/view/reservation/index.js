import React from "react";
import { Steps } from "antd";
import "antd/dist/antd.css";
import { Row, Col } from "reactstrap";
import "./index.scss";
import HeaderBar from "../../components/reservation/HeaderBar";
import YellowDot from "../../components/reservation/YellowDot";
import Luggages from "../../components/reservation/addLuggage";
import SecurityQuestion from "../../components/reservation/SecurityQuestion";
import Address from "../../components/reservation/addAddress";
import Summary from "../../components/reservation/summary";

const { Step } = Steps;
const stepStyle = {
  marginBottom: 70,
  boxShadow: "0px -7px 0 0 #F6F6F6 inset"
};
class FlowByStep extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  onChange = current => {
    this.setState({ current });
  };
  onPrev = () => {
    let step = this.state.current;
    step === 0
      ? this.props.history.push("/service/searchresult")
      : this.setState({ current: step - 1 });
  };
  onNext = () => {
    let step = this.state.current + 1;
    this.setState({ current: step });
  };
  renderStepBody = () => {
    switch (this.state.current) {
      case 0:
        return <Luggages prev={this.onPrev} next={this.onNext} />;
      case 1:
        return <SecurityQuestion prev={this.onPrev} next={this.onNext} />;
      case 2:
        return <Address prev={this.onPrev} next={this.onNext} />;
      case 3:
        return <Summary prev={this.onPrev} next={this.onNext} />;
      case 4:
        return <p>{this.state.current}xcv</p>;
      default:
        return <div></div>;
    }
  };

  render() {
    const { current } = this.state;
    return (
      <React.Fragment>
        <HeaderBar />
        <Row className="mx-0 mt-5 justify-content-center">
          <Col sm="9" className="px-0 d-flex align-items-baseline">
            <YellowDot />
            <p className="blue-light campton-regular mb-0">
              Aéroport à Domicile pour le 09/11/19
            </p>
          </Col>
        </Row>
        <Row className="mx-0 mt-5 justify-content-center">
          <Col sm="11">
            <Steps
              type="navigation"
              current={current}
              onChange={this.onChange}
              style={stepStyle}
            >
              <Step title="1.Bagages" />
              <Step title=" 2.Questions de sécurité" />
              <Step title="3.Saisie de l'adresse de livraison" />
              <Step title="4.Récapitulatif" />
              <Step title="5.Paiement" />
            </Steps>
          </Col>
        </Row>
        <Row className="mx-0 justify-content-center">
          <Col sm="10">{this.renderStepBody()}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default FlowByStep;
