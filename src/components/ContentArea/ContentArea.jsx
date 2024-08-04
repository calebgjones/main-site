import './ContentArea.css';
import Content from './Content.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

function ContentArea() {

var [contentHeader, setContentHeader] = useState("loading header...");
var [contentBody, setContentBody] = useState("loading content...");


// var getData = async () => {
//     return await axios.get('http://localhost:8443/health');
// }

// useEffect(() => {
//     contentBody = getData;
//     setContentHeader("Welcome to my page!!!");    
// });

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