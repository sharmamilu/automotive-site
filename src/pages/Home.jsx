import React, { useEffect, useState } from "react";
import "../styles/home.css";

const slides = [
  {
    image: "/images/defender.png",
    title: "Precision Engineering",
    description:
      "Experience top-tier performance with parts engineered for excellence.",
    gradient: "linear-gradient(135deg, #9db3d8ff, #9eafdfff)",
  },
  {
    image: "/images/hyundai.png",
    title: "Durability Guaranteed",
    description:
      "Our parts are built to last and rigorously tested for quality assurance.",
    gradient: "linear-gradient(135deg, #6d88b3ff, #1d4ed8)",
  },
  {
    image: "/images/audi.png",
    title: "Nationwide Shipping",
    description: "Fast and secure delivery to every corner of the country.",
    gradient: "linear-gradient(135deg, #8fa6caff, #434d69ff)",
  },
  {
    image: "/images/mercedes-benz1.png",
    title: "Trusted by Mechanics",
    description:
      "We're the go-to choice for garages and service centers nationwide.",
    gradient: "linear-gradient(135deg, #5e64bdff, #735fe9ff)",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Mercedes C C205 AMG Air springs airsuspension AIRMATIC, rear",
    category: "Engine Components",
    image: "/images/air-spring.png",
    badge: "Best Seller",
    description: "Powerful turbo engine for enhanced performance.",
  },
  {
    id: 2,
    name: "Performance Brakes",
    category: "Braking System",
    image: "/images/air-spring.png",
    description: "High-performance brakes for enhanced stopping power.",
  },
  {
    id: 3,
    name: "Sport Suspension Kit",
    category: "Suspension",
    image: "/images/air-spring.png",
    badge: "New",
    description: "Enhanced suspension for sporty driving.",
  },
  {
    id: 4,
    name: "High-Flow Air Filter",
    category: "Intake System",
    image: "/images/air-spring.png",
    description: "Enhanced air flow for improved performance.",
  },
];

const partners = [
  {
    id: 1,
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    description: "Precision engineering and performance",
    details:
      "We provide OEM-quality parts and advanced service solutions for all BMW models, ensuring optimal performance and longevity.",
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    description: "Luxury meets innovation",
    details:
      "From engine components to electronic systems, we offer high-grade replacements and upgrades tailored for Mercedes-Benz vehicles.",
  },
  {
    id: 3,
    name: "Bentley",
    logo: "https://fabrikbrands.com/wp-content/uploads/Bentley-Logo-1-1155x770.png",
    description: "Refined performance and craftsmanship",
    details:
      "Our specialized solutions support the elegance and power of Bentley vehicles, using parts that meet luxury performance standards.",
  },
  {
    id: 4,
    name: "Land Rover",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/LandRover.svg",
    description: "Capable and rugged luxury SUVs",
    details:
      "We supply robust parts and solutions for Land Rover models, designed to support both urban and off-road performance.",
  },
  {
    id: 5,
    name: "Rolls-Royce",
    logo: "https://images.unsplash.com/photo-1557053965-459050b06844?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Iconic luxury and prestige",
    details:
      "Our parts and services uphold the precision and elegance expected from Rolls-Royce vehicles, ensuring seamless performance.",
  },
];

