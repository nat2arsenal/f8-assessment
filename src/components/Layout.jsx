import SideNav from './SideNav';

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
