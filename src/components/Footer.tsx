
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4 text-gold">The Blazer Team</h3>
            <p className="text-white/80 mb-4">
              At The Blazer Team Of Cummings & Co. Realtors, our focus is to help you sell your Baltimore Maryland area house faster, for more money… and help you find and buy the perfect home with less hassle.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/sell" className="hover:text-gold transition-colors">Sell My Property!</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/sitemap" className="hover:text-gold transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4 text-gold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Search for Homes</Link></li>
              <li><Link to="/sell" className="hover:text-gold transition-colors">Get Your Home's Value</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Featured Listings</Link></li>
              <li><Link to="/" className="hover:text-gold transition-colors">Recently Sold</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-2" />
                <span>2314 Boston St., Baltimore, MD 21224</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-2" />
                <a href="tel:4104995404" className="hover:text-gold transition-colors">(410) 499-5404</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-2" />
                <a href="mailto:derek@theblazerteam.com" className="hover:text-gold transition-colors">derek@theblazerteam.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} The Blazer Team of Cummings & Co. Realtors. All Rights Reserved.</p>
          <p className="mt-2">2314 Boston St., Baltimore, MD 21224 | License #5462</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