const founder = {
  name: "Alex Morgan",
  title: "Founder & CEO",
  image: "/images/founder.jpg",
  bio: "With over 15 years in the automotive industry, Alex founded AutoPartsPro to revolutionize how car enthusiasts access premium components.",
  story:
    "After working as a lead engineer for major automotive manufacturers, Alex identified a gap in the market for high-quality, affordable parts with expert guidance. What started as a small garage operation in 2010 has grown into the nation's premier auto parts distributor. Alex's hands-on approach ensures every product meets rigorous performance standards.",
  philosophy:
    "We don't just sell parts - we sell the confidence that comes with quality engineering.",
  social: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedPartners, setExpandedPartners] = useState([]);
  const [showFullBio, setShowFullBio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleViewAllProducts = () => {
    window.location.href = "/products";
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setAnimate(false);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setAnimate(true);
          setIsTransitioning(false);
        }, 800); // Matches the animation duration
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const { image, title, description, gradient } = slides[currentSlide];

  return (
    <div className="home">
      {/* Hero Carousel Section */}
      {/* Hero Carousel Section */}
      <section className="hero">
        {/* Video Background */}
        <div className="video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            poster="/images/video-poster.jpg"
          >
            {/* <source src="/videos/intro.mp4" type="video/mp4" /> */}
            <source src="/videos/intro-video.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <div
            className={`hero-text ${animate ? "animate-in" : "animate-out"}`}
          >
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="hero-btn">
              <span>Learn More</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className={`hero-image ${animate ? "animate-in" : "animate-out"}`}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              onLoad={() => setAnimate(true)}
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => {
                if (index !== currentSlide) {
                  setAnimate(false);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setAnimate(true);
                  }, 300);
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Section 2 - Static Info */}
      <section className="info-section">
        <div className="info-container">
          <div className="info-text">
            <h2>About Our Company</h2>
            <p>
              With years of expertise in the automotive industry, we ensure that
              our clients receive the best parts tailored to their needs. From
              engines to accessories, we deliver excellence at every step.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Parts Available</span>
              </div>
            </div>
          </div>
          <div className="info-image-box">
            <img src="/images/fourth.jpg" alt="Mercedes Benz" loading="lazy" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>
      <section className="product-showcase">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Premium parts for peak performance</p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-description">{product.description}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-btn" onClick={handleViewAllProducts}>
          View All Products
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>
      <section className="partners-section">
        <div className="section-header">
          <h2>Solutions for Leading Automotive Brands</h2>
          <p>
            Providing high-quality parts and services tailored for the world’s
            top car manufacturers
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => {
            const isExpanded = expandedPartners.includes(partner.id);

            return (
              <div
                key={partner.id}
                className={`partner-card ${isExpanded ? "expanded" : ""}`}
                onClick={() => {
                  if (isExpanded) {
                    setExpandedPartners(
                      expandedPartners.filter((id) => id !== partner.id)
                    );
                  } else {
                    setExpandedPartners([...expandedPartners, partner.id]);
                  }
                }}
              >
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} loading="lazy" />
                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>

                  {isExpanded && (
                    <div className="partner-details">
                      <p>{partner.details}</p>
                    </div>
                  )}
                </div>

                <div className="expand-icon">
                  {isExpanded ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 15L12 8L19 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 10L12 17L19 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="video-banner">
        <div className="video-container">
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="../videos/factory.mp4"
              title="AutoPartsPro Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="video-placeholder">
              <img
                src="/images/video-thumbnail.jpg"
                alt="AutoPartsPro Video Thumbnail"
                className="thumbnail"
              />
              <button
                className="play-button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play video"
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.5)" />
                  <path d="M10 8L16 12L10 16V8Z" fill="white" />
                </svg>
              </button>
              <div className="video-overlay"></div>
            </div>
          )}
        </div>

        <div className="video-content">
          <h2>Experience the AutoPartsPro Difference</h2>
          <p>
            See how we're revolutionizing the auto parts industry with quality,
            innovation, and customer-first service.
          </p>
          {!isPlaying && (
            <button className="cta-button" onClick={() => setIsPlaying(true)}>
              Watch Our Story
            </button>
          )}
        </div>
      </section>
      {/* <section className="founder-section">
        <div className="section-header">
          <h2>Meet the Founder</h2>
          <p>The vision behind AutoPartsPro</p>
        </div>

        <div className="founder-container">
          <div className="founder-image">
            <img src={founder.image} alt={founder.name} loading="lazy" />
            <div className="founder-social">
              <a href={founder.social.linkedin} aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href={founder.social.twitter} aria-label="Twitter">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href={founder.social.instagram} aria-label="Instagram">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="founder-content">
            <div className="founder-header">
              <h3>{founder.name}</h3>
              <p className="founder-title">{founder.title}</p>
            </div>

            <div className={`founder-bio ${showFullBio ? "expanded" : ""}`}>
              <p>{founder.bio}</p>

              {showFullBio && (
                <>
                  <p>{founder.story}</p>
                  <blockquote className="founder-quote">
                    "{founder.philosophy}"
                  </blockquote>
                </>
              )}
            </div>

            <button
              className="read-more-btn"
              onClick={() => setShowFullBio(!showFullBio)}
            >
              {showFullBio ? "Read Less" : "Read Full Story"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d={showFullBio ? "M5 15l7-7 7 7" : "M5 10l7 7 7-7"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
