import React from "react";
import { Row, Label, DropdownItem } from "reactstrap";
import OrderTable from "../../components/admin/Table";

const Orders = React.memo(() => {
  return (
    <>
      <Row className="mx-0 pr-0">
        <Label className="font-22 mb-0 campton-bold blue-light">
          Récapitulatif des commandes
        </Label>
      </Row>
      <Row className="mx-0 mb-3">
        <DropdownItem divider className="w-100" />
      </Row>
      <Row className="mx-0 mb-4">
        <Label className="w-100 mb-0 text-left font-14 itc-book blue-deep">
          Suivez l’ensemble de vos commandes.
        </Label>
      </Row>
      <Row className="mx-0 mb-4">
        <Label className="w-100 mb-0 text-left campton-bold blue-deep">
          En cours
        </Label>
      </Row>
      <Row className="mx-0 mb-4">
        <OrderTable />
      </Row>
      <Row className="mx-0 mb-4">
        <Label className="w-100 mb-0 text-left campton-bold blue-deep">
          Historique
        </Label>
      </Row>
      <Row className="mx-0 mb-4">
        <OrderTable />
      </Row>
    </>
  );
});

export default Orders;
