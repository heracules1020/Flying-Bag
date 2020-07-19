import React from "react";
import { Table } from "reactstrap";
// import { StyleSheet, css } from "aphrodite";

const OrderTable = props => {
  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th className="campton-medium font-14 th-color "></th>
          <th className="campton-medium font-14 th-color ">Service</th>
          <th className="campton-medium font-14 th-color ">Adresse</th>
          <th className="campton-medium font-14 th-color ">Date</th>
          <th className="campton-medium font-14 th-color ">Heure</th>
          <th className="campton-medium font-14 th-color ">Vol</th>
          <th className="campton-medium font-14 th-color ">Prix</th>
          <th className="campton-medium font-14 th-color ">état</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="itc-book font-12 blue-deep ">1</td>
          <td className="itc-book font-12 blue-deep ">Domicile aéroport</td>
          <td className="itc-book font-12 blue-deep ">
            22 rue des fusillés 92800 Puteaux
          </td>
          <td className="itc-book font-12 blue-deep ">19/10/19</td>
          <td className="itc-book font-12 blue-deep ">14h-16h</td>
          <td className="itc-book font-12 blue-deep ">AF2345</td>
          <td className="itc-demi font-18 blue-deep font-weight-bold ">75€</td>
          <td className="itc-book font-12 blue-deep d-flex align-items-center ">
            <div className="dot mr-1 green-color "></div>Validé
          </td>
        </tr>
        <tr>
          <td className="itc-book font-12 blue-deep ">2</td>
          <td className="itc-book font-12 blue-deep ">Domicile aéroport</td>
          <td className="itc-book font-12 blue-deep ">
            22 rue des fusillés 92800 Puteaux
          </td>
          <td className="itc-book font-12 blue-deep ">19/10/19</td>
          <td className="itc-book font-12 blue-deep ">14h-16h</td>
          <td className="itc-book font-12 blue-deep ">AF2345</td>
          <td className="itc-demi font-18 blue-deep font-weight-bold ">75€</td>
          <td className="itc-book font-12 blue-deep ">
            <div className="dot mr-1 green-color d-inline-block "></div>Validé
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OrderTable;
