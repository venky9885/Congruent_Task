import React from 'react';
import '../slider/slide.css';
// import '..../UI/inpcomp.css';


const InputSlider = ({
  name,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <div >
      <label htmlFor={name}>{label}</label>
      <div class="slidecontainer">
      
      <input
      // id='inp'
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
      {/* <p id="rangeValue">10</p> */}
      </div>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
};

export default InputSlider;