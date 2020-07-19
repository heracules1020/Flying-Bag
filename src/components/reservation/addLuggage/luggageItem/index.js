import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Row, Col, Button, Label } from "reactstrap";
import { StyleSheet, css } from "aphrodite";
import {
  addLuggage,
  setLuggagePopUpStatus,
  setLuggageDetail
} from "../../../../redux/action";
import luggageImg from "../../../../assets/img/luggage.png";

const upperCase = str => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};
const notify = () => toast.info("Supprimé avec succès");

const LuggageItem = props => {
  const styles = StyleSheet.create({
    btn: {
      color: "#6987BB"
    },
    icon: {
      color: "#6987BB",
      cursor: "pointer"
    },
    div: {
      border: "1px solid #D8E0ED"
    },
    colorDiv: {
      height: "22px",
      width: "22px",
      borderRadius: "50%",
      background: `rgba(${props.content.luggageColor.r}, ${props.content.luggageColor.g}, ${props.content.luggageColor.b}, ${props.content.luggageColor.a})`
    },
    imgContainer: {
      width: "110px"
    },
    p: {
      width: "50px",
      height: "24px",
      backgroundColor: "#44D774",
      color: "#ffffff",
      bottom: "0",
      left: "-5px"
    }
  });
  let luggageList = useSelector(state => state.luggageList);
  const dispatch = useDispatch();

  const handleDelete = () => {
    luggageList.splice(props.index, 1);
    props.handleDelete();
    dispatch(addLuggage(luggageList));
    notify();
  };
  const handleModify = () => {
    const luggageDetailInfo = { info: props.content, index: props.index };
    dispatch(setLuggageDetail(luggageDetailInfo));
    dispatch(setLuggagePopUpStatus(true));
  };
  return (
    <>
      <Row className="mx-0 justify-content-between">
        <Col className="pl-0">
          <p className="font-16 campton-bold blue-deep mb-0">
            {upperCase(props.content.firstName) +
              " " +
              upperCase(props.content.lastName)}
          </p>
        </Col>
        <Col className="text-right">
          <Button
            color="primary"
            className={"bg-white font-12 " + css(styles.btn)}
            onClick={handleModify}
          >
            <i className="fa fa-pencil mr-1"></i>Modifier
          </Button>
          <i
            className={"fa fa-trash-o font-12 " + css(styles.icon)}
            onClick={handleDelete}
          ></i>
        </Col>
      </Row>
      <Row className={"mx-0 mb-2 py-3 small-border-radius " + css(styles.div)}>
        <Col
          md="4"
          className="d-flex align-items-center justify-content-center"
        >
          <div
            className={
              "position-relative text-center " + css(styles.imgContainer)
            }
          >
            <img src={luggageImg} alt="luggage" />
            <p
              className={
                "mb-n1 position-absolute compton-bold font-weight-bold text-center " +
                css(styles.p)
              }
            >
              {props.content.luggageType}
            </p>
          </div>
        </Col>
        <Col md="8" className="py-4 pr-5">
          <Row>
            <Col>
              <Label className="blue-deep campton-bold">Bagage</Label>
            </Col>
            <Col>
              <div className={css(styles.colorDiv) + " ml-auto"}></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="mb-0 font-12 itc-book blue-deep text-break">
                {props.content.description}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default LuggageItem;
