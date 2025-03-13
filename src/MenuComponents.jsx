import { useState } from 'react';

export const MenuItem = ({ name, description, price }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">{price} kr</p>
    </div>
  );
};

export const MenuSection = ({ category }) => {
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