import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import SideNav from './SideNav';

import search from '../assets/search-icon.png';
import notification from '../assets/notification-icon.png';
import avatar from '../assets/avatar.png';

const Layout = ({ children }) => {
  return (
    <div className="page-layout">
      <SideNav />
      <div className="page-layout_content-container">
        <div className="page-layout_content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

export const PageHeader = ({ identifier, label, children }) => {
  const name = localStorage.getItem('name') ? localStorage.getItem('name') : null;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('name');
    navigate('/');
  };

  return (
    <div className="page-header">
      <div className={classNames('page-header_inner', identifier)}>
        <div className="page-header_dynamic">
          <h2>{label}</h2>
          {children}
        </div>
        <div className="page-header_static">
          <img className="search-icon" src={search} width={34} height={34} title="Search" />
          <img className="notification-icon" src={notification} width={31} height={34} title="Notifications" />
          <div className="dropdown-container">
            <label className="avatar">
              <img className="search-icon" src={avatar} width={37} height={36} />
              {name}
            </label>
            <select className={identifier} onChange={handleLogout}>
              <option style={{ display: 'none' }}></option>
              <option style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>Logout</option>
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
        </div>
      </div>
    </div>
  );
};
