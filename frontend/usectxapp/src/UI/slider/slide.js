// import React, { useEffect } from 'react';
import '../slider/slide.css';
// import '..../UI/inpcomp.css';


const InputSlider = ({
  name,
  label,
  value,
  onChange,
  error,
}) => {

  // useEffect(() => {
  //   console.log("Mouted");
  
  //   return ;
  // }, [])
  
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <div className="slidecontainer">
      
      <input
      // id={name}
        type="range"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        min="1"
        max="100"
        className={"slider"}
        // placeholder={placeholder}
      />
      {/* <div>5</div> */}
      <p id="rangeValue" className="rVal">{value}</p>
      </div>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};

export default InputSlider;