import React, { useState } from 'react';
import './Portfolio.css'; 

const portfolioData = {
  portrait: [
    { src: 'https://unsplash.com/photos/a-close-up-of-a-cat-looking-off-into-the-distance-5L5G2KMOKqM', alt: 'Portrait 1' },
    { src: 'https://source.unsplash.com/600x600/?portrait,fashion', alt: 'Portrait 2' },
    { src: 'https://source.unsplash.com/600x600/?portrait,studio', alt: 'Portrait 3' },
    { src: 'https://source.unsplash.com/600x600/?portrait,woman', alt: 'Portrait 4' },
    { src: 'https://source.unsplash.com/600x600/?portrait,man', alt: 'Portrait 5' },
    { src: 'https://source.unsplash.com/600x600/?portrait,photography', alt: 'Portrait 6' },
    { src: 'https://source.unsplash.com/600x600/?portrait,natural', alt: 'Portrait 7' },
    { src: 'https://source.unsplash.com/600x600/?portrait,closeup', alt: 'Portrait 8' },
    { src: 'https://source.unsplash.com/600x600/?portrait,outdoor', alt: 'Portrait 9' }
  ],
  wedding: [
    { src: 'https://source.unsplash.com/600x600/?wedding,couple', alt: 'Wedding 1' },
    { src: 'https://source.unsplash.com/600x600/?wedding,bride', alt: 'Wedding 2' },
    { src: 'https://source.unsplash.com/600x600/?wedding,venue', alt: 'Wedding 3' },
    { src: 'https://source.unsplash.com/600x600/?wedding,ceremony', alt: 'Wedding 4' },
    { src: 'https://source.unsplash.com/600x600/?wedding,decor', alt: 'Wedding 5' },
    { src: 'https://source.unsplash.com/600x600/?wedding,groom', alt: 'Wedding 6' },
    { src: 'https://source.unsplash.com/600x600/?wedding,photoshoot', alt: 'Wedding 7' },
    { src: 'https://source.unsplash.com/600x600/?wedding,love', alt: 'Wedding 8' },
    { src: 'https://source.unsplash.com/600x600/?wedding,dance', alt: 'Wedding 9' }
  ],
  event: [
    { src: 'https://source.unsplash.com/600x600/?event,party', alt: 'Event 1' },
    { src: 'https://source.unsplash.com/600x600/?event,conference', alt: 'Event 2' },
    { src: 'https://source.unsplash.com/600x600/?event,festival', alt: 'Event 3' },
    { src: 'https://source.unsplash.com/600x600/?event,music', alt: 'Event 4' },
    { src: 'https://source.unsplash.com/600x600/?event,people', alt: 'Event 5' },
    { src: 'https://source.unsplash.com/600x600/?event,speech', alt: 'Event 6' },
    { src: 'https://source.unsplash.com/600x600/?event,photography', alt: 'Event 7' },
    { src: 'https://source.unsplash.com/600x600/?event,exhibition', alt: 'Event 8' },
    { src: 'https://source.unsplash.com/600x600/?event,gathering', alt: 'Event 9' }
  ],
  commercial: [
    { src: 'https://source.unsplash.com/600x600/?commercial,product', alt: 'Commercial 1' },
    { src: 'https://source.unsplash.com/600x600/?commercial,fashion', alt: 'Commercial 2' },
    { src: 'https://source.unsplash.com/600x600/?commercial,ads', alt: 'Commercial 3' },
    { src: 'https://source.unsplash.com/600x600/?commercial,studio', alt: 'Commercial 4' },
    { src: 'https://source.unsplash.com/600x600/?commercial,branding', alt: 'Commercial 5' },
    { src: 'https://source.unsplash.com/600x600/?commercial,shoot', alt: 'Commercial 6' },
    { src: 'https://source.unsplash.com/600x600/?commercial,marketing', alt: 'Commercial 7' },
    { src: 'https://source.unsplash.com/600x600/?commercial,photography', alt: 'Commercial 8' },
    { src: 'https://source.unsplash.com/600x600/?commercial,business', alt: 'Commercial 9' }
  ]
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('portrait');

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Our Portfolio</h2>

      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {Object.keys(portfolioData).map((category) => (
          <button
            key={category}
            className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row">
        {portfolioData[activeCategory].map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className="img-fluid rounded shadow"
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
