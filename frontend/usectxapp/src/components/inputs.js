// import { Fragment } from "react";
import { useEffect, useState } from 'react';
import React from 'react';
import postApi from './sendapireq';
import '../components/inputs.css';
import SimpleInput from '../UI/input';
import InputField from '../UI/input';
import { Validators } from 'react';
function InputForm(params) {
    // const age = React.createRef();
    // const sal =  React.createRef();
    // const balance =  React.createRef();
    // const cont =  React.createRef();
    // const empmatc =  React.createRef();
    // const emomatlim =  React.createRef();
    // const [message ,setMessage] = useState('');
    // const sal =  React.createRef();

    
    const [inputValue, setInputValue] = useState({ name: "", price: "" });
    const { name, price } = inputValue;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(inputValue);
    };
    // useEffect(() => {
      
    //   // age.current.focus();
    //   return () => {
    //     // console.log()
    //   }
    // }, [])
    
  //   state = {
  //     text: '',
  //     number: '',
  //     email: '',
  //     country: '',
  //     message: '',
  //     acceptance: false
  // };

 

    const handleSubmit = (event) => {
        event.preventDefault();
        // postApi({
        //     age:age.current.value
        // });
        // alert(`The name you entered was: ${age.current.value}`)
      }

      

    return (
    <div id="form">
        <form action="" method="post"  class="calc" onSubmit={handleSubmit}>
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
         type="text"
         value={name}
         placeholder="Product Name"
         label="Name"
         name="name"
         onChange={handleChange}
       />
       <InputField
         type="number"
         value={price}
         placeholder="Add Price"
         label="Price"
         name="price"
         error={"error"}
         onChange={handleChange}
       />
           
            <button type='submit' className='btncal'>Calculate</button>

               </form>
    </div>
    );
            
            
    
}

export default InputForm;