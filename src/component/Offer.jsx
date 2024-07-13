import React, { useState } from 'react';

function Offer() {
  const [showOffer, setShowOffer] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const handleShowOffer = () => {
    setShowOffer(true);
    setOfferAccepted(false);
  };

  const handleAcceptOffer = () => {
    setOfferAccepted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!showOffer && !offerAccepted && (
        <button
          onClick={handleShowOffer}
          className="px-6 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Show Offer
        </button>
      )}
      {showOffer && !offerAccepted && (
        <div className="flex flex-col items-center">
          
          <p className="mb-4 text-lg font-bold">Here is your offer!</p>
          <button
            onClick={handleAcceptOffer}
            className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700"
          >
            Accept Offer
          </button>
        </div>
      )}
      {offerAccepted && (
        <p className="text-lg font-bold text-green-600">Offer Accepted!</p>
      )}
    </div>
  );
}

export default Offer;
