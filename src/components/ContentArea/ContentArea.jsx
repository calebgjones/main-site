import './ContentArea.css';
import Content from './Content.js';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';

function ContentArea() {

  return (
    <div id="contentContainer">
      <Outlet />
      {Content.map((item, index) => (
        <div key={index}>
          <h1 id={item.section} className="contentHeader">{item.header}</h1>
          <p className="contentBody">{item.body.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}</p>
        </div>
      ))}
    </div>
  )
}

export default ContentArea;