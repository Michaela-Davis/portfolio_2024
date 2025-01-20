import { useState, useEffect } from 'react';
import { Link } from 'react-router';

import { Envelope, Sun } from '../icons'; // I like these versions better
import './navbar.css';

function Navbar() {
  const [lightModeOn, setLightModeOn] = useState(false);

  const currentThemeSetting = (lightModeOn: boolean): string => {
    return lightModeOn ? "light" : "dark";
  };

  const toggleTheme = () => {
    const newTheme = currentThemeSetting(!lightModeOn);
    setLightModeOn(!lightModeOn);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const applyTheme = (theme: string) => {
      setLightModeOn(theme === "light");
      document.documentElement.setAttribute("data-theme", theme);
    };
  
    try {
      const lightModeFromLocalStorage = localStorage.getItem("theme");
      if (lightModeFromLocalStorage) {
        applyTheme(lightModeFromLocalStorage);
      }
    } catch (error) {
      console.error("Error accessing localStorage", error);
    }
  }, []);
  return (
      <nav className="navbar">
        <div className="container navbar__wrapper">
          <Link to="/"className="navbar__link" aria-label="Michaela Davis Portfolio home" id="home"><i className="fa fa-home" aria-hidden="false"></i></Link>
          <div className="navbar__items">
            <div className="navbar__item">
              <a href="mailto:michaela.delight+portfolio@gmail.com" className="navbar__link" aria-label="Email Michaela Davis" target="_blank"><Envelope /></a>
            </div>
            <div className="navbar__item">
    
              <label className="switch">
                <input id="input" type="checkbox" checked={lightModeOn} onChange={toggleTheme} />
                <div className="slider round">
                  <div className="sun-moon">
                    {!lightModeOn && (
                      <Sun />
                    )}
                    {lightModeOn && (
                      <i id="moon" className="fa fa-moon-o" aria-hidden="false"></i>
                    )}
                    <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
    
                    <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                    <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="50"></circle>
                    </svg>
                  </div>
                  <div className="stars">
                    <svg id="star-1" className="star" viewBox="0 0 20 20">
                      <path
                        d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                      ></path>
                    </svg>
                    <svg id="star-2" className="star" viewBox="0 0 20 20">
                      <path
                        d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                      ></path>
                    </svg>
                    <svg id="star-3" className="star" viewBox="0 0 20 20">
                      <path
                        d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                      ></path>
                    </svg>
                    <svg id="star-4" className="star" viewBox="0 0 20 20">
                      <path
                        d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </label>
    
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;