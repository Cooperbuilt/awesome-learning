import React from 'react';
import './Icon.scss';

const Icon = ({ icon }) => (
  <svg className="Icon" viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
