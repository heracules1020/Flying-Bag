import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Label,
  DropdownItem,
  Col,
  Button,
  ButtonToggle,
  Input
} from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addAddress, setDeliveryInfo } from "../../../redux/action";
import AddressPopup from "./AddressPopUp";
import AddressItem from "./AddressItem";

const styles = StyleSheet.create({
  btn: {
    height: "36px",
    width: "180px"
  },
  modify: {
    color: "#6987BB"
  },
  icon: {
    color: "#6987BB",
    cursor: "pointer"
  },
  btn1: {
    height: "36px",
    width: "120px"
  },
  datepickerDiv: {
    width: "140px"
  },
  datepicker: {
    maxWidth: "140px",
    height: "40px",
    paddingLeft: "30px"
  },
  calendar: {
    color: "#44D774",
    left: "4px",
    top: "40px",
    fontSize: "21px"
  }
});
const propTypes = {
  addressList: PropTypes.array.isRequired
};
class Address extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    popupStatus: false,
    selectedAddress: {},
    selectedAddressIndex: null,
    deliveryDate: this.props.deliveryDate
      ? new Date(this.props.deliveryDate)
      : new Date(),
    timeSlot: this.props.deliveryTimeSlot ? this.props.deliveryTimeSlot : 2,
    deliveryAddressIndex: this.props.deliveryAddressID
      ? this.props.deliveryAddressID
      : null
  };
  timeSlotList = [
    { value: 1, startTime: "10", endTime: "12" },
    { value: 2, startTime: "14", endTime: "16" },
    { value: 3, startTime: "16", endTime: "18" }
  ];
  handlePopUp = () => {
    this.setState({
      popupStatus: false,
      selectedAddressIndex: null,
      selectedAddress: {}
    });
  };
  handleDelete = index => {
    let tmpAddressList = this.props.addressList;
    tmpAddressList.splice(index, 1);
    this.props.addAddress(tmpAddressList);
    this.notify();
  };
  notify = () => toast.info("Supprimé avec succès");

  handleModify = index => {
    const tmpAddress = this.props.addressList[index];
    this.setState({ selectedAddress: tmpAddress, selectedAddressIndex: index });
    this.onShowPopUp();
  };
  handleTimeSlot = e => {
    this.setState({ timeSlot: e.target.value });
  };
  onPrev = () => {
    this.props.prev();
  };

  onNext = () => {
    let tmpDeliveryInfo = {
      deliveryTimeSlot: this.state.timeSlot,
      deliveryDate: this.state.deliveryDate,
      deliveryAddressID: this.state.deliveryAddressIndex
    };
    this.props.setDeliveryInfo(tmpDeliveryInfo);
    this.props.next();
  };
  onShowPopUp = () => {
    this.setState({ popupStatus: true });
  };
  handleChooseAddress = index => {
    this.setState({ deliveryAddressIndex: index });
  };
  componentDidMount() {
    console.log(this.state.deliveryAddressIndex);
  }

  render() {
    return (
      <>
        <Row className="mx-0">
          <Label className="font-22 mb-0 campton-bold blue-light">
            {this.props.page === "admin"
              ? "Adresses enregistrées"
              : "Informations de livraison"}
          </Label>
        </Row>
        <Row className="mx-0 mb-3">
          <DropdownItem divider className="w-100" />
        </Row>
        <Row className="mx-0">
          <Label className="w-100 mb-0 text-left font-14 itc-book blue-deep">
            Modifier les adresses et les préférences de livraison
          </Label>
        </Row>

        <Row className="justify-content-center">
          <Col className="text-right px-0 " xs="9">
            {" "}
            <ButtonToggle
              color="success"
              onClick={this.onShowPopUp}
              className={
                "bg-green-light large-border-radius my-5 " + css(styles.btn)
              }
            >
              <i className="fa fa-plus-circle font-18 mr-1 align-middle"></i>
              Ajouter vos bagages
            </ButtonToggle>
          </Col>
        </Row>
        {this.props.addressList &&
          this.props.addressList.map((item, index) => {
            const itemContent = item;
            return (
              <Row className="mx-0 justify-content-center pb-5" key={index}>
                <Col
                  xs={this.props.page !== "admin" ? 9 : 11}
                  className="text-right px-0"
                >
                  <Button
                    color="primary"
                    className={"bg-white font-12 " + css(styles.modify)}
                    onClick={() => this.handleModify(index)}
                  >
                    <i className="fa fa-pencil mr-1"></i>Modifier
                  </Button>
                  <i
                    className={"fa fa-trash-o font-12 " + css(styles.icon)}
                    onClick={() => this.handleDelete(index)}
                  ></i>
                  <AddressItem
                    content={itemContent}
                    addressIndex={index}
                    deliveryAddressIndex={
                      this.props.page !== "admin"
                        ? this.state.deliveryAddressIndex
                        : null
                    }
                    onSelectAddress={index => this.handleChooseAddress(index)}
                  />
                </Col>
              </Row>
            );
          })}
        {!this.props.page && (
          <>
            <Row className="mx-0 justify-content-center">
              <Col xs="12" md="5" className="position-relative">
                <div
                  className={
                    "position-relative mx-auto " + css(styles.datepickerDiv)
                  }
                >
                  <Label className="blue-light itc-demi font-15">
                    Date de livraison
                  </Label>
                  <DatePicker
                    className={
                      "green-bordered itc-demi pt-1 small-border-radius " +
                      css(styles.datepicker)
                    }
                    selected={this.state.deliveryDate}
                    onChange={date => this.setState({ deliveryDate: date })}
                  />
                  <i
                    className={
                      "fa fa-calendar position-absolute " + css(styles.calendar)
                    }
                  ></i>
                </div>
              </Col>
              <Col xs="12" md="5">
                <div
                  className={
                    "position-relative mx-auto " + css(styles.datepickerDiv)
                  }
                >
                  <Label className="blue-light itc-demi font-15">
                    Créneau horaire
                  </Label>
                  <Input
                    type="select"
                    name="timeSlot"
                    value={this.state.timeSlot}
                    onChange={e => this.handleTimeSlot}
                    className={
                      "green-bordered itc-demi pt-2 small-border-radius"
                    }
                  >
                    {this.timeSlotList.map((item, index) => {
                      return (
                        <option value={item.value} key={index}>
                          {item.startTime + "H-" + item.endTime + "H"}
                        </option>
                      );
                    })}
                  </Input>
                </div>
              </Col>
            </Row>
            <Row className="mx-0">
              <Col xs="11" className="my-5 px-xs-2 px-md-0 text-right">
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
                  onClick={this.onNext}
                  disabled={
                    !this.state.deliveryAddressIndex &&
                    this.state.deliveryAddressIndex !== 0
                  }
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
        <AddressPopup
          isShowPopUp={this.state.popupStatus}
          handlePopUp={this.handlePopUp}
          defaultAddressIndex={this.state.selectedAddressIndex}
          defaultAddress={this.state.selectedAddress}
        />
      </>
    );
  }
}
Address.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    addressList: state.addressList,
    deliveryTimeSlot: state.deliveryTimeSlot,
    deliveryDate: state.deliveryDate,
    deliveryAddressID: state.deliveryAddressID
  };
};
export default connect(mapStateToProps, { addAddress, setDeliveryInfo })(
  Address
);
