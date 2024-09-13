import classNames from 'classnames';

import { useEffect, useRef, useState } from 'react';

import { ModalInput, ModalSelect, ModalTextarea } from './Input';
import Dropdown from './Dropdown';

const DatabaseModal = ({ toggleModal, setToggleModal }) => {
  const [additionalClassName, setAdditionalClassName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleModal(false);
      resetValues();
    }
  };

  const resetValues = () => {
    setCompanyName('');
    setType('');
    setLocation('');
    setEmailAddress('');
    setPhone('');
    setNotes('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setToggleModal(false);
    setAdditionalClassName('fadeOut');
    resetValues();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!toggleModal) {
      setTimeout(() => {
        setAdditionalClassName('display-none');
      }, 500);
    } else {
      setAdditionalClassName('');
    }
  }, [toggleModal]);

  return (
    <div
      className={classNames('modal', additionalClassName, {
        fadeIn: toggleModal,
      })}
    >
      <div className="database-modal" ref={dropdownRef}>
        <span className="close-button" title="Close" onClick={handleClose}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33.1411" height="33.1411" rx="16.5705" fill="url(#paint0_linear_579_1015)" />
            <line x1="24.0242" y1="9.8231" x2="9.82025" y2="24.0271" stroke="white" />
            <line x1="9.82059" y1="10.2992" x2="24.0246" y2="24.5032" stroke="white" />
            <defs>
              <linearGradient id="paint0_linear_579_1015" x1="16.5705" y1="0" x2="16.5705" y2="33.1411" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FC3E12" />
                <stop offset="1" stopColor="#FF6B44" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <h3>CREATE DATABASE</h3>
        <form onSubmit={handleSubmit}>
          <RowItem>
            <ModalInput
              label="Company Name"
              name="Company Name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Your Company Name"
            />
          </RowItem>
          <RowItem>
            <ModalSelect label="Type" options={['Client', 'Prospect']} value={type} onChange={(e) => setType(e.target.value)} />
            <ModalSelect
              label="Location"
              options={['Hong Kong', 'Singapore', 'United Kingdom']}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </RowItem>
          <RowItem>
            <ModalInput
              label="Email"
              name="Email"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Enter your email address"
            />
            <ModalInput
              label="Phone"
              name="Phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </RowItem>
          <RowItem>
            <ModalTextarea label="Notes" type="text" name="notes" rows={8} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </RowItem>
        </form>
      </div>
    </div>
  );
};

export default DatabaseModal;

const RowItem = ({ children }) => <div className={classNames('modal_form-item')}>{children}</div>;

export const DealsModal = ({ toggleModal, setToggleModal }) => {
  const [additionalClassName, setAdditionalClassName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [type, setType] = useState('');
  const [sourceLead, setSourceLead] = useState('');
  const [status, setStatus] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleModal(false);
      resetValues();
    }
  };

  const resetValues = () => {
    setCompanyName('');
    setType('');
    setSourceLead('');
    setStatus('');
    setEmailAddress('');
    setPhone('');
    setNotes('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setToggleModal(false);
    setAdditionalClassName('fadeOut');
    resetValues();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!toggleModal) {
      setTimeout(() => {
        setAdditionalClassName('display-none');
      }, 500);
    } else {
      setAdditionalClassName('');
    }
  }, [toggleModal]);

  return (
    <div
      className={classNames('modal', additionalClassName, {
        fadeIn: toggleModal,
      })}
    >
      <div className="database-modal" ref={dropdownRef}>
        <span className="close-button" title="Close" onClick={handleClose}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33.1411" height="33.1411" rx="16.5705" fill="url(#paint0_linear_579_1015)" />
            <line x1="24.0242" y1="9.8231" x2="9.82025" y2="24.0271" stroke="white" />
            <line x1="9.82059" y1="10.2992" x2="24.0246" y2="24.5032" stroke="white" />
            <defs>
              <linearGradient id="paint0_linear_579_1015" x1="16.5705" y1="0" x2="16.5705" y2="33.1411" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FC3E12" />
                <stop offset="1" stopColor="#FF6B44" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <h3>
          <span>CREATE NEW DEAL</span>
          <Dropdown identifier="new-deal" label="Select Category:" options={['Recurring']} />
        </h3>
        <form onSubmit={handleSubmit}>
          <RowItem>
            <ModalInput
              label="Company Name"
              name="Company Name"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Your Company Name"
            />
          </RowItem>
          <RowItem>
            <ModalInput
              label="Email"
              name="Email"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Enter your email address"
            />
            <ModalInput
              label="Phone"
              name="Phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
            />
          </RowItem>
          <RowItem>
            <ModalSelect label="Type" options={['Client', 'Prospect']} value={type} onChange={(e) => setType(e.target.value)} />
            <ModalSelect
              label="Source Lead"
              options={['Hong Kong', 'Singapore', 'United Kingdom']}
              value={sourceLead}
              onChange={(e) => setSourceLead(e.target.value)}
            />
            <ModalSelect
              label="Status"
              options={['Pipeline', 'Postponed', 'Won', 'Lost']}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </RowItem>
          <RowItem>
            <ModalTextarea label="Notes" type="text" name="notes" rows={8} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </RowItem>
        </form>
      </div>
    </div>
  );
};
