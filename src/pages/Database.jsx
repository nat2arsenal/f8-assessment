import Layout from '../components/Layout';

const Database = () => {
  const name = localStorage.getItem('name') ? localStorage.getItem('name') : null;
  return <Layout>{name}</Layout>;
};

export default Database;
