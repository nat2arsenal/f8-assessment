import DealsPageItem from '../components/DealsPageItem';
import Layout from '../components/Layout';

const Deals = () => {
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

  return (
    <Layout>
      <div className="page-header page-header_deals"></div>
      <div className="deals-page-content">
        <div className="deals-page-column pipeline">
          <div className="deals-page-column_header"></div>
          <div className="deals-page-column_data">
            {pipelineData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#FC3E12" secondaryColor="#FF6B44" key={index} />
            ))}
          </div>
        </div>
        <div className="deals-page-column postponed">
          <div className="deals-page-column_data">
            {postponedData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#FFBF1B" secondaryColor="#E9A800" key={index} />
            ))}
          </div>
        </div>
        <div className="deals-page-column won">
          <div className="deals-page-column_data">
            {wonData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#FC1274" secondaryColor="#FF0000" key={index} />
            ))}
          </div>
        </div>
        <div className="deals-page-column lost">
          <div className="deals-page-column_data">
            {lostData?.map((data, index) => (
              <DealsPageItem label={data.label} value={data.value} type={data.type} primaryColor="#00AE07" secondaryColor="#00E809" key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deals;
