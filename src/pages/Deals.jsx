import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import DealsPageItem, { DealsPageColumnHeader } from '../components/DealsPageItem';
import Dropdown from '../components/Dropdown';
import Layout, { PageHeader } from '../components/Layout';
import { DealsModal } from '../components/Modal';

const Deals = () => {
  const name = localStorage.getItem('name') ? localStorage.getItem('name') : null;

  const [toggleModal, setToggleModal] = useState(false);

  const navigate = useNavigate();

  const pipelineData = [
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
  ];

  const postponedData = [
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
  ];

  const wonData = [
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
  ];

  const lostData = [
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'deal',
    },
    {
      label: 'Test Contact',
      value: '2,500 SGD',
      type: 'replay',
    },
  ];

  useEffect(() => {
    if (name === null) {
      navigate('/');
    }
  }, [navigate, name]);

  return (
    <Layout>
      <PageHeader identifier="page-header_deals" label="DEALS">
        <div className="dropdowns-container">
          <Dropdown identifier="location" label="Filter by Location:" options={['Singapore', 'Hong Kong', 'United Kingdom']} />
          <Dropdown identifier="services" label="Filter by Services:" options={['Digital Services', 'Service 2', 'Service 3']} />
        </div>
        <button className="linear-orange-horizontal" title="Add New Deal" onClick={() => setToggleModal(true)}>
          Add New Deals +
        </button>
      </PageHeader>
      <div className="deals-page-content">
        <div className="deals-page-column">
          <DealsPageColumnHeader label="PIPELINE" count={pipelineData?.length} type="pipeline" color="#FC3E12" />
          <div className="deals-page-column_data">
            {pipelineData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#FC3E12" secondaryColor="#FF6B44" key={index} />
            ))}
          </div>
        </div>
        <div className="deals-page-column">
          <DealsPageColumnHeader label="POSTPONED" count={postponedData?.length} type="postponed" color="#E9A800" />
          <div className="deals-page-column_data">
            {postponedData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#FFBF1B" secondaryColor="#E9A800" key={index} />
            ))}
          </div>
        </div>
        <div className="deals-page-column">
          <DealsPageColumnHeader label="WON" count={wonData?.length} type="won" color="#FC1274" />
          <div className="deals-page-column_data">
            {wonData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#FC1274" secondaryColor="#FF0000" key={index} />
            ))}
          </div>
        </div>
        <div className="deals-page-column">
          <DealsPageColumnHeader label="LOST" count={lostData?.length} type="lost" color="#00AE07" />
          <div className="deals-page-column_data">
            {lostData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#00AE07" secondaryColor="#00E809" key={index} />
            ))}
          </div>
        </div>
      </div>
      <DealsModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
    </Layout>
  );
};

export default Deals;
