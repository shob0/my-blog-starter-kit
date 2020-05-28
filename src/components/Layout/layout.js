import React from 'react';
import './layout.css';
import Header from '../Header/header';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import { Helmet } from 'react-helmet';

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="left-margin"></div>
      <div className="body-div">
        <div className="layout">
          <Header></Header>
          <main>{children}</main>
        </div>
      </div>
      <div className="right-margin"></div>
    </>
  );
}
