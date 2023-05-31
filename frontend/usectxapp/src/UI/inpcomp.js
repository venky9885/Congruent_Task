import React from 'react';
import '../UI/inpcomp.css';


const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  min,
  max,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
      // id='inp'
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className={name}
        // placeholder={placeholder}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;