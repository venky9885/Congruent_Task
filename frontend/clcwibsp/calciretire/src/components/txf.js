import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';

function PlaintextExample(props) {
  // const [val, setVal] = useState(props.val);
  // const handleChange = (e) => {
  //   e.preventDefault(); // prevent the default action
  //   setVal(e.target.value); // set name to e.target.value (event)
  // };
  return (
      <Form.Group as={Row} className="mt-2" controlId={"formPlaintext"+props.label}  >
        <Form.Label column sm="4">
          {props.label}
        </Form.Label>
        <Col sm="5">
          <InputGroup className="mb-3" hasValidation>
          {props.symbol && <InputGroup.Text id="basic-addon1">{props.symbol}</InputGroup.Text>}
            <Form.Control required  min = {props.min} max= {props.max} type="number" placeholder={props.plc}  value={props.val} name={props.name} onChange={props.handleChang}/>
            <Form.Control.Feedback type="invalid">
              Please enter correctly.
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
        {/* <Col sm="2">
          <Form.Control type="number" placeholder={props.plc}  value={props.val} name={props.name} onChange={props.handleChang}/>
        </Col> */}
      </Form.Group>
   
  );
}

export default PlaintextExample;


