import '/src/fonts/fonts.css';
import './NavigationBar.css';
import {isProfane} from 'no-profanity';
import { useState, useEffect } from 'react';
import { Link,  Outlet } from 'react-router-dom';
import { notify } from '../Notifications.jsx';

function NavigationBar() {
  var [caleb, setCaleb] = useState("Caleb Jones");
  var calebArr = caleb.split(/(?!$)/u);
  const socialMedia = ["github", "linkedin"];
  const [titleDefinition, setTitleDefinition] = useState("Full-Stack Developer.");
  var [showNavbar, changeShowNavBar] = useState(false);
  var [navBarClassName, changeNavBarClassName] = useState("fas fa-bars");


  return (
    <>
      <div id="navContainer">
        <div id="socialMediaLinksContainer">
          {socialMedia.map((char) => (
            <a
              id="socialMediaLinks"
              href={`https://www.${char}.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${char}`}></i>
            </a>
          ))}
        </div>
        <a>
          <div id="navBackground">
            {calebArr.map((char, index) => (
              <h1
                key={index}
                id={`titleContent-${index}`}
                style={{ fontFamily: "kognigear.regular" }}
                content={char}
                onMouseEnter={() => {
                  document.getElementById(`titleContent-${index}`).style.color = "white";
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    document.getElementById(`titleContent-${index}`).style.color = "black";
                  }, 3000);
                }}
                onClick={() => {
                  let titlePrompt = prompt(caleb);
                  if (titlePrompt === null) {
                    setCaleb("Caleb Jones");
                  } else if (titlePrompt.replace(/ /g, "") === "") {
                    setCaleb("Caleb Jones");
                  } else if (isProfane(titlePrompt) === true) {
                    notify("Profanity detected! Commencing nice-word sequence...", "error");
                    setTimeout(() => {
                      notify("3...", "warn");
                    }, 1000);
                    setTimeout(() => {
                      notify("2...", "warn");
                    }, 2000);
                    setTimeout(() => {
                      notify("1...", "warn");
                    }, 3000);
                    setTimeout(() => {
                      setCaleb("I love nice words!");
                      notify("Nice words activated!", "success");
                    }, 4000);
                  } else {
                    setCaleb(titlePrompt);
                  }
                }}
              >
                {char}
              </h1>
            ))}
            <h2 id="titleDefinition">{titleDefinition}</h2>
          </div>
        </a>
        <nav>
          <a id="showNavBar" onClick={() => {
            changeShowNavBar(!showNavbar);
            console.log("Navbar is " + showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}>
            <i className={navBarClassName}></i>
          </a>
          <ul id="navBar">
            <Link to="/" onClick={() => {
            changeShowNavBar(!showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}><li>Home</li></Link>
            <Link to="/gallery" onClick={() => {
            changeShowNavBar(!showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}><li>Gallery</li></Link>
            <Link to="/portfolio" onClick={() => {
            changeShowNavBar(!showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}><li>Portfolio</li></Link>
            <Link to="/about" onClick={() => {
            changeShowNavBar(!showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}><li>About</li></Link>
            <Link to="/contact" onClick={() => {
            changeShowNavBar(!showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}><li>Contact</li></Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationBar;