import React, { useState } from 'react';
import './Footer.css';

const tabs = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Active' },
  { id: 3, name: 'Completed' },
];

const showBorder = (e) => {
  e.target.style.border = '1px solid grey';
};
const removeBorder = (e) => {
  e.target.style.border = 'none';
};
function Footer() {
  //   const [style, setStyle] = useState( e.target.style.display: 'none' );
  return (
    <div className='footer'>
      <div className='task__count'>Count</div>
      <div className='tabs'>
        {' '}
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className='tab'
              onMouseOver={showBorder}
              onMouseOut={removeBorder}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className='clear__completed'> Clear Completed</div>
    </div>
  );
}

export default Footer;
