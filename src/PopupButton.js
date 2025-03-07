import React, { useState } from 'react';

const PopupButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowPopup(!showPopup)} // Toggle the popup state
      >
        {showPopup ? 'Hide Message' : 'Show Message'}
      </button>

      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
          >
            <p>
              Hello, JavaScript!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupButton;