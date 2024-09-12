import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Dropdown from '../components/Dropdown';
import Layout, { PageHeader } from '../components/Layout';
import SummaryItem, { SummaryItemCalendar } from '../components/SummaryItem';

const Summary = () => {
  const name = localStorage.getItem('name') ? localStorage.getItem('name') : null;
  const navigate = useNavigate();

  const summaryItems = [
    {
      label: 'Hong Kong (HKD)',
      type: 'Projects',
      typeColor: 'orange',
    },
    {
      label: 'Singapore (SGD)',
      type: 'Projects',
      typeColor: 'orange',
    },
    {
      label: 'United Kingdom',
      type: 'Projects',
      typeColor: 'orange',
    },
    {
      label: 'Consolidated (HKD)',
      type: 'Projects',
      typeColor: 'yellow',
      bgColor: 'black',
    },
    {
      label: 'Hong Kong (HKD)',
      type: 'Recurring',
      typeColor: 'blue',
    },
    {
      label: 'Singapore (SGD)',
      type: 'Recurring',
      typeColor: 'blue',
    },
    {
      label: 'United Kingdom',
      type: 'Recurring',
      typeColor: 'blue',
    },
    {
      label: 'Consolidated (HKD)',
      type: 'Recurring',
      typeColor: 'blue',
      bgColor: 'black',
    },
  ];

  useEffect(() => {
    if (name === null) {
      navigate('/');
    }
  }, [navigate, name]);

  return (
    <Layout>
      <PageHeader identifier="page-header_summary" label="SUMMARY">
        <div className="dropdowns-container">
          <Dropdown identifier="location" label="Filter by Location:" options={['Singapore', 'Hong Kong', 'United Kingdom']} />
          <Dropdown identifier="services" label="Filter by Services:" options={['Digital Services', 'Service 2', 'Service 3']} />
        </div>
      </PageHeader>
      <div className="summary-page-content">
        {summaryItems?.map((item, index) => (
          <SummaryItem key={index} label={item.label} type={item.type} typeColor={item.typeColor} bgColor={item.bgColor} />
        ))}
        <SummaryItemCalendar label="Hong Kong Won Clients" />
        <SummaryItemCalendar label="Singapore Won Clients" />
        <SummaryItemCalendar label="United Kingdom" />
        <SummaryItemCalendar label="Consolidated (HKD)" />
      </div>
    </Layout>
  );
};

export default Summary;
