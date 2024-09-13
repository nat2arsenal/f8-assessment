import classNames from 'classnames';

const Dropdown = ({ identifier, label, options = [] }) => {
  return (
    <div className={classNames('dropdown-container', identifier)}>
      <label className={identifier}>{label}</label>
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

export const CalendarDropdown = ({ identifier, label, options = [] }) => {
  return (
    <div className="dropdown-container-calendar">
      <label className="calendar">{label}</label>
      <select className={identifier}>
        {options?.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <svg width="4" height="3" viewBox="0 0 4 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.592774 1.12362L1.76901 2.78553C1.94613 3.03578 2.23224 3.03578 2.40936 2.78553L3.58559 1.12362C3.8717 0.719367 3.66734 0.0263672 3.26315 0.0263672H0.910676C0.506486 0.0263672 0.306662 0.719367 0.592774 1.12362Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
