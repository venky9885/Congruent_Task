import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import './sli.css';
// import './App.css';
function RangeSlide(props) {
  return (

    <Form.Group as={Row} className="mt-2" controlId={"formPlaintext"+props.label}  >
      <Form.Label column sm="4">
          {props.label}
        </Form.Label>
        <Col sm="4">
        <Form.Range  value={props.val} onChange={props.handleChang}  name={props.name} />
        </Col>
        <Col sm="1" >
        <p  >{props.val} %</p>
        </Col>
        

        {/* <p column sm="2">{props.val}</p> */}
      </Form.Group>

  );
}

export default RangeSlide;