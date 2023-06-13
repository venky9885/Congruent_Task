import PlaintextExample from "../components/txf";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Button ,Alert} from "react-bootstrap";
import { useState } from 'react';
import AlertDismissible from "../components/aler";
import RangeSlide from "../components/sli";
import LoadingButton from "../components/button";


function FormScr() {
  const [resp,setResp]=useState(false);
  const [isLoading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);



    const [formData, setFormData] = useState({
        age: 30,
        cursala: 70000,
        curb:30000,
        contr: 15,
        empmatch:50,
        empmatlim:6,
        expanret:6
      });
    
      const handleInputChange = (event) => {
       
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          
          [event.target.name]: event.target.value,
        }));
      };
    
    function onsubmit(event){
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
      
        event.stopPropagation();
      }

      setValidated(true);

      
      // setResp(true);
            // event.preventDefault();
            
    };

    function simulateNetworkRequest() {
      // fetch('https://api.npms.io/v2/invalid-url')
      // .then(async response => {
      //     const data = await response.json();

      //     // check for error response
      //     if (!response.ok) {
      //         // get error message from body or default to response statusText
      //         const error = (data && data.message) || response.statusText;
      //         return Promise.reject(error);
      //     }

      //     this.setState({ totalReactPackages: data.total })
      // })
      // .catch(error => {
      //     this.setState({ errorMessage: error.toString() });
      //     console.error('There was an error!', error);
      // });
      // new Promise((resolve) => setTimeout(resolve, 2000));
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }


    return (
    //    <Card className="mt-30 md-30 ml-30">
    <Container >
            <Form onSubmit={onsubmit}  validated={validated}>
                <Col >
                {resp&&<AlertDismissible show={true} dism={setResp} age={65} bal={4456}  />}
                    <PlaintextExample  label = {"Current Age"} min= {18} max ={65} plc = {"Age"} val = {formData.age} handleChang={handleInputChange} name="age"/>
                    <PlaintextExample symbol={'$'} label = {"Current annual salary"} plc = {"Salary"} val = {formData.cursala} handleChang={handleInputChange} name="cursala"/>
                    <PlaintextExample symbol={'$'} label = {"Current 401(k) balance"} plc = {"Balance"} val = {formData.curb} handleChang={handleInputChange} name="curb"/>
                    
                    <RangeSlide label={"Contribution (% of salary)"} val={formData.contr} name="contr" handleChang={handleInputChange}/>
                    <RangeSlide label={"Employer match"} val={formData.empmatch} name="empmatch" handleChang={handleInputChange}/>
                    <RangeSlide label={"Employer match limit"} val={formData.empmatlim} name="empmatlim" handleChang={handleInputChange}/>
                    <RangeSlide label={"Expected Annual return"} val={formData.expanret} name="expanret" handleChang={handleInputChange}/>
                    
                    <Col sm={9}>
                        {/* <Button  type='submit'  className='mt-2 float-end m-2'>
                                Calculate
                        </Button> */}
                        <LoadingButton isLoading = {isLoading} setLoading={setLoading} setResp={setResp} simulateNetworkRequest={simulateNetworkRequest}/>
                    </Col>
                </Col>
                    
            </Form>
            </Container>
    //   </Card>
    );
  }

export default FormScr;
