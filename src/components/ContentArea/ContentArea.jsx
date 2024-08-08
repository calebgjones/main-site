import './ContentArea.css';
import Content from './Content.js';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect } from 'react';

function ContentArea() {

  return (
    <div id="contentContainer">
      <Outlet />
      {Content.map((item, index) => (
        <div key={index}>
          <h1 id={item.section} className="contentHeader">{item.header}</h1>
          <p className="contentBody">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default ContentArea;