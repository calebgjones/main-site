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
    <head>
    /* HTML Meta Tags */
<title>Caleb Jones</title>
<meta name="description" content="This site features projects which I am working on, as well as my progress with UX and web design."/>

/* Google / Search Engine Tags */
<meta itemprop="name" content="Caleb Jones"/>
<meta itemprop="description" content="This site features projects which I am working on, as well as my progress with UX and web design."/>
<meta itemprop="image" content=""/>

/* Facebook Meta Tags */
<meta property="og:url" content="https://www.calebdagoat.com"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Caleb Jones"/>
<meta property="og:description" content="This site features projects which I am working on, as well as my progress with UX and web design."/>
<meta property="og:image" content=""/>

/* Twitter Meta Tags */
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Caleb Jones"/>
<meta name="twitter:description" content="This site features projects which I am working on, as well as my progress with UX and web design."/>
<meta name="twitter:image" content=""/>
    </head>
      <Notification />
    </>
  )
}

export default App;
