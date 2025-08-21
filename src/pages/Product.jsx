import React, { useState } from 'react';
import { FiSearch, FiFilter, FiEye, FiX } from 'react-icons/fi';
import '../styles/product.css';
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Turbo Engine Kit",
      category: "Engine",
      image: "/images/air-spring.png",
      description: "High-performance turbo engine kit designed for enhanced power and efficiency. Features precision engineering with aerospace-grade materials for maximum durability and performance.",
      specifications: {
        Material: "Aerospace Aluminum Alloy",
        Weight: "25kg",
        Compatibility: "Most 4-cylinder engines",
        Warranty: "2 years manufacturer warranty",
        "Power Gain": "Up to 40% increase"
      },
      features: [
        "Precision balanced components",
        "High-temperature resistance",
        "Easy installation",
        "OEM quality standards"
      ]
    },
    {
      id: 2,
      name: "Performance Brake System",
      category: "Brakes",
      image: "/images/air-spring.png",
      description: "Premium brake system offering superior stopping power and exceptional durability. Designed for both daily driving and performance applications.",
      specifications: {
        Material: "Carbon Ceramic Composite",
        Weight: "15kg",
        Compatibility: "All modern vehicle models",
        Warranty: "3 years limited warranty",
        "Stopping Distance": "30% improvement"
      },
      features: [
        "Fade-resistant performance",
        "Low dust formulation",
        "Corrosion protection",
        "Quiet operation"
      ]
    },
    {
      id: 3,
      name: "Sport Suspension Kit",
      category: "Suspension",
      image: "/images/air-spring.png",
      description: "Advanced suspension system that provides improved handling characteristics while maintaining ride comfort. Perfect for enthusiasts seeking better road manners.",
      specifications: {
        Material: "Billet Steel & Polyurethane",
        Weight: "35kg",
        Compatibility: "Sedans and SUVs 2010+",
        Warranty: "Lifetime guarantee",
        "Drop Height": "Adjustable 1-3 inches"
      },
      features: [
        "Height adjustable",
        "32-way damping adjustment",
        "Lifetime warranty",
        "Track proven performance"
      ]
    },
    {
      id: 4,
      name: "High-Flow Air Intake",
      category: "Intake",
      image: "/images/air-spring.png",
      description: "Cold air intake system that increases airflow for better engine performance and improved fuel efficiency. Features advanced filtration technology.",
      specifications: {
        Material: "304 Stainless Steel",
        Weight: "2.5kg",
        Compatibility: "Universal fit with adapters",
        Warranty: "1 year unlimited mileage",
        "Airflow Increase": "Up to 50% more airflow"
      },
      features: [
        "Washable/reusable filter",
        "Heat shield included",
        "Easy 30-minute installation",
        "Noticeable sound improvement"
      ]
    },
    {
      id: 5,
      name: "Racing Exhaust System",
      category: "Exhaust",
      image: "/images/air-spring.png",
      description: "Complete performance exhaust system that enhances engine sound while providing measurable horsepower gains. T304 stainless steel construction.",
      specifications: {
        Material: "T304 Stainless Steel",
        Weight: "20kg",
        Compatibility: "Sport models 2015+",
        Warranty: "5 years against defects",
        "Power Gain": "15-25 horsepower"
      },
      features: [
        "Deep aggressive tone",
        "Mandrel bent piping",
        "Laser-cut tips",
        "No drone technology"
      ]
    },
    {
      id: 6,
      name: "LED Headlight Conversion",
      category: "Lighting",
      image: "/images/air-spring.png",
      description: "Complete LED headlight conversion kit offering superior illumination and modern styling. Plug-and-play installation with no modification required.",
      specifications: {
        Material: "Aircraft-grade Aluminum",
        Weight: "1.8kg",
        Compatibility: "Most vehicle models",
        Warranty: "2 years replacement",
        "Lumen Output": "6000 lumens per pair"
      },
      features: [
        "600% brighter than halogen",
        "Canbus error-free",
        "IP67 waterproof rating",
        "50,000 hour lifespan"
      ]
    },
    {
      id: 7,
      name: "Performance Chip Tuner",
      category: "Electronics",
      image: "/images/air-spring.png",
      description: "Advanced performance tuning module that optimizes engine parameters for increased power and efficiency. Easy plug-and-play installation.",
      specifications: {
        Material: "ABS Plastic & Electronics",
        Weight: "0.3kg",
        Compatibility: "2008+ vehicles with OBD2",
        Warranty: "1 year electronics",
        "MPG Improvement": "Up to 3 MPG gain"
      },
      features: [
        "5 programmable maps",
        "Smartphone app control",
        "Real-time data monitoring",
        "Easy removal for service"
      ]
    },
    {
      id: 8,
      name: "Carbon Fiber Spoiler",
      category: "Exterior",
      image: "/images/air-spring.png",
      description: "Aerodynamic carbon fiber spoiler that enhances vehicle stability and provides aggressive styling. Real dry carbon construction.",
      specifications: {
        Material: "2x2 Twill Carbon Fiber",
        Weight: "2.2kg",
        Compatibility: "Model specific applications",
        Warranty: "2 years UV protection",
        "Downforce": "Up to 40kg at speed"
      },
      features: [
        "Real dry carbon fiber",
        "UV protective clear coat",
        "Pre-drilled mounting holes",
        "3M tape included"
      ]
    }
  ];

  const categories = ['all', 'Engine', 'Brakes', 'Suspension', 'Intake', 'Exhaust', 'Lighting', 'Electronics', 'Exterior'];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'visible';
  };

  const filteredProducts = products.filter(product => 
    filter === 'all' || product.category === filter
  );

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-content">
          <h1>Our Premium Products</h1>
          <p>Discover our collection of high-quality automotive components and accessories</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="products-filters">
        <div className="container">
          <div className="filters-container">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search products..." />
            </div>
            
            <div className="filter-controls">
              <div className="filter-group">
                <label>Filter by Category:</label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  {categories.map(category => (
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
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
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
                    {product.description.split('.').slice(0, 2).join('.') + '.'}
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
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              
              <div className="modal-details">
                <span className="product-category">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                
                <div className="product-description-full">
                  <h4>Description</h4>
                  <p>{selectedProduct.description}</p>
                </div>
                
                <div className="product-specifications">
                  <h4>Technical Specifications</h4>
                  <div className="specs-grid">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
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
    </div>
  );
};

export default Products;