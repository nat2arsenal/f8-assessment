import Layout, { PageHeader } from '../components/Layout';

const Database = () => {
  return (
    <Layout>
      <PageHeader identifier="page-header_database" label="DATABASE">
        <button className="linear-orange-horizontal">Add New Database +</button>
      </PageHeader>
    </Layout>
  );
};

export default Database;
