import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';  // Make sure this path is correct

const serviceData = [
  {
    title: 'Portrait Services',
    description:
      'Our Portrait Services focus on capturing your unique personality with creative lighting and expressive poses. Ideal for professionals, artists, models, or personal branding. We offer studio and outdoor sessions tailored to your style and purpose.',
    features: [
      'High-resolution edited images',
      'Studio & natural light setups',
      'Personalized styling guidance',
    ],
    image: 'https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=sTEf1ti0DkgQ7kNvwFmnb3f&_nc_oc=AdnrhEkJC3mTYsz4CToseQdtKEFCSoWHE-sa-pG3n6C8-NGaSuehRjkkGtLtRGqpHZM&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=yX_GMyY-R7P5ETCU-06kxg&oh=01_Q5Aa1gHke22RLyV0ITj09M20vWmOvt05NzG_5y35pudlGWIBeg&oe=6836174A',
    samples: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Event Coverage',
    description:
      'Our team specializes in candid and posed event photography for birthdays, anniversaries, corporate functions, and community events. We ensure your story is told in every frame.',
    features: [
      'Unlimited photos during the event',
      'Highlight reel creation',
      'Professional editing & delivery',
    ],
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80',
    samples: [
      'https://images.pexels.com/photos/31091591/pexels-photo-31091591.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Wedding Photography',
    description:
      'Capture the magic of your big day with full-scale wedding coverage. From engagement shoots to the last dance, we document every cherished moment with artistic finesse.',
    features: [
      'Pre-wedding & post-wedding sessions',
      'Cinematic & candid coverage',
      'Customizable wedding albums',
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    samples: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Commercial & Branding',
    description:
      'Perfect for entrepreneurs, startups, and companies looking to enhance their visual identity. We provide high-quality visuals for websites, ads, catalogs, and branding.',
    features: [
      'Product & lifestyle shoots',
      'Professional lighting & setups',
      'Usage rights for digital & print media',
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    samples: [
      'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Maternity & Newborn',
    description:
      'Celebrate the beauty of motherhood and the joy of new beginnings with intimate and gentle photography sessions. We create timeless memories of your special milestones.',
    features: [
      'Flexible indoor/outdoor sessions',
      'Safe newborn handling practices',
      'Props and wardrobe assistance',
    ],
    image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80',
    samples: [
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    title: 'Real Estate Photography',
    description:
      'Showcase your properties in the best light with our real estate photography. From interiors and exteriors to drone shots and 360° views, we help your listings stand out.',
    features: [
      'Wide-angle interior shots',
      'Aerial & 360° virtual tours',
      'Fast turnaround for MLS uploads',
    ],
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    samples: [
      'https://images.unsplash.com/photo-1501183638714-44b71b0c7e0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    ],
  },
];

const Services = () => {
  const [show, setShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <Container>
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="services-grid">
          {serviceData.map((service, idx) => (
            <div
              className="service-card"
              key={idx}
            >
              <img src={service.image} alt={service.title} />
              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">
                  {service.description.length > 120
                    ? service.description.substring(0, 120) + '...'
                    : service.description}
                </p>
                <button
                  className="btn-view-details"
                  onClick={() => handleShow(service)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <Modal
            show={show}
            onHide={handleClose}
            centered
            size="lg"
            className="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedService.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedService.description}</p>

              <h5 className="mt-4">Key Features:</h5>
              <ul>
                {selectedService.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <h5 className="mt-4">Sample Photos:</h5>
              <Row>
                {selectedService.samples.map((img, i) => (
                  <Col md={6} key={i} className="mb-3">
                    <Image
                      src={img}
                      alt={`Sample ${i + 1}`}
                      fluid
                      className="sample-photo"
                    />
                  </Col>
                ))}
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="success"
                href={`https://wa.me/your-number?text=I want to book: ${encodeURIComponent(
                  selectedService.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Service
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Services;
