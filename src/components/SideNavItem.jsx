import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const SideNavItem = ({ pathname, label, children }) => {
  let location = useLocation();
  return (
    <li>
      <Link
        className={classNames('sidenav_sections-category no-highlight', {
          'sidenav_sections-category--active': location.pathname.startsWith(`${pathname}`),
        })}
        to={pathname}
      >
        <div className="icon">{children}</div>
        <p>{label}</p>
      </Link>
    </li>
  );
};

export default SideNavItem;
