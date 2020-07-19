import React from "react";
import { Row, Card, CardBody, Label } from "reactstrap";
const styles = {
  label: {
    lineHeight: 1
  }
};
const upperCase = str => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};
const AddressItem = React.memo(props => {
  // console.log(props.content);

  // useEffect(() => {
  //   console.log(props);
  // }, [props, props.content]);

  const handleCard = () => {
    props.onSelectAddress(props.addressIndex);
  };
  return (
    <>
      <Row>
        <Card
          className={
            "w-100 text-left px-3 " +
            `${
              props.deliveryAddressIndex === props.addressIndex
                ? "green-border"
                : ""
            }`
          }
          onClick={handleCard}
        >
          <CardBody className="py-3">
            <p className="compton-bold font-weight-bold blue-deep mb-2">
              {upperCase(props.content.wording)}
            </p>
            <Label
              className="itc-book blue-deep d-block mb-0 font-12"
              style={styles.label}
            >
              {props.content.street}
            </Label>
            <Label
              className="itc-book blue-deep mb-0 font-12"
              style={styles.label}
            >
              {props.content.postalCode}
              &nbsp;
              {props.content.city}
            </Label>
          </CardBody>
        </Card>
      </Row>
    </>
  );
});

export default AddressItem;
