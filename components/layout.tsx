import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>NODE.</title>
      </Head>
      <nav className="navbar">
        <div className="logo-container">
          <Image src="/images/logo.png" alt="NODE." layout="fill" objectFit="contain" objectPosition="left" />
        </div>
      </nav>
      <main className="main-content">{children}</main>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #fefefe;
        }
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .navbar {
          display: flex;
          align-items: flex-end;
          background-color: #fefefe;
          padding: 10px 0 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .logo-container {
          position: relative;
          width: 70%;
          height: 0;
          padding-bottom: 15%;
          margin-left: 20px;
        }
        .main-content {
          flex-grow: 1;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Layout;