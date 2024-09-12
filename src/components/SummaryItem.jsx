import classNames from 'classnames';

import postponed from '../assets/postponed-icon.png';
import won from '../assets/won-icon.png';
import { CalendarDropdown } from './Dropdown';

const SummaryItem = ({ label, type, typeColor, bgColor }) => {
  return (
    <div className="summary-page-item">
      <div className={classNames('summary-page-item_inner ', bgColor ? bgColor : null)}>
        <div className="summary-page-item_header">
          <h5>{label}</h5>
          <h6 className={classNames(typeColor)}>{type}</h6>
        </div>
        <div className="summary-page-item_items-container">
          <div className="summary-page-item_item">
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 17V21.2C9 22.5199 9 23.1799 8.53138 23.5899C8.06274 24 7.3085 24 5.8 24H4.2C2.6915 24 1.93726 24 1.46862 23.5899C1 23.1799 1 22.5199 1 21.2V19.8C1 18.4801 1 17.8201 1.46862 17.4101C1.93726 17 2.6915 17 4.2 17H9Z"
                fill="white"
                stroke="url(#paint0_linear_0_1)"
                strokeWidth="2"
              />
              <path
                d="M17 8V3.8C17 2.48007 17 1.82011 17.4686 1.41005C17.9373 1 18.6915 1 20.2 1H21.8C23.3085 1 24.0627 1 24.5314 1.41005C25 1.82011 25 2.48007 25 3.8V5.2C25 6.51993 25 7.17989 24.5314 7.58995C24.0627 8 23.3085 8 21.8 8H17Z"
                fill="white"
                stroke="url(#paint1_linear_0_1)"
                strokeWidth="2"
              />
              <path d="M17 8L9 17" stroke="url(#paint2_linear_0_1)" strokeWidth="2" />
              <defs>
                <linearGradient id="paint0_linear_0_1" x1="5" y1="17" x2="5" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FC3E12" />
                  <stop offset="1" stopColor="#FF6B44" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="21" y1="1" x2="21" y2="8" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FC3E12" />
                  <stop offset="1" stopColor="#FF6B44" />
                </linearGradient>
                <linearGradient id="paint2_linear_0_1" x1="13" y1="8" x2="13" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FC3E12" />
                  <stop offset="1" stopColor="#FF6B44" />
                </linearGradient>
              </defs>
            </svg>
            <div className="summary-page-item_item--stats">
              <div className="upper">
                <p>Pipeline - 01</p>
                <p>$2,500</p>
              </div>
              <div className={classNames('lower', bgColor ? bgColor : null)}>
                <div className="lower_inner linear-orange-vertical" style={{ width: '15%' }}>
                  15%
                </div>
              </div>
            </div>
          </div>
          <div className="summary-page-item_item">
            <img className="postponed-icon" src={postponed} width={23} height={26} />
            <div className="summary-page-item_item--stats">
              <div className="upper">
                <p>Postponed - 02</p>
                <p>$5,000</p>
              </div>
              <div className={classNames('lower', bgColor ? bgColor : null)}>
                <div className="lower_inner linear-orange-vertical" style={{ width: '50%' }}>
                  50%
                </div>
              </div>
            </div>
          </div>
          <div className="summary-page-item_item">
            <img className="won-icon" src={won} width={26} height={26} />
            <div className="summary-page-item_item--stats">
              <div className="upper">
                <p>Won - 02</p>
                <p>$2,500</p>
              </div>
              <div className={classNames('lower', bgColor ? bgColor : null)}>
                <div className="lower_inner linear-orange-vertical" style={{ width: '30%' }}>
                  30%
                </div>
              </div>
            </div>
          </div>
          <div className="summary-page-item_item">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.4 0H2.6C1.16406 0 0 1.16406 0 2.6V23.4C0 24.8359 1.16406 26 2.6 26H23.4C24.8359 26 26 24.8359 26 23.4V2.6C26 1.16406 24.8359 0 23.4 0Z"
                fill="url(#paint0_linear_0_1)"
              />
              <path
                d="M12.5686 18C12.3734 17.9991 12.1808 17.9552 12.0053 17.8714C11.8297 17.7876 11.6757 17.6661 11.5546 17.516L6.35464 11.1479C6.23107 11.0196 6.13604 10.8676 6.07556 10.7015C6.01508 10.5354 5.99048 10.3588 6.0033 10.1829C6.01613 10.007 6.06611 9.83557 6.15008 9.67957C6.23404 9.52356 6.35016 9.38634 6.49108 9.2766C6.632 9.16686 6.79465 9.08699 6.96873 9.04205C7.1428 8.9971 7.3245 8.98807 7.50232 9.01552C7.68015 9.04297 7.85021 9.1063 8.00175 9.2015C8.15328 9.2967 8.28299 9.4217 8.38264 9.56858L12.5686 14.6631L16.7546 9.56858C16.9782 9.33654 17.2825 9.19517 17.6074 9.17244C17.9322 9.1497 18.254 9.24726 18.5089 9.4458C18.7639 9.64435 18.9335 9.92942 18.9842 10.2446C19.0348 10.5598 18.9629 10.8821 18.7826 11.1479L13.5826 17.516C13.4616 17.6661 13.3075 17.7876 13.132 17.8714C12.9565 17.9552 12.7639 17.9991 12.5686 18Z"
                fill="white"
              />
              <defs>
                <linearGradient id="paint0_linear_0_1" x1="13" y1="0" x2="13" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FC3E12" />
                  <stop offset="1" stopColor="#FF6B44" />
                </linearGradient>
              </defs>
            </svg>
            <div className="summary-page-item_item--stats">
              <div className="upper">
                <p>Lost - 03</p>
                <p>$7,500</p>
              </div>
              <div className={classNames('lower', bgColor ? bgColor : null)}>
                <div className="lower_inner linear-orange-vertical" style={{ width: '40%' }}>
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;

const calendarOptions = ['2024 - 2025', '2023 - 2024', '2022 - 2023', '2021 - 2022', '2020 - 2021', '2019 - 2020'];

export const SummaryItemCalendar = ({ label }) => {
  return (
    <div className="summary-page-item calendar">
      <div className="summary-page-item_header calendar">
        <h4>{label}</h4>
        <CalendarDropdown identifier="calendar" label="Year:" options={calendarOptions} />
      </div>
      <div className="summary-page-item_calendar-content">
        <div className="summary-page-item_calendar-row">
          <div className="month">APR</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">MAY</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">JUN</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">JULY</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">AUG</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">SEPT</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">OCT</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">NOV</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">DEC</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">JAN</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">FEB</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
        </div>
        <div className="summary-page-item_calendar-row">
          <div className="month">MAR</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
          <div className="calendar-item">Test Contact 1</div>
        </div>
      </div>
    </div>
  );
};
