import Dropdown from '../components/Dropdown';
import Layout, { PageHeader } from '../components/Layout';

const Users = () => {
  return (
    <Layout>
      <PageHeader identifier="page-header_users" label="USERS">
        <div className="dropdowns-container">
          <Dropdown identifier="location" label="Filter by Location:" options={['Singapore', 'Hong Kong', 'United Kingdom']} />
          <Dropdown identifier="services" label="Filter by Services:" options={['Digital Services', 'Service 2', 'Service 3']} />
        </div>
      </PageHeader>
    </Layout>
  );
};

export default Users;
