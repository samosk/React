import React from "react";
import config from './config.js';


function FindUs() {
	return (
		<section id="dagens">
        <h2 className="meny">Dagens</h2>
        <h3>Finns via UmeåLunchGuiden</h3>
        <img src={`${config.assetPath}/pizza-photo.jpg`} alt="Närbild av pizza" />
      </section>
	)
};

export default FindUs;