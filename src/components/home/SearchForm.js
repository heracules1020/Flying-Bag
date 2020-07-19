import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonToggle,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import img_section1 from "../../assets/img/home/number1.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formStyle = {
  maxWidth: "243px",
  width: "100%"
};

const btnStyle = {
  height: "36px"
};

const p_Common_Style = {
  textAlign: "center",
  color: "#2F72E8",
  fontSize: "36px",
  lineHeight: "1.2"
};

const imgStyle = {
  maxHeight: "395px",
  maxWidth: "395px",
  width: "100%"
};

const flightLabelStyle = {
  fontSize: "15px",
  color: "#9BAFD2",
  fontWeight: "bold"
};

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    // startDate =
    const selectedDate =
      startDate.getFullYear() +
      "-" +
      (parseInt(startDate.getMonth()) + 1) +
      "-" +
      startDate.getDate();
    const curDate =
      new Date().getFullYear() +
      "-" +
      (parseInt(new Date().getMonth()) + 1) +
      "-" +
      new Date().getDate();
    if (selectedDate === curDate)
      document.querySelector(".date-custom-input").innerHTML = "Aujourd’hui";
  });
  const DateCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <Label className="date-custom-input" onClick={onClick}>
      {value}
    </Label>
  ));
  return (
    <Container className="p-0 p-lg-5" fluid="md">
      <Row className="mx-0 mx-md-n3">
        <Col className="p-4" xs="12" md="6">
          <p style={p_Common_Style} className="mb-0 search-title">
            <span className="font-weight-bold">Préparez </span>
            <span>votre bagage,</span>
          </p>
          <p style={p_Common_Style} className="mb-0 search-title">
            <span className="font-weight-bold">simplifiez </span>
            <span>votre voyage</span>
          </p>
          <Row>
            <Col className="p-5">
              <Form style={formStyle} className="mx-auto">
                <FormGroup className="has-icon position-relative">
                  <Label
                    for="flightNumber"
                    className="blue-light font-weight-bold font-18"
                  >
                    Numéro de vol
                  </Label>
                  <Input id="flightNumber" placeholder="FR1123" />
                  <span className="fa fa-search form-control-icon"></span>
                </FormGroup>
                <FormGroup>
                  <DropdownItem divider />
                  <Label
                    for="flightDate"
                    style={flightLabelStyle}
                    className="d-block"
                  >
                    Date
                  </Label>
                  <DatePicker
                    className="d-none"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    customInput={<DateCustomInput />}
                  />
                  <DropdownItem divider />
                </FormGroup>
                <Link to="/auth">
                  <ButtonToggle
                    color="primary"
                    style={btnStyle}
                    className="w-100 bg-blue-light large-border-radius"
                  >
                    Lancer la recherche
                  </ButtonToggle>
                </Link>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col className="pt-0 pt-md-5 text-center text-lg-right" xs="12" md="6">
          <img src={img_section1} style={imgStyle} alt="img-section1" />
        </Col>
      </Row>
    </Container>
  );
};
export default SearchForm;
