import '../../assets/fonts/fonts.css';
import './NavigationBar.css';
import { useState, useEffect } from 'react';
import { Link,  Outlet } from 'react-router-dom';

function NavigationBar() {

  const [titleFont, setTitleFont] = useState("kbdunktank");


  function setRandomTitleFont() {
    const fonts = ["kbdunktank", "kbgoogleyeyes", "kbluckyclover", "kbplanetearth", "kbwhenpigsfly", "kbwitchinghour"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setTitleFont(randomFont);
    document.getElementById("titleContent").style.fontFamily = randomFont;
  }
 
  useEffect(() => {
    const interval = setInterval(setRandomTitleFont, 1000);
    return () => clearInterval(interval);
  }, []);
  const caleb = ["C", "a", "l", "e", "b", "!"];

  return (
    <>
    <div id="navContainer">
      <a>
        <div id="navBackground">
          {caleb.map((char, index) => (
              <h1
                key={index}
                id={`titleContent`}
                style={{ fontFamily: titleFont }}
                content={char}
              >
                {char}
              </h1>
          ))}
        </div>
      </a>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/gallery"><li>Gallery</li></Link>
          <Link to="/portfolio"><li>Portfolio</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
    <Outlet/>
    </>
  );
}

export default NavigationBar;