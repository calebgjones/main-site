import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //this is not a real error for some reason.
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentArea from './components/ContentArea/ContentArea.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<ContentArea />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

export default App;
