import { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import ContentArea from './components/ContentArea/ContentArea.jsx';
import Notification, { notify } from './components/Notifications.jsx';
import axios from 'axios';


function App() {
  const createNotification = (message, type) => {
    notify(message, type);
  }

  return (
    <>
    <header>
      <meta name="title" content="Caleb Jones"/>
      <meta name="description" content="My portfolio! Showcasing my latest projects, as well as my journey with UX development and web design."/>
      <meta name="keywords" content="design, development, UX, HTML, CSS, Java, javascript, Caleb Jones, Caleb, Jones, Grandin"/>
      <meta name="robots" content="index, follow"/>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="English"/>
    </header>
      <Notification />
    </>
  )
}

export default App;
