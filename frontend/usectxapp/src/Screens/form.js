// import { Fragment } from "react";
import {  useState } from 'react';
import React from 'react';
import postApi from '../api/sendapireq';
import './form.css';
import { Validators } from '../helpers/valid';
import InputField from '../UI/inpcomp';
import InputSlider from '../UI/slider/slide';

function InputForm(params) {
    // const age = React.createRef();
    // const [inputValue, setInputValue] = useState({ age: "", price: "" });
    // const { age, price } = inputValue;
    // const { age, value } = e.target;
    // setInputValue((prev) => ({
    //   ...prev,
    //   [age]: value,
    // }));
   

    const[agerror,setagError]=useState();
    const [salaryerror,setSalaryerror]=useState();
    const [curberror,setCurberror]=useState();
    


    const [ages,setAges]=useState(30);
    const [salary,setSalary]=useState(40000);
    const [curb,setCurb]=useState(1234);
    const [contr,setcontr]= useState(15);
    const [empmatch,setempmatch]= useState(50);
    const [empmatlim,setempmatlim]= useState(6);
    const [expanret,setexpanret]= useState(6);
    




   
  
    
  

 const handleagechange=(event)=>{
    
    // console.log(event)
    if(event.target.name === 'Age'){
      setAges(event.target.value);
      if(Validators.number(ages).error){
        setagError("Please Enter Digits");
      }else{
        setagError()
      }
    }else if (event.target.name === 'salary') {
      setSalary(event.target.value);
      if(Validators.number(salary).error){
        setSalaryerror("Please Enter Digits");
      }else{
        setSalaryerror();
      }
    }
    else if (event.target.name === 'curb') {
      // console.log("CUR");
      // console.log(Validators.number(curb).error);
      setCurb(event.target.value);
      if(Validators.number(curb).error){
        setCurberror("Please Enter Digits");
      }else{
        setCurberror();
      }
    }
    else if (event.target.name === 'contr') {
      setcontr(event.target.value);
    
    }
    else if (event.target.name === 'empmatch') {
      setempmatch(event.target.value);
      

    }
    else if (event.target.name === 'empmatlim') {
      setempmatlim(event.target.value);
      
    }
    else if (event.target.name === 'expanret') {
      console.log(event.target.value);
      setexpanret(event.target.value);
      
    }

    
 }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target)
        
        if(Validators.number(ages).error){
          setagError("Please Enter Digits");
        }
    }

      

    return (
    <div id="form">
        <form action="" method="post"  className="calc" onSubmit={handleSubmit}>
            <h3>401-K Define Contribution calculator</h3>
        
            {/* <label for="age">Current age</label>
            <input name="age" id="age" type='text' ref={age}/>
            <label for="salary">Current annual salary</label>
            <input name="salary" id="salary" type='text' ref={sal}/>
            <label for="curb">Current 401(k) balance</label>
            <input name="curb" id="curb" type='text' ref={balance}/>
            <label for="contr">Contribution (% of salary)</label>
            <input name="contr" id="contr" type='text' ref={cont}/>
            <label for="empmatch">Employer match</label>
            <input name="empmatch" id="empmatch" type='text' ref={empmatc}/>
            <label for="empmatlim">Employer match limit</label>
            <input name="empmatlim" id="empmatlim" type='text' ref={emomatlim}/> */}
          <InputField
            type="number"
            value={ages}
            placeholder="Age"
            label="Age"
            name="Age"
            error={agerror}
            onChange={handleagechange}
          />
          <InputField
            type="number"
            value={salary}
            placeholder="Salary"
            label="Current annual salary"
            name="salary"
            error={salaryerror}
            onChange={handleagechange}
          />
           <InputField
            type="number"
            value={curb}
            placeholder="Current 401(k) balance"
            label="Current 401(k) balance"
            name="curb"
            error={curberror}
            onChange={handleagechange}
          />
           <InputSlider
            // type="number"
            value={contr}
            placeholder="Contribution Salary"
            label="Contribution (% of salary)"
            name="contr"
            // error={contrerror}
            onChange={handleagechange}
          />
          <InputSlider
            // type="number"
            value={empmatch}
            placeholder="Employer match"
            label="Employer match"
            name="empmatch"
            // error={empmatcherror}
            onChange={handleagechange}
          />
          <InputSlider
            // type="number"
            value={empmatlim}
            placeholder="Employer match limit"
            label="Employer match limit"
            name="empmatlim"
            // error={empmatlimerror}
            onChange={handleagechange}
          />
          {/* InputSlider */}
          <InputSlider
            // type="number"
            value={expanret}
            placeholder="Annual return"
            label="Expected annual return"
            name="expanret"
            // error={expanreterror}
            onChange={handleagechange}
          />
          
          
            <button type='submit' className='btncal' onClick={handleSubmit}>Calculate</button>
        </form>
    </div>
    );
            
            
    
}

export default InputForm;