import React, { useState } from 'react';

const MapCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (mapName) => {
    setActiveCard(mapName);
  };

  return (
    <div>
      <div className="card" onClick={() => handleCardClick('Singapore')}>
        <h2>Card 1 - Singapore</h2>
      </div>
      <div className="card" onClick={() => handleCardClick('Canada')}>
        <h2>Card 2 - Canada</h2>
      </div>
      <div className="card" onClick={() => handleCardClick('Russia')}>
        <h2>Card 3 - Russia</h2>
      </div>

      <div className="map-container">
        {activeCard === 'Singapore' && (
          <iframe
            title="Singapore Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9122918337385!2d103.84788251432562!3d1.3134789990309826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17a4bc54a5a9%3A0xb8db7ad24e8d5d9d!2sSingapore!5e0!3m2!1sen!2sca!4v1645869476704!5m2!1sen!2sca"
            width="800"
            height="650"
            style={{ border: 12 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
        {activeCard === 'Canada' && (
          <iframe
            title="Canada Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450277.970914203!2d-106.85909095741149!3d58.91597639785535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d759f606e57e3%3A0x953ec8e9777b5dc!2sCanada!5e0!3m2!1sen!2sca!4v1645869501830!5m2!1sen!2sca"
            width="800"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
        {activeCard === 'Russia' && (
          <iframe
            title="Russia Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13512528.880675124!2d26.674091222265228!3d61.96883064810079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a2601a478bf%3A0x44c7082ee3ec3d7b!2sRussia!5e0!3m2!1sen!2sca!4v1645869535362!5m2!1sen!2sca"
            width="800"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MapCards;
