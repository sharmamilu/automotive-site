import React, { useState, useEffect } from "react";
import { FiSearch, FiFilter, FiEye, FiX } from "react-icons/fi";
import "../styles/product.css";
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isModalOpen) {
      setCurrentImageIndex(0);
    }
  }, [isModalOpen]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Mercedes Viano (W639) 2003–2014 Rear Air Spring",
      category: "Air Suspension",
      description:
        "High-quality rear air spring suitable for Mercedes-Benz Viano (W639) models from 2003 to 2014. Designed to restore original ride comfort and vehicle height.",
      features: [
        "OEM-compatible fit",
        "Durable rubber and plastic construction",
        "Restores suspension performance",
        "Easy installation",
      ],
      specifications: {
        Position: "Rear",
        "Vehicle Model": "Mercedes Viano (W639)",
        "Year Range": "2003–2014",
        Material: "Rubber & Plastic",
        Warranty: "12 months",
        "Replaces OEM": "A6393280101, 6393280101, A6393280201, 6393280201",
      },
      images: [
        "/images/mercedes/air-suspension-rear.jpg",
        "/images/mercedes/air-suspension.webp",
      ],
    },

    {
      id: 2,
      name: "Performance Brake System",
      category: "Brakes",
      images: ["/images/air-spring.png", "/images/air-spring.png"],

      description:
        "Premium brake system offering superior stopping power and exceptional durability. Designed for both daily driving and performance applications.",
      specifications: {
        Material: "Carbon Ceramic Composite",
        Weight: "15kg",
        Compatibility: "All modern vehicle models",
        Warranty: "3 years limited warranty",
        "Stopping Distance": "30% improvement",
      },
      features: [
        "Fade-resistant performance",
        "Low dust formulation",
        "Corrosion protection",
        "Quiet operation",
      ],
    },
    {
      id: 3,
      name: "Sport Suspension Kit",
      category: "Suspension",
      images: ["/images/air-spring.png", "/images/air-spring.png"],

      description:
        "Advanced suspension system that provides improved handling characteristics while maintaining ride comfort. Perfect for enthusiasts seeking better road manners.",
      specifications: {
        Material: "Billet Steel & Polyurethane",
        Weight: "35kg",
        Compatibility: "Sedans and SUVs 2010+",
        Warranty: "Lifetime guarantee",
        "Drop Height": "Adjustable 1-3 inches",
      },
      features: [
        "Height adjustable",
        "32-way damping adjustment",
        "Lifetime warranty",
        "Track proven performance",
      ],
    },
    {
      id: 4,
      name: "High-Flow Air Intake",
      category: "Intake",
      images: ["/images/air-spring.png", "/images/air-spring.png"],
      description:
        "Cold air intake system that increases airflow for better engine performance and improved fuel efficiency. Features advanced filtration technology.",
      specifications: {
        Material: "304 Stainless Steel",
        Weight: "2.5kg",
        Compatibility: "Universal fit with adapters",
        Warranty: "1 year unlimited mileage",
        "Airflow Increase": "Up to 50% more airflow",
      },
      features: [
        "Washable/reusable filter",
        "Heat shield included",
        "Easy 30-minute installation",
        "Noticeable sound improvement",
      ],
    },
    {
      id: 5,
      name: "Racing Exhaust System",
      category: "Exhaust",
      images: ["/images/air-spring.png", "/images/air-spring.png"],

      description:
        "Complete performance exhaust system that enhances engine sound while providing measurable horsepower gains. T304 stainless steel construction.",
      specifications: {
        Material: "T304 Stainless Steel",
        Weight: "20kg",
        Compatibility: "Sport models 2015+",
        Warranty: "5 years against defects",
        "Power Gain": "15-25 horsepower",
      },
      features: [
        "Deep aggressive tone",
        "Mandrel bent piping",
        "Laser-cut tips",
        "No drone technology",
      ],
    },
    {
      id: 6,
      name: "LED Headlight Conversion",
      category: "Lighting",
      images: ["/images/air-spring.png", "/images/air-spring.png"],

      description:
        "Complete LED headlight conversion kit offering superior illumination and modern styling. Plug-and-play installation with no modification required.",
      specifications: {
        Material: "Aircraft-grade Aluminum",
        Weight: "1.8kg",
        Compatibility: "Most vehicle models",
        Warranty: "2 years replacement",
        "Lumen Output": "6000 lumens per pair",
      },
      features: [
        "600% brighter than halogen",
        "Canbus error-free",
        "IP67 waterproof rating",
        "50,000 hour lifespan",
      ],
    },
    {
      id: 7,
      name: "Audi A7 Air Springs Air Suspension, Rear Side",
      category: "Suspension",
      images: ["/images/audi/airspring-rear.jpg", "/images/air-spring.png"],
      description:
        "This is a rear air spring for the Audi A7. It is designed to restore factory ride height and suspension performance. Compatible with Audi A7 Sportback (4GA, 4GF) models from 2010 to 2018. OEM part numbers: 4G0616001AA, 4G0616001T, 4G0616001, 4G0616001Q, 4G0616001K, 4G0616001R.",
      specifications: {
        Material: "High-grade rubber and aluminum",
        Weight: "4.2 kg",
        Compatibility:
          "Audi A7 Sportback (4GA, 4GF) 2010–2018, Rear Suspension",
        Warranty: "12 months",
        "Replaces OEM":
          "4G0616001AA, 4G0616001T, 4G0616001, 4G0616001Q, 4G0616001K, 4G0616001R",
      },
      features: [
        "Direct replacement rear air spring",
        "Restores original ride comfort and height",
        "Durable rubber bladder with corrosion-resistant components",
        "OEM fitment with no modifications required",
      ],
    },

    {
      id: 8,
      name: "Audi A7 Air Spring Suspension Service Kit (FRONT)",
      category: "Suspension",
      images: [
        "/images/audi/A7AirSpringSuspensionServiceKit(FRONT).jpg",
        "/images/audi/A7AirSpringSuspensionServiceKit(FRONT).jpg",
      ],
      description:
        "This is a new air spring for the Audi A7 front suspension. It is a complete service kit for the front air suspension strut. This kit should not be used for shock absorbers that are leaking oil. Compatible with Audi A7 4G Sportback (2010–2018). OEM part numbers: 4G0616039AD, 4G0616039T, 4G0616039AB, 4G0616039AK, 4G0616039AL.",
      specifications: {
        Material: "Rubber and aluminum",
        Weight: "5.4 kg",
        Compatibility: "Audi A7 4G Sportback (2010–2018), Front Suspension",
        Warranty: "12 months",
        "Replaces OEM":
          "4G0616039AD, 4G0616039T, 4G0616039AB, 4G0616039AK, 4G0616039AL",
      },
      features: [
        "Complete front air spring kit for suspension strut",
        "Restores original air suspension performance",
        "Made from durable rubber and corrosion-resistant components",
        "Direct OEM replacement with no modifications needed",
      ],
    },

    {
      id: 9,
      name: "Audi A7 4G shock-absorber Air suspension strut front",
      category: "Suspension",
      images: ["/images/audi/shock-absorber.jpg", "/images/air-spring.png"],

      description:
        "The Audi A7 (4G) 2010-2018 Air Suspension System has 2 Front Air Struts and 2 Rear Air Spring Bags with 2 Rear Shock Absorbers. Height Sensors tell the Control Module when the Air Suspension Compressor needs to inflate or deflate the Air Suspension System. The Solenoid Valve Block will distribute the Air accordingly throughout the Air Suspension System. Here at BAVARIA CENTER you will find many of the necessary parts and components to fix your Audi A7 (4G) 2010-2018 for less.",
      specifications: {
        Material: "Aluminum and rubber",
        Weight: "11.5 kg",
        Compatibility: "Audi A7 (4G) 2010–2018, Front suspension",
        Warranty: "12 months",
        OEM: "4G0616039AN, 4G0616039AM, 4G0616039AL, 4G0616039AC, 4G0616039AD, 4G0616039T, 4G0616039AB, 4G0616039AK",
      },
      features: [
        "Direct replacement for OEM air strut",
        "Restores original suspension performance",
        "Equipped with active internal valve for adaptive ride control",
        "CDC (Continuous Damping Control) function for dynamic comfort adjustment",
        "Hydraulic shock absorber with integrated internal valve",
        "Compatible with factory air suspension and electronic systems",
      ],
    },
  ];

  const categories = [
    "all",
    "Engine",
    "Brakes",
    "Suspension",
    "Intake",
    "Exhaust",
    "Lighting",
    "Electronics",
    "Exterior",
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "visible";
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "all" || product.category === filter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>Our Premium Products</h1>
          <p>
            Discover our collection of high-quality automotive components and
            accessories
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="products-filters">
        <div className="container">
          <div className="filters-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="search-icon" />
            </div>

            <div className="filter-controls">
              <div className="filter-group">
                <label>Filter by Category:</label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.images[0]} alt={product.name} />
                  <div className="product-overlay">
                    <button
                      className="view-details-btn"
                      onClick={() => openModal(product)}
                    >
                      <FiEye /> View Details
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="product-description-short">
                    {product.description.split(".").slice(0, 2).join(".") + "."}
                  </p>
                  <button
                    className="learn-more-btn"
                    onClick={() => openModal(product)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FiX />
            </button>

            <div className="modal-body">
              <div className="modal-left">
                <div className="modal-image">
                  <div className="modal-image-carousel">
                    <button
                      className="carousel-button prev"
                      onClick={prevImage}
                    >
                      &#10094;
                    </button>
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={selectedProduct.name}
                      className="carousel-image"
                    />
                    <button
                      className="carousel-button next"
                      onClick={nextImage}
                    >
                      &#10095;
                    </button>
                  </div>

                  {/* <img src={selectedProduct.images[0]} alt={selectedProduct.name} /> */}
                </div>

                <div className="product-specifications">
                  <h4>Technical Specifications</h4>
                  <div className="specs-grid">
                    {Object.entries(selectedProduct.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-details">
                <span className="product-category">
                  {selectedProduct.category}
                </span>
                <h2>{selectedProduct.name}</h2>

                <div className="product-description-full">
                  <h4>Description</h4>
                  <p>{selectedProduct.description}</p>
                </div>

                <div className="product-features">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <button className="inquiry-btn">
                    Request More Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Product Categories Overview */}
      <section className="categories-overview">
        <div className="container">
          <h2>Explore Our Product Categories</h2>
          <p className="section-subtitle">
            Comprehensive range of automotive solutions for every need
          </p>

          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 10L12 14L16 10M3 17V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Engine Components</h3>
              <p>
                High-performance engine parts including turbo kits, pistons,
                camshafts, and complete engine assemblies.
              </p>
              <ul>
                <li>Turbochargers & Superchargers</li>
                <li>Engine Internals</li>
                <li>Cooling Systems</li>
                <li>Fuel Systems</li>
              </ul>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22V8M12 8L16 12M12 8L8 12M3 12H5M19 12H21M7 12H7.01M17 12H17.01M12 2V4M12 20V22M4 12H2M22 12H20M7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20Z"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Braking Systems</h3>
              <p>
                Premium brake components for superior stopping power and safety
                in all driving conditions.
              </p>
              <ul>
                <li>Brake Calipers</li>
                <li>Rotors & Drums</li>
                <li>Brake Pads</li>
                <li>Brake Lines</li>
              </ul>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 19V12M17 19V12M12 19V5M3 5H21M9 5H15M5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H5C3.89543 7 3 7.89543 3 9V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Suspension & Chassis</h3>
              <p>
                Advanced suspension systems for improved handling, comfort, and
                vehicle stability.
              </p>
              <ul>
                <li>Coilover Kits</li>
                <li>Shock Absorbers</li>
                <li>Sway Bars</li>
                <li>Bushings & Mounts</li>
              </ul>
            </div>

            <div className="category-card">
              <div className="category-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6H20M4 6C2.89543 6 2 6.89543 2 8V10C2 11.1046 2.89543 12 4 12H20C21.1046 12 22 11.1046 22 10V8C22 6.89543 21.1046 6 20 6M4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6M8 12V18"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Electronics & Lighting</h3>
              <p>
                Modern electronic systems and lighting solutions for enhanced
                vehicle functionality.
              </p>
              <ul>
                <li>LED Lighting</li>
                <li>Performance Chips</li>
                <li>Audio Systems</li>
                <li>Navigation & Safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="technical-support">
        <div className="container">
          <div className="support-content">
            <div className="support-text">
              <h2>Technical Support & Expertise</h2>
              <p>
                Our team of automotive experts is here to help you choose the
                right products and provide technical guidance for your specific
                needs.
              </p>

              <div className="support-features">
                <div className="support-feature">
                  <div className="feature-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Expert Consultation</h4>
                    <p>
                      Get personalized advice from our certified automotive
                      technicians
                    </p>
                  </div>
                </div>

                <div className="support-feature">
                  <div className="feature-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#10B981"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Installation Guidance</h4>
                    <p>
                      Comprehensive installation manuals and video tutorials
                      available
                    </p>
                  </div>
                </div>

                <div className="support-feature">
                  <div className="feature-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8M14 2L20 8M14 2V8H20M16 13H8M16 17H8M10 9H8"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Technical Documentation</h4>
                    <p>
                      Detailed specifications, wiring diagrams, and
                      compatibility charts
                    </p>
                  </div>
                </div>

                <div className="support-feature">
                  <div className="feature-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.3639M5.63604 18.364C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                        stroke="#8B5CF6"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4>Warranty Support</h4>
                    <p>
                      Comprehensive warranty coverage and hassle-free claims
                      process
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="support-cta">
                <button className="support-btn">
                  Contact Our Technical Team
                </button>
                <p className="support-hours">
                  Available Monday - Friday, 8AM - 6PM EST
                </p>
              </div> */}
            </div>

            <div className="support-image">
              <img
                src="/images/technical-team.jpg"
                alt="Technical Support Team"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
