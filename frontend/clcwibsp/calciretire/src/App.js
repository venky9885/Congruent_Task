
import './App.css';
import FormScr from './screens/form';
import { Card } from 'react-bootstrap';
function App() {
  return (
    //
    <Card className='rounded-7' >
      <Card.Header as="h5">401-K Calculator</Card.Header>
        <Card.Body>
          <FormScr/>
        </Card.Body> 
    </Card>
    
  );
}

export default App;
