import classNames from 'classnames';

const Input = ({ label, type, name, value, onChange, required, error = null }) => {
  return (
    <div className="input">
      <label className="input_label" htmlFor={name}>
        {label}
        {type === 'email'
          ? error === 'email' && <p className="input_error-message">Error! Please use sampleuser@email.com</p>
          : error === 'password' && <p className="input_error-message">Error! Please use user123</p>}
      </label>
      <input className="input_field" id={name} type={type} name={name} value={value} onChange={onChange} required={required} />
    </div>
  );
};

export default Input;

export const ModalInput = ({ label, type, name, value, onChange, placeholder, required }) => {
  return (
    <div className="modal-input">
      {label && (
        <label className="modal-input_label no-highlight" htmlFor={name}>
          {label}
        </label>
      )}
      <input className="modal-input_field" type={type} id={name} value={value} onChange={onChange} placeholder={placeholder} required={required} />
    </div>
  );
};

export const ModalSelect = ({ label, name, options = [], required, onChange, value }) => {
  return (
    <div className="modal-select">
      {label && (
        <label htmlFor={name} className="modal-select_label">
          {label}
        </label>
      )}
      <div className={classNames('modal-select_container')}>
        <select id={name} value={value} onChange={onChange} required={required}>
          <option value="">-- Select Type--</option>
          {options?.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 6L0.669873 2.52643e-07L9.33013 9.03342e-07L5 6Z" fill="#585858" />
        </svg>
      </div>
    </div>
  );
};

export const ModalTextarea = ({ label, type, name, value, onChange, rows }) => {
  return (
    <div className="modal-textarea">
      {label && (
        <label htmlFor={name} className="modal-select_label">
          {label}
        </label>
      )}
      <textarea id={name} type={type} rows={rows} value={value} onChange={onChange} />
    </div>
  );
};
