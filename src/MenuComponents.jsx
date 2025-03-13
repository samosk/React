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
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <h2>{category.name}</h2>
      {category.items.map((item, index) => (
        <div key={index} style={{ display: isExpanded ? 'block' : 'none' }}>
          <MenuItem {...item} />
        </div>
      ))}
      <div className="showmore">
        <button 
          className="more" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Visa mindre ▲' : 'Visa mer ▼'}
        </button>
      </div>
    </>
  );
};