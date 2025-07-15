// src/UrlRegistration.jsx

import React from 'react';
import Sidebar from './Sidebar';
import './UrlRegistration.css';

const UrlRegistration = () => {
  return (
    <div className="page-container">
      {/* 'currentPage' prop을 추가합니다. */}
      <Sidebar currentPage="UrlRegistration" />

      {/* main 태그 안의 내용은 그대로 유지합니다. */}
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