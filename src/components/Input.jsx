const Input = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="input">
      <label className="input_label no-highlight" htmlFor={name}>
        {label}
      </label>
      <input className="input_field" id={name} type={type} name={name} value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default Input;
