import React from "react";
import "../styles/about.css";
import {
  FiUsers,
  FiAward,
  FiMapPin,
  FiPackage,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

const About = () => {
  const stats = [
    {
      icon: <FiUsers size={40} />,
      number: "10,000+",
      label: "Happy Customers",
    },
    { icon: <FiAward size={40} />, number: "15+", label: "Industry Awards" },
    { icon: <FiMapPin size={40} />, number: "50+", label: "Cities Served" },
    {
      icon: <FiPackage size={40} />,
      number: "500+",
      label: "Products Available",
    },
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "/images/founder.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "/images/founder.jpg",
    },
    {
      name: "Michael Chen",
      role: "Head Engineer",
      image: "/images/founder.jpg",
    },
    {
      name: "David Wilson",
      role: "Customer Relations",
      image: "/images/founder.jpg",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      {/* <section className="about-hero">
        <div className="hero-content">
          <h1>Driving Innovation in Auto Parts</h1>
          <p>Since 2010, we've been committed to delivering premium automotive components with unmatched expertise.</p>
        </div>
      </section> */}

      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-subtitle">OUR LEGACY</span>
            <h1>
              Driving Innovation <br />
              in Auto Parts
            </h1>
            <div className="hero-divider"></div>
            <p>
              Since 2010, we've been committed to delivering premium automotive
              components with unmatched expertise.
            </p>
            <button className="hero-cta">
              Explore Our Story
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-statement">
              To revolutionize the auto parts industry by providing superior
              quality components, expert guidance, and exceptional service that
              keeps vehicles running at peak performance.
            </p>
            <div className="mission-values">
              <div className="value-card">
                <div className="value-icon quality"></div>
                <h3>Quality Assurance</h3>
                <p>
                  Every part undergoes rigorous testing to meet our high
                  standards.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon innovation"></div>
                <h3>Continuous Innovation</h3>
                <p>We stay ahead with the latest automotive technologies.</p>
              </div>
              <div className="value-card">
                <div className="value-icon service"></div>
                <h3>Customer First</h3>
                <p>Your satisfaction is at the heart of everything we do.</p>
              </div>
              <div className="value-card">
                <div className="value-icon commitment"></div>
                <h3>Commitment to Excellence</h3>   
                <p>Delivering excellence through innovation and commitment.</p>
              </div>
            </div>
          </div>
          <div className="mission-image">
            <img
              src="/images/garage.webp"
              alt="Auto parts quality inspection"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Founded in a Small Garage</h3>
                <p>
                  Started with just 50 parts and a vision to change the
                  industry.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2014</div>
              <div className="timeline-content">
                <h3>First Warehouse Opened</h3>
                <p>Expanded operations to serve the entire East Coast.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>National Distribution</h3>
                <p>Launched our e-commerce platform and went nationwide.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Industry Recognition</h3>
                <p>
                  Awarded "Best Auto Parts Supplier" by Automotive Excellence
                  Magazine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate professionals behind AutoPartsPro
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image-container">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="team-overlay">
                      <div className="social-links">
                        <a href="#" aria-label={`${member.name} LinkedIn`}>
                          <FiLinkedin />
                        </a>
                        <a href="#" aria-label={`${member.name} Twitter`}>
                          <FiTwitter />
                        </a>
                        <a href="#" aria-label={`${member.name} Email`}>
                          <FiMail />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Experience the Difference?</h2>
          <p>
            Join thousands of satisfied customers who trust us for their
            automotive needs.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Browse Products</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
