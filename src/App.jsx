// App.js
import './App.css';
import { useState, useEffect } from 'react';
import { MenuSection } from './MenuComponents.jsx';
import MobileNav from './MobileNav.jsx';
import config from './config.js';
import ThemeToggle from './ThemeToggle.jsx';
import Footer from './Footer.jsx';
import AboutUs from './AboutUs.jsx';
import Banner from './Banner.jsx';
import Today from './Today.jsx';
import FindUs from './FindUs.jsx';
import TimeTable from './TimeTable.jsx';
import Menu from './Menu.jsx';
// import PopupButton from './PopupButton.js';

function App() {
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  useEffect(() => {
    console.log('Starting to fetch menu data');
    console.log('Current environment config:', config);

    fetch(`${config.assetPath}/menu.json`)
      .then(response => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Menu data loaded successfully:', data);
        setMenuData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Detailed error when loading menu:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <ThemeToggle/>
      
      <Banner isVideoOn={isVideoOn} toggleVideo={toggleVideo} />

      <nav>
        <MobileNav />
      </nav>

      {isVideoOn && (
        <video autoPlay loop muted>
          <source src={`${config.assetPath}/pizza-video.mp4`} type="video/mp4" />
          Din webbläsare stödjer inte videoformat.
        </video>
      )}

      <Menu menuData={menuData} isLoading={isLoading} MenuSection={MenuSection}/>

      <TimeTable/>

      <Today/>

      <FindUs/>

      <AboutUs/>

      <Footer/>
    </div>
  );
}

export default App;