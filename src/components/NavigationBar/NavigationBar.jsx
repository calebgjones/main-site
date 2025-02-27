import '/src/fonts/fonts.css';
import './NavigationBar.css';
import {isProfane} from 'no-profanity';
import { useState, useEffect } from 'react';
import { Link,  Outlet } from 'react-router-dom';
import { notify } from '../Notifications.jsx';

function NavigationBar() {
  var [caleb, setCaleb] = useState("Caleb Jones");
  var calebArr = caleb.split(/(?!$)/u);
  var socialMedia = ["github.com/calebgjones", "linkedin.com/in/caleb-jones-a39150185/", "instagram.com/ok.lub"];
  var socialMediaIcons = socialMedia.map((url) => url.split(/https:\/www.|.com\//));
  const [titleDefinition, setTitleDefinition] = useState("");
  var [titleDefinitionOpacity, changeTitleDefinitionOpacity] = useState("1");
  var [showNavbar, changeShowNavBar] = useState(false);
  var [navBarClassName, changeNavBarClassName] = useState("fas fa-bars");

  var [navBarStyle, changeNavBarStyle] = useState({ display: 'flex', 
                                                    flexDirection: 'row', 
                                                    justifyContent: 'center', 
                                                    marginBottom: '-20px', 
                                                    zIndex: '-2'});

  var [titleFontSize, changeTitleFontSize] = useState("70pt");
  var [navLinksTop, changeNavLinksTop] = useState("107px");

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 400) {
      changeNavBarStyle({display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '5px', marginTop: '20px', zIndex: '-2'});
      changeTitleFontSize("40pt");
      changeTitleDefinitionOpacity("0");
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 20) {

          /* Desktop Device, not scrolled */
        if (window.innerWidth > 400) {
          changeNavBarStyle(navBarStyle);
          changeTitleFontSize("70pt");
          changeTitleDefinitionOpacity("1");
          changeNavLinksTop("107px");

          /* Mobile Device, not scrolled */
        } else if (window.innerWidth < 400) { 
          changeNavBarStyle({display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '5px', marginTop: '20px', zIndex: '-2'});
          changeTitleFontSize("40pt");
          changeTitleDefinitionOpacity("0");
        }
      } else if (window.pageYOffset > 20) {

          /* Desktop Device, scrolled */
        if (window.innerWidth > 400) {
        changeNavBarStyle({display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '-10px', zIndex: '-2'});
        changeTitleFontSize("30pt");
        changeTitleDefinitionOpacity("0");
        changeNavLinksTop("55px");

          /* Mobile Device, scrolled */
        } else if (window.innerWidth < 400) {
          changeNavBarStyle({display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '5px', marginTop: '20px', zIndex: '-2'});
          changeTitleFontSize("40pt");
          changeTitleDefinitionOpacity("0");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleWindowSizeChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div onLoad={handleWindowSizeChange} id="navContainer">
        <div id="socialMediaLinksContainer">
          {socialMediaIcons.map((char, index) => (
            <a
              key={index}
              id="socialMediaLinks"
              href={`https://www.${char[0]}.com/${char[1]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fab fa-${char[0]}`}></i>
            </a>
          ))}
        </div>
        <a>
          <div id="navBackground" style={navBarStyle}>
            {calebArr.map((char, index) => (
              <h1
                key={index}
                id={`titleContent-${index}`}
                style={{ fontFamily: "kognigear.regular", fontSize: titleFontSize }}
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
                    setTitleDefinition("");
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
                  } else if (titlePrompt.toLowerCase() === "goated" || titlePrompt.toLowerCase() === "goat") {
                    setCaleb("GOATED");
                    setTitleDefinition("For real.");
                  } 
                  else {
                    setCaleb(titlePrompt);
                    setTitleDefinition("");
                  }
                }}
              >
                {char}
              </h1>
            ))}
            <h2 id="titleDefinition" style={{opacity: titleDefinitionOpacity }}>{titleDefinition}</h2>
          </div>
        </a>
        <a id="showNavBar" onClick={() => {
            changeShowNavBar(!showNavbar);
            if (showNavbar === false) {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-bars");

              document.getElementById("navBar").style.display = "none";
            } else {
              document.getElementById("navBar").className = changeNavBarClassName("fas fa-times");
              document.getElementById("navBar").style.display = "flex";
          }}}>
            <i id="showNavBar" className={navBarClassName}></i>
          </a>
        <nav>
          <ul style={{ top: navLinksTop }} id="navBar">
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