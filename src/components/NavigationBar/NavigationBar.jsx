import '/src/public/fonts/fonts.css';
import './NavigationBar.css';
import { useState, useEffect } from 'react';
import { Link,  Outlet } from 'react-router-dom';

function NavigationBar() {

  const [titleFont, setTitleFont] = useState("kbdunktank");


  function setRandomTitleFont() {
    const fonts = ["kbdunktank", "kbgoogleyeyes", "kbluckyclover", "kbplanetearth", "kbwhenpigsfly", "kbwitchinghour"];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setTitleFont(randomFont);
  }
 
  useEffect(() => {
    const interval = setInterval(setRandomTitleFont, 1000);
    return () => clearInterval(interval);
  }, []);
  var caleb = "Caleb!";
  let calebArr = caleb.split(/(?!$)/u);
  const socialMedia = ["github", "linkedin"];

  return (
    <>
      <div id="navContainer">
        <div id="socialMediaLinksContainer">
          {socialMedia.map((char) => (
          <a  id="socialMediaLinks" 
              href={`https://www.${char}.com/`}
              target="_blank" 
              rel="noopener noreferrer">
              <i 
                  className={`fab fa-${char}`}>
              </i>
          </a>
          ))}
        </div>
        <a>
          <div id="navBackground">
            {calebArr.map((char, index) => (
              <h1
                key={index}
                id={`titleContent-${index}`}
                style={{ fontFamily: titleFont }}
                content={char}
                onMouseEnter={() => {
                  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
                  const randomColor = colors[Math.floor(Math.random() * colors.length)];
                  document.getElementById(`titleContent-${index}`).style.color = randomColor;
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    document.getElementById(`titleContent-${index}`).style.color = "black";
                  }, 3000);
                }}
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