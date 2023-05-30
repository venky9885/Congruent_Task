import React from 'react';
import '../UI/input.css';
const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;