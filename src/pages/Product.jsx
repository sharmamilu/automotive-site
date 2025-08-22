import React, { useState, useEffect } from "react";
import { FiSearch, FiFilter, FiEye, FiX, FiGrid, FiTruck, FiMapPin, FiCalendar, FiRefreshCw  } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import "../styles/product.css";
const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [vehicleFilter, setVehicleFilter] = useState("all");
  const [positionFilter, setPositionFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // Check if any filters are active
  const hasActiveFilters =
    filter !== "all" ||
    vehicleFilter !== "all" ||
    positionFilter !== "all" ||
    yearFilter !== "all" ||
    searchQuery;

  // Clear all filters function
  const clearAllFilters = () => {
    setFilter("all");
    setVehicleFilter("all");
    setPositionFilter("all");
    setYearFilter("all");
    setSearchQuery("");
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");

    if (search) {
      setSearchQuery(search);
    }
  }, [location.search]);

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
      name: "Mercedes S-Class (W220) 1998–2005 AIRMATIC Front Air Suspension Strut",
      category: "Air Suspension",
      description:
        "Mercedes-Benz S-Class air suspension systems provide excellent comfort and performance for years, but over time, rubber components such as air strut bladders begin to degrade, causing air leaks and system failure. This high-quality front air suspension strut for AIRMATIC systems is compatible with S-Class W220 models from 1998 to 2005. Replace your worn-out or leaking strut to restore proper vehicle height and ride comfort.",
      features: [
        "Compatible with Mercedes-Benz S-Class W220 (1998–2005)",
        "Restores vehicle height and ride quality",
        "OEM or aftermarket options available",
        "High-quality rubber bladder and shock absorber",
        "Improves driving stability and comfort",
      ],
      specifications: {
        Position: "Front",
        System: "AIRMATIC",
        "Vehicle Model": "Mercedes S-Class (W220)",
        "Year Range": "1998–2005",
        Material: "Rubber & Metal",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/s-l1600-front.webp",
        "/images/mercedes/s-l1600-front1.webp",
        "/images/mercedes/s-l1600-front2.webp",
        "/images/mercedes/s-l1600-front3.webp",
        "/images/mercedes/s-l1600-front4.webp",
      ],
    },
    {
      id: 3,
      name: "Mercedes S-Class (W220) 1998–2006 AIRMATIC Rear Air Suspension Strut with ADS",
      category: "Air Suspension",
      description:
        "This high-performance rear air suspension strut is compatible with Mercedes-Benz S-Class W220 models from 1998 to 2006 and includes ADS (Adaptive Damping System). Featuring an active inner valve, it adapts the damping response based on road conditions, driving style, and selected drive mode. This air strut ensures optimum comfort and handling by dynamically adjusting the suspension in real time. Perfect for restoring factory ride quality and functionality in vehicles equipped with AIRMATIC and ADS systems.",
      features: [
        "For Mercedes-Benz S-Class W220 (1998–2006)",
        "Position: Rear with Adaptive Damping System (ADS)",
        "Active inner valve for responsive ride adjustment",
        "OEM compatibility for seamless integration",
        "Improves comfort, stability, and control",
      ],
      specifications: {
        Position: "Rear",
        System: "AIRMATIC with ADS",
        "Vehicle Model": "Mercedes S-Class (W220)",
        "Year Range": "1998–2006",
        "OEM Part Numbers":
          "A2203202438, 2203202438, A220320243880, 220320243880, A220320243889, 220320243889, A220320243838, 220320243838",
        Material: "Metal & Rubber",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/s-l1600-rear1.webp",
        "/images/mercedes/s-l1600-rear2.webp",
        "/images/mercedes/s-l1600-rear3.webp",
      ],
    },
    {
      id: 4,
      name: "Mercedes S-Class (W220) 1998–2006 AIRMATIC Air Suspension Compressor",
      category: "Air Suspension",
      description:
        "This air suspension compressor is designed for the Mercedes-Benz S-Class W220 equipped with the AIRMATIC system (1998–2006). It plays a crucial role in maintaining optimal air pressure in the suspension system to ensure proper ride height and comfort. A failing or weak compressor can cause your vehicle to sag, especially after being parked overnight. This high-quality replacement unit restores suspension performance and prevents damage to other components by maintaining proper system pressure. Compatible with vehicles featuring Adaptive Damping System (ADS) and Drive Select functionality.",
      features: [
        "Direct replacement for Mercedes S-Class W220 AIRMATIC models",
        "Ensures consistent ride height and suspension responsiveness",
        "Compatible with ADS-equipped vehicles",
        "High-performance motor and durable construction",
        "OEM-grade quality – tested for pressure and durability",
      ],
      specifications: {
        Position: "Air Suspension System",
        System: "AIRMATIC with ADS",
        "Vehicle Model": "Mercedes S-Class (W220)",
        "Year Range": "1998–2006",
        "OEM Part Numbers":
          "A2203205013, 2203205013, A220320501380, 220320501380, A220320501389, 220320501389, A220320501338, 220320501338",
        Material: "Metal & Composite",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w220-air-compressor-1.jpg",
        "/images/mercedes/w220-air-compressor-2.jpg",
        "/images/mercedes/w220-air-compressor-3.jpg",
        "/images/mercedes/w220-air-compressor-4.jpg",
      ],
    },

    {
      id: 5,
      name: "Mercedes S-Class (W221) 2005–2013 4MATIC AIRMATIC Front Left Air Suspension Strut",
      category: "Air Suspension",
      description:
        "This high-quality front left air suspension strut is designed for Mercedes-Benz S-Class (W221) models equipped with AIRMATIC and 4MATIC all-wheel-drive systems. It features an integrated shock absorber and air spring to deliver factory-level ride comfort, handling, and performance. This unit adapts to road conditions and driving style via the vehicle’s AIRMATIC control system. Designed as a direct OEM replacement for worn or leaking struts, ensuring your Mercedes maintains proper height and smooth ride dynamics.",
      features: [
        "Fits Mercedes-Benz S-Class W221 (2005–2013) with 4MATIC AWD",
        "Position: Front Left",
        "Integrated shock absorber and air spring",
        "Compatible with AIRMATIC and ADS systems",
        "Restores suspension height and ride comfort",
        "OEM-compatible fit and performance",
      ],
      specifications: {
        Position: "Front Left",
        System: "AIRMATIC with ADS",
        Drivetrain: "4MATIC (AWD)",
        "Vehicle Model": "Mercedes S-Class (W221)",
        "Year Range": "2005–2013",
        Material: "Rubber & Metal",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w221-front-left-air-strut-1.jpg",
        "/images/mercedes/w221-front-left-air-strut-2.jpg",
        "/images/mercedes/w221-front-left-air-strut-3.jpg",
        "/images/mercedes/w221-front-left-air-strut-4.jpg",
        "/images/mercedes/w221-front-left-air-strut-5.jpg",
        "/images/mercedes/w221-front-left-air-strut-6.jpg",
        "/images/mercedes/w221-front-left-air-strut-7.jpg",
      ],
    },
    {
      id: 6,
      name: "Mercedes S-Class (W221) 2005–2013 4MATIC AIRMATIC Front Right Air Suspension Strut with ADS",
      category: "Air Suspension",
      description:
        "This front right air suspension strut is designed for Mercedes-Benz S-Class W221 models with 4MATIC and AIRMATIC Dual Control air suspension systems. Equipped with the semi-active ADS (Adaptive Damping System), this strut automatically adjusts damping levels based on road conditions, driving style, and selected drive mode via the vehicle's 'Drive Select' system. It features a hydraulic DampTronic shock absorber integrated with an air spring to ensure top-tier ride comfort, stability, and handling. Perfect for restoring OEM suspension performance in vehicles requiring precision and dynamic control.",
      features: [
        "Fits Mercedes-Benz S-Class W221 (2005–2013) with 4MATIC AWD",
        "Position: Front Right",
        "Supports AIRMATIC Dual Control with ADS",
        "Semi-active DampTronic shock absorber adapts to driving conditions",
        "Restores original ride height, comfort, and safety",
        "OEM-compatible quality for easy installation",
      ],
      specifications: {
        Position: "Front Right",
        System: "AIRMATIC with ADS (Dual Control)",
        Drivetrain: "4MATIC (AWD)",
        "Vehicle Model": "Mercedes S-Class (W221)",
        "Year Range": "2005–2013",
        "OEM Part Numbers":
          "A2213201738, 221320173889, A2213200438, 221320043889, A221320173838, 221320173880, A221320043838, 221320043880, A2213205313, 221320531338, A221320531380, 22132053133880",
        Material: "Rubber & Metal",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w221-front-right-air-strut-1.jpg",
        "/images/mercedes/w221-front-right-air-strut-2.jpg",
      ],
    },
    {
      id: 7,
      name: "Mercedes S-Class (W221) 2005–2013 RWD AIRMATIC Front Air Suspension Strut with ADS",
      category: "Air Suspension",
      description:
        "This front air suspension strut is designed for rear-wheel-drive (RWD) Mercedes-Benz S-Class (W221) models with AIRMATIC Dual Control and ADS (Adaptive Damping System). The semi-active DampTronic shock absorber dynamically adjusts damping based on road surface, driving behavior, and selected driving mode via the 'Drive Select' system. This high-performance component restores vehicle ride height and ensures optimal ride quality and handling performance, just like from the factory.",
      features: [
        "Fits Mercedes-Benz S-Class W221 (2005–2013) RWD models",
        "Position: Front (Left or Right, specify when ordering)",
        "Compatible with AIRMATIC and ADS systems",
        "Hydraulic DampTronic adaptive shock absorber",
        "OEM-grade quality for comfort and control",
      ],
      specifications: {
        Position: "Front",
        System: "AIRMATIC with ADS (Dual Control)",
        Drivetrain: "RWD",
        "Vehicle Model": "Mercedes S-Class (W221)",
        "Year Range": "2005–2013",
        "OEM Part Numbers":
          "A2213201838, A221320183889, A2213200538, A221320053889, A221320183838, A221320183880, A221320053838, A221320053880, A2213205413, A221320541338, A221320541380, A22132054133880, 2213201838, 221320183889, 2213200538, 221320053889, 221320183838, 221320183880, 221320053838, 221320053880, 2213205413, 221320541338, 221320541380, 22132054133880",
        Material: "Rubber & Metal",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w221-rwd-front-air-strut-1.webp",
        "/images/mercedes/w221-rwd-front-air-strut-2.webp",
        "/images/mercedes/w221-rwd-front-air-strut-3.webp",
        "/images/mercedes/w221-rwd-front-air-strut-4.webp",
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
    {
      id: 10,
      name: "Mercedes S-Class (W221) 2005–2013 AIRMATIC Front Air Suspension Strut with ADS",
      category: "Air Suspension",
      description:
        "This front air strut (part number A2213209313) is designed for Mercedes-Benz S-Class W221 models equipped with AIRMATIC and ADS (Adaptive Damping System). It features a hydraulic DampTronic shock absorber, which adjusts damping based on road surface, driving style, and selected driving mode through the Drive Select system. This OEM-grade replacement part restores original ride comfort and suspension performance in a wide range of W221 models, including AMG variants.",
      features: [
        "Fits Mercedes-Benz S-Class W221 (2005–2013) models with AIRMATIC and ADS",
        "Position: Front (Left or Right)",
        "Semi-active DampTronic system adapts to road and driving dynamics",
        "Restores factory ride comfort and height",
        "OEM-equivalent part with precise fit and performance",
      ],
      specifications: {
        Position: "Front",
        System: "AIRMATIC with ADS",
        Drivetrain: "RWD / 4MATIC",
        "Vehicle Model": "Mercedes S-Class (W221)",
        "Year Range": "2005–2013",
        "OEM Part Numbers":
          "A2213209313, 2213209313, A221320931389, 221320931389, A2213204913, 2213204913",
        Material: "Rubber & Metal",
        Condition: "New or Remanufactured",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w221-front-air-strut-kit-1.jpg",
        "/images/mercedes/w221-front-air-strut-kit-2.jpg",
        "/images/mercedes/w221-front-air-strut-kit-3.jpg",
      ],
    },
    {
      id: 11,
      name: "Mercedes S-Class (W221) 2005–2013 AIRMATIC Rear Left Air Suspension Strut",
      category: "Air Suspension",
      description:
        "This is a rear left air suspension strut for Mercedes-Benz S-Class W221 models with AIRMATIC. Designed to replace worn or leaking air struts while maintaining the vehicle's original ride quality. This component integrates an air spring and shock absorber to maintain height and comfort. Ideal for full replacement or restoration when the shock absorber is still functioning well and there are no oil leaks. This is a complete kit for strut-level repair or replacement.",
      features: [
        "Fits Mercedes-Benz S-Class W221 (2005–2013)",
        "Position: Rear Left",
        "OEM-grade air spring integrated with strut housing",
        "Ideal for replacing leaking or cracked air bladders",
        "Not suitable for oil-leaking shock absorbers",
        "Restores vehicle ride height and performance",
      ],
      specifications: {
        Position: "Rear Left",
        System: "AIRMATIC with ADS",
        Drivetrain: "RWD / 4MATIC",
        "Vehicle Model": "Mercedes S-Class (W221)",
        "Year Range": "2005–2013",
        "OEM Part Numbers":
          "A2213209313, 2213209313, A221320931389, 221320931389, A2213204913, 2213204913",
        Material: "Rubber & Metal",
        Condition: "New",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w221-rear-left-air-strut-1.webp",
        "/images/mercedes/w221-rear-left-air-strut-2.webp",
        "/images/mercedes/w221-rear-left-air-strut-3.webp",
      ],
    },
    {
      id: 12,
      name: "Mercedes S-Class (W221) 2005–2013 AIRMATIC Rear Right Air Suspension Strut with ADS",
      category: "Air Suspension",
      description:
        "This is a new rear right shock absorber for the Mercedes-Benz S-Class W221 equipped with AIRMATIC and Adaptive Damping System (ADS). It features an active inner valve that adapts to road surface, driving style, and selected driving mode via the Drive Select system. This OEM-grade strut restores the original comfort and dynamic response, making it a perfect replacement for failing or worn rear suspension components.",
      features: [
        "Position: Rear Right",
        "Active ADS (Adaptive Damping System) compatible",
        "Maintains original ride height and damping characteristics",
        "Ideal for vehicles with intact shock absorber performance",
        "Not suitable for oil-leaking struts",
        "OEM-fitment with premium ride comfort",
      ],
      specifications: {
        Position: "Rear Right",
        System: "AIRMATIC with ADS",
        "Vehicle Model": "Mercedes S-Class (W221)",
        "Year Range": "2005–2013",
        "OEM Part Numbers":
          "A2213205513, 2213205513, A2213205713, 2213205713, A2213201338, 2213201338, A221320551380, 221320551380, A221320571380, 221320571380, A221320551389, 221320551389, A221320571389, 221320571389",
        Condition: "New",
        Warranty: "12 months",
      },
      images: [
        "/images/mercedes/w221-rear-right-air-strut-1.jpg",
        "/images/mercedes/w221-rear-right-air-strut-2.jpg",
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
  const matchesVehicle = vehicleFilter === "all" || 
    (product.specifications && product.specifications['Vehicle Model'] === vehicleFilter);
  const matchesPosition = positionFilter === "all" || 
    (product.specifications && product.specifications.Position === positionFilter);
  const matchesYear = yearFilter === "all" || 
    (product.specifications && product.specifications['Year Range'] === yearFilter);

  return matchesCategory && matchesSearch && matchesVehicle && matchesPosition && matchesYear;
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
      {/* Filters and Search */}
      <section className="products-filters">
        <div className="container">
          <div className="filters-header">
            <h2>Find Your Perfect Parts</h2>
            <p>Filter by your specific requirements</p>
          </div>

          <div className="filters-container">
            {/* Search Box */}
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by product name or desc..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="filter-controls">
              {/* Category Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <FiGrid /> Category
                </label>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Model Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <FiTruck /> Vehicle Model
                </label>
                <select
                  value={vehicleFilter}
                  onChange={(e) => setVehicleFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Models</option>
                  {Array.from(
                    new Set(
                      products
                        .map((p) => p.specifications?.["Vehicle Model"] || "")
                        .filter(Boolean)
                    )
                  ).map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Position Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <FiMapPin /> Position
                </label>
                <select
                  value={positionFilter}
                  onChange={(e) => setPositionFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Positions</option>
                  {Array.from(
                    new Set(
                      products
                        .map((p) => p.specifications?.Position || "")
                        .filter(Boolean)
                    )
                  ).map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Range Filter */}
              <div className="filter-group">
                <label className="filter-label">
                  <FiCalendar /> Year Range
                </label>
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Years</option>
                  {Array.from(
                    new Set(
                      products
                        .map((p) => p.specifications?.["Year Range"] || "")
                        .filter(Boolean)
                    )
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters Button */}
              <button className="clear-filters" onClick={clearAllFilters}>
                <FiRefreshCw /> Clear All
              </button>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="active-filters">
                <span>Active filters:</span>
                {filter !== "all" && (
                  <span className="filter-tag">
                    Category: {filter} <FiX onClick={() => setFilter("all")} />
                  </span>
                )}
                {vehicleFilter !== "all" && (
                  <span className="filter-tag">
                    Model: {vehicleFilter}{" "}
                    <FiX onClick={() => setVehicleFilter("all")} />
                  </span>
                )}
                {positionFilter !== "all" && (
                  <span className="filter-tag">
                    Position: {positionFilter}{" "}
                    <FiX onClick={() => setPositionFilter("all")} />
                  </span>
                )}
                {yearFilter !== "all" && (
                  <span className="filter-tag">
                    Year: {yearFilter}{" "}
                    <FiX onClick={() => setYearFilter("all")} />
                  </span>
                )}
                {searchQuery && (
                  <span className="filter-tag">
                    Search: "{searchQuery}"{" "}
                    <FiX onClick={() => setSearchQuery("")} />
                  </span>
                )}
              </div>
            )}
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

            {/* <div className="support-image">
              <img
                src="/images/technical-team.jpg"
                alt="Technical Support Team"
                loading="lazy"
              />
            </div> */}
            <div className="support-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="support-video-player"
                poster="/images/technical-video-poster.jpg"
              >
                <source src="/videos/product.mp4" type="video/mp4" />
                <source
                  src="/videos/technical-support.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
              {/* <div className="video-play-button">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.2)" />
      <path d="M10 8L16 12L10 16V8Z" fill="white" />
    </svg>
  </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
