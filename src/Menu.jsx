import React from "react";

function Menu({isLoading, menuData, MenuSection}) {
	return (
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
	)
};

export default Menu;