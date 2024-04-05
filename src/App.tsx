import React, {useRef} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { observer } from "mobx-react";
import Store from "./store";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Table from "./components/table";
import  {useReactToPrint} from 'react-to-print';

function App() {

  const ref = useRef<HTMLDivElement>(null);
  const {
    docNumber,
    setDocNumber,
    senderName,
    setSenderName,
    senderPhone,
    setSenderPhone,
      senderCompanyName,
      setSenderAddress,
      senderAddress,
      setSenderCompanyName
  } = Store;

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  console.log('docNumber',docNumber)

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ padding: 16, width: "50%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Номер документа</Form.Label>
              <Form.Control
                type={"number"}
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ФИО</Form.Label>
              <Form.Control
                onChange={(e) => setSenderName(e.target.value)}
                value={senderName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Телефон</Form.Label>
              <PhoneInput
                country={"RU"}
                onChange={(v) => setSenderPhone(v?.toString() ?? "")}
                value={senderPhone}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Компания</Form.Label>
              <Form.Control
                  onChange={(e) => setSenderCompanyName(e.target.value)}
                  value={senderCompanyName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Адрес</Form.Label>
              <Form.Control
                  onChange={(e) => setSenderAddress(e.target.value)}
                  value={senderAddress}
              />
            </Form.Group>

            <Table tableRef={ref}/>

            <Button variant="primary" onClick={handlePrint}>
              Submit
            </Button>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default observer(App);
