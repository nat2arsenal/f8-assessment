import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout, { PageHeader } from '../components/Layout';

import more from '../assets/more-icon.png';
import DatabaseModal from '../components/Modal';

const Database = () => {
  const name = localStorage.getItem('name') ? localStorage.getItem('name') : null;

  const navigate = useNavigate();

  const initialDataBase = [
    {
      companyName: 'Test Contact 1',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 2',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 3',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Prospect',
    },
    {
      companyName: 'Test Contact 4',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 5',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 6',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Prospect',
    },
    {
      companyName: 'Test Contact 7',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Prospect',
    },
    {
      companyName: 'Test Contact 8',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 9',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 10',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 11',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Prospect',
    },
    {
      companyName: 'Test Contact 12',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Client',
    },
    {
      companyName: 'Test Contact 13',
      location: 'Hong Kong',
      phone: '1234567890',
      emailAddress: 'sample@functioneight.com',
      notes: 'this is a test note',
      types: 'Prospect',
    },
  ];

  const [sortStatus, setSortStatus] = useState('none');
  const [databaseData, setDatabaseData] = useState(initialDataBase);
  const [toggleModal, setToggleModal] = useState(false);

  const handleTypesSort = () => {
    if (sortStatus === 'none') {
      setSortStatus('client');
      handleSorting('client');
    } else if (sortStatus === 'client') {
      setSortStatus('prospect');
      handleSorting('prospect');
    } else {
      setSortStatus('none');
      handleSorting('none');
    }
  };

  const handleSorting = (type) => {
    if (type === 'client') {
      setDatabaseData(initialDataBase.sort((a, b) => a.types.localeCompare(b.types)));
    } else if (type === 'prospect') {
      setDatabaseData(initialDataBase.sort((a, b) => b.types.localeCompare(a.types)));
    } else {
      setDatabaseData(initialDataBase);
    }
  };

  useEffect(() => {
    if (name === null) {
      navigate('/');
    }
  }, [navigate, name]);

  return (
    <Layout>
      <PageHeader identifier="page-header_database" label="DATABASE">
        <button className="linear-orange-horizontal" title="Add New Database" onClick={() => setToggleModal(true)}>
          Add New Database +
        </button>
      </PageHeader>
      <div className="database-content">
        <table className="database-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Email Address</th>
              <th>Notes</th>
              <th>
                Types
                <span
                  title={sortStatus === 'none' ? 'Client Sorting' : sortStatus === 'client' ? 'Prospect Sorting' : 'Clear Sorting'}
                  onClick={handleTypesSort}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9 3.36807V12.6667C11.9 12.9796 11.6463 13.2333 11.3333 13.2333C11.0204 13.2333 10.7667 12.9796 10.7667 12.6667V3.36807L9.06738 5.06738C8.84608 5.28867 8.48729 5.28867 8.26599 5.06738C8.04469 4.84608 8.04469 4.48729 8.26599 4.26599L10.9327 1.59932C11.154 1.37803 11.5127 1.37803 11.734 1.59932L14.4007 4.26599C14.622 4.48729 14.622 4.84608 14.4007 5.06738C14.1794 5.28867 13.8206 5.28867 13.5993 5.06738L11.9 3.36807ZM5.23335 3.33335C5.23335 3.02039 4.97964 2.76668 4.66668 2.76668C4.35372 2.76668 4.10002 3.02039 4.10002 3.33335V12.632L2.40071 10.9327C2.17941 10.7114 1.82062 10.7114 1.59932 10.9327C1.37803 11.154 1.37803 11.5127 1.59932 11.734L4.26599 14.4007C4.48729 14.622 4.84608 14.622 5.06738 14.4007L7.73404 11.734C7.95534 11.5127 7.95534 11.154 7.73404 10.9327C7.51275 10.7114 7.15395 10.7114 6.93266 10.9327L5.23335 12.632V3.33335Z"
                      fill={sortStatus === 'none' ? '#7C8DB5' : '#000000'}
                    />
                  </svg>
                </span>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="dummy">
            <tr>
              <td></td>
            </tr>
          </tbody>
          <tbody className="actual">
            {databaseData?.map((data, index) => (
              <tr key={index}>
                <td>{data.companyName}</td>
                <td>{data.location}</td>
                <td>{data.phone}</td>
                <td>{data.emailAddress}</td>
                <td>{data.notes}</td>
                <td>
                  <span>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4.5" cy="4.5" r="4" fill={data.types.toLowerCase() === 'client' ? '#00D709' : '#F54112'} />
                    </svg>
                    {data.types}
                  </span>
                </td>
                <td>
                  <img src={more} width={29} height={29} alt="More" title="More" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DatabaseModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
    </Layout>
  );
};

export default Database;
