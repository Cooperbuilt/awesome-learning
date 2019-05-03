import React from 'react';
import Helmet from 'react-helmet';
import './Layout.scss';

const Layout = ({ children, title, description }) => (
  <div className="Layout">
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

export default Layout;
