import React from 'react';
import Sidebar from './Sidebar';
import './UrlRegistration.css';

const UrlRegistration = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <main className="url-main-content">
        <div className="title-container">
          <h1 className="main-title">URL 등록</h1>
          <p className="subtitle">보호할 정보가 있는 URL을 등록해보세요.</p>
        </div>

        <div className="registration-form">
          <input
            type="text"
            className="url-input"
            placeholder="http://"
          />
          <button className="register-button">등록</button>
        </div>
      </main>
    </div>
  );
};

export default UrlRegistration;