import { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import ContentArea from './components/ContentArea/ContentArea.jsx';
import Notification, { notify } from './components/Notifications.jsx';
import axios from 'axios';


function App() {
  const createNotification = (message, type) => {
    notify(message, type);
  }

  const [galleryVisible, setGalleryVisible] = useState(false);


  return (
    <>
      <Notification />
    </>
  )
}

export default App;
