const Dropdown = ({ identifier, label, options = [] }) => {
  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <select className={identifier}>
        {options?.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.276621 0.260107C0.64545 -0.0867022 1.24344 -0.0867022 1.61227 0.260107L6.5 4.85603L11.3877 0.260107C11.7566 -0.0867022 12.3546 -0.0867022 12.7234 0.260107C13.0922 0.606916 13.0922 1.1692 12.7234 1.51601L7.16782 6.73989C6.79899 7.0867 6.20101 7.0867 5.83218 6.73989L0.276621 1.51601C-0.0922071 1.1692 -0.0922071 0.606916 0.276621 0.260107Z"
          fill="#676767"
        />
      </svg>
    </div>
  );
};

export default Dropdown;
