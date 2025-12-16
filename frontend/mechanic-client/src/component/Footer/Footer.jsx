import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-primary">Find My Mechanic</h5>
            <p className="text-muted small">
              Book trusted car & bike mechanics near you.  
              Fast, reliable and doorstep service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-decoration-none text-muted">Home</a></li>
              <li><a href="/services" className="text-decoration-none text-muted">Services</a></li>
              <li><a href="/mechanics" className="text-decoration-none text-muted">Mechanics</a></li>
              <li><a href="/booking" className="text-decoration-none text-muted">Booking</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-2">
            <h6 className="fw-semibold">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="/help" className="text-decoration-none text-muted">Help Center</a></li>
              <li><a href="/contact" className="text-decoration-none text-muted">Contact Us</a></li>
              <li><a href="/privacy" className="text-decoration-none text-muted">Privacy Policy</a></li>
              <li><a href="/terms" className="text-decoration-none text-muted">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <h6 className="fw-semibold">Contact</h6>
            <p className="text-muted small mb-1">
              <i className="bi bi-geo-alt me-2"></i>Indore, India
            </p>
            <p className="text-muted small mb-1">
              <i className="bi bi-envelope me-2"></i>support@findmymechanic.com
            </p>
            <p className="text-muted small">
              <i className="bi bi-telephone me-2"></i>+91 98765 43210
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-primary fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-primary fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-primary fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-primary fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-top py-3">
        <div className="container text-center small text-muted">
          © {new Date().getFullYear()} Find My Mechanic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
