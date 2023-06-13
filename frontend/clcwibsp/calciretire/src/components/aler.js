import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible(props) {
//   const [show, setShow] = useState(props.show);

  return (
    <>
      <Alert show={props.show} variant="success">
        <Alert.Heading>Result</Alert.Heading>
        <p>
        At the retirement age of {props.age}, the 401(k) balance will be ${props.bal}, which is equivalent to $560,505 in purchasing power today
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => props.dism(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

export default AlertDismissible;