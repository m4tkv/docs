import React, { LegacyRef } from "react";
import { Table as TableComponent } from "react-bootstrap";
import { observer } from "mobx-react";
import Store from "../../store";

type TProps = {
  tableRef: LegacyRef<HTMLDivElement>;
};

const Table: React.FC<TProps> = ({ tableRef }) => {
  const {
    docNumber,
    senderName,
    senderPhone,
    senderCompanyName,
    senderAddress,
  } = Store;
  return (
    <div ref={tableRef}>
      <TableComponent id={"table"} striped bordered hover>
        <thead>
          <tr>
            <th
              colSpan={2}
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {docNumber || "0"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "200px" }}>ФИО</td>
            <td>{senderName}</td>
          </tr>
          <tr>
            <td style={{ width: "200px" }}>Телефон</td>
            <td>{senderPhone}</td>
          </tr>
          <tr>
            <td style={{ width: "200px" }}>Компания</td>
            <td>{senderCompanyName}</td>
          </tr>
          <tr>
            <td style={{ width: "200px" }}>Адрес</td>
            <td>{senderAddress}</td>
          </tr>
        </tbody>
      </TableComponent>
    </div>
  );
};

export default observer(Table);
