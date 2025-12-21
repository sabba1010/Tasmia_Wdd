import React from "react";
import VelvetGlowLogo from "../assets/logo/VelvetGlowLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={VelvetGlowLogo} alt="Velvet Glow Logo" className="h-10" />
              <h4 className="text-2xl font-semibold">Velvet Glow</h4>
            </div>
            <p className="text-sm text-gray-300">
              At Northbound we specialize in aligning people strategies with business goals. Whether you're growing, restructuring, or adapting to new challenges, we help ensure your organization has the right talent, in the right place, at the right time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Talent and Workforce Strategy</li>
              <li>Optimize your Talent processes</li>
              <li>Interim Consultants</li>
              <li>Advisory Services</li>
              <li>Recruitment and Executive Search</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>Consulting Services</li>
              <li>About us</li>
              <li>Knowledge bank</li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="h-6"
                  />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
          <p>© 2024 Benderm | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
