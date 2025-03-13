import React from "react";
import config from './config.js';


function FindUs() {
	return (
	<section id="hitta-hit">
        <h2 className="meny">Hitta hit</h2>
        <img src={`${config.assetPath}/google-maps.png`} alt="Karta, Skolgatan 65F Umeå" />
      </section>
	)
};

export default FindUs;