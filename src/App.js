// App.js
import './App.css';
import { useState, useEffect } from 'react';
import { MenuItem } from './MenuComponents.js';
import MobileNav from './MobileNav';
import config from './config';
import ThemeToggle from './ThemeToggle.js';
import VideoToggle from './VideoToggle';
// import PopupButton from './PopupButton.js';

const MenuSection = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Add safety check
  if (!category) return null;
  // Only show the first three items in each category before the button is pressed
  const itemsToShow = isExpanded ? category.items : category.items.slice(0, 3);
  const hasMoreItems = category.items.length > 3;

  const handleExpandClick = (e) => {
    // Only trigger if the click was directly on the button
    if (e.target.className === 'more') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="menu-section">
      <h2>{category.name}</h2>
      <div className="menu-items">
        {itemsToShow.map((item, index) => (
          <div key={index}>
            <MenuItem {...item} />
          </div>
        ))}
        {hasMoreItems && (
          <div className="showmore">
            <button
              className="more"
              onClick={handleExpandClick}
            >
              {isExpanded ? 'Visa mindre ▲' : 'Visa mer ▼'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

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
      
      <div className="banner-top">
        <a href={config.basePath}>
          <h1 className="titel">Ronyas</h1>
          <h1 className="titel">Restaurang</h1>
        </a>
        <VideoToggle isVideoOn={isVideoOn} toggleVideo={toggleVideo} />
      </div>

      <nav>
        <MobileNav />
      </nav>

      {isVideoOn && (
        <video autoPlay loop muted>
          <source src={`${config.assetPath}/pizza-video.mp4`} type="video/mp4" />
          Din webbläsare stödjer inte videoformat.
        </video>
      )}

      <section id="meny">
        <h2 className="meny">Meny</h2>
        {isLoading ? (
          <p>Laddar meny...</p>
        ) : menuData && menuData.categories ? (
          menuData.categories.map((category, index) => (
            <MenuSection key={index} category={category} />
          ))
        ) : (
          <div>
            <p>Kunde inte ladda menyn</p>
            <p>Kontrollera att menu.json finns i public-mappen</p>
          </div>
        )}
      </section>

      <section id="öppettider">
        <h2 className="meny">Öppettider</h2>
        <h2 className="days">Måndag: 10:00 - 21:00</h2>
        <h2 className="days">Tisdag: 10:00 - 21:00</h2>
        <h2 className="days">Onsdag: 10:00 - 21:00</h2>
        <h2 className="days">Torsdag: 10:00 - 21:00</h2>
        <h2 className="days">Fredag: 10:00 - 22:00</h2>
        <h2 className="days">Lördag: 11:00 - 22:00</h2>
        <h2 className="days">Söndag: 11:00 - 21:00</h2>

        <h2>Ring och Beställ</h2>
        <h2>090 - 12 99 12</h2>
      </section>

      <section id="dagens">
        <h2 className="meny">Dagens</h2>
        <h3>Finns via UmeåLunchGuiden</h3>
        <img src={`${config.assetPath}/pizza-photo.jpg`} alt="Närbild av pizza" />
      </section>

      <section id="hitta-hit">
        <h2 className="meny">Hitta hit</h2>
        <img src={`${config.assetPath}/google-maps.png`} alt="Karta, Skolgatan 65F Umeå" />
      </section>

      <section id="om-oss">
        <h2 className="meny">Om oss</h2>
        <div className="blue">
          <p>
            Ronyas Restaurang på Vasaplan erbjuder bästa service och mat av hög kvalite. Kom och njut av våra rätter
            tillsammans med ett glas öl, vin eller cider.
          </p>
          <p>
            Varm buffe även tilgänglig på helger.
          </p>
          <p>
            När du besöker Ronyas Restaurang bemöts du av vänlig personal i våra fräscha lokaler. Vår mälsättning är
            att alla våra rätter ska lämpa sig både för att avnjutas direkt i våra lokaler eller tas med. Dessutom
            strävar vi efter att våra rätter ska passa alla åldrar vid alla tillfällen.
          </p>
          <p>
            Har ni speciella önskemål vid beställning gör vi allt för att hjälpa er.
          </p>
          <p>
            Välkomna!
          </p>
        </div>
      </section>

      <div className="banner-bot">
        <div className="footer-section">
          <h2 className="footer">
            Ronyas Restaurang
          </h2>
          <h3 className="footer">
            Skolgatan 65F
          </h3>
          <h3 className="footer">
            Vasaplan Umeå
          </h3>
        </div>
        <div className="footer-section">
          <h2 className="footer">
            Kontakta oss
          </h2>
          <h3 className="footer">
            Telefon: 090 - 12 99 12
          </h3>
        </div>
        <div className="footer-section">
          <h4 className="footer">
            ©2025 Ronyas Restaurang
          </h4>
        </div>
        <div className="footer-section">
          <a href="https://github.com/samosk/React" target="_blank" rel='noreferrer'>
            <img src={`${config.assetPath}/github-mark-white.png`} alt="GitHub Logga" className="github-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;