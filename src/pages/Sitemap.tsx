
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sitemap = () => {
  // Sample service areas
  const serviceAreas = [
    "Aaronsburg, PA", "Baltimore, MD", "Canton, MD", "Dundalk, MD",
    "Essex, MD", "Fells Point, MD", "Glen Burnie, MD", "Hampden, MD",
    "Inner Harbor, MD", "Johns Hopkins, MD", "Kenwood, MD", "Locust Point, MD",
    "Mount Vernon, MD", "North Baltimore, MD", "Owings Mills, MD", "Patterson Park, MD",
    "Quarry Lake, MD", "Roland Park, MD", "Sparrows Point, MD", "Towson, MD",
    "Upper Fells Point, MD", "Violetville, MD", "West Baltimore, MD", "Xenia, OH",
    "York, PA", "Zion, IL"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 text-navy">
              Sitemap
            </h1>
            <p className="text-xl text-realEstate-medium max-w-2xl mx-auto">
              Find everything on our website with this comprehensive sitemap.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-display font-medium mb-6 text-navy">
                Main Navigation
              </h2>
              
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link to="/sell" className="hover:text-gold transition-colors">Sell My Property!</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-display font-medium mb-6 text-navy">
                Homes for Sale
              </h2>
              
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gold transition-colors">All Listings</Link></li>
                <li><Link to="/" className="hover:text-gold transition-colors">Featured Listings</Link></li>
                <li><Link to="/" className="hover:text-gold transition-colors">New Construction</Link></li>
                <li><Link to="/" className="hover:text-gold transition-colors">Waterfront Properties</Link></li>
                <li><Link to="/" className="hover:text-gold transition-colors">Luxury Homes</Link></li>
                <li><Link to="/" className="hover:text-gold transition-colors">Condos & Townhomes</Link></li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-display font-medium mb-6 text-navy">
                Sell My Property!
              </h2>
              
              <ul className="space-y-2">
                <li><Link to="/sell" className="hover:text-gold transition-colors">Sell My Home</Link></li>
                <li><Link to="/sell" className="hover:text-gold transition-colors">Home Valuation</Link></li>
                <li><Link to="/sell" className="hover:text-gold transition-colors">Sold Listings</Link></li>
                <li><Link to="/sell" className="hover:text-gold transition-colors">Selling Process</Link></li>
                <li><Link to="/sell" className="hover:text-gold transition-colors">Seller Resources</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-display font-medium mb-6 text-navy">
              All Service Areas
            </h2>
            
            <div className="glass-card p-8 rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-4">
                {serviceAreas.map((area, index) => (
                  <div key={index}>
                    <Link to="/" className="hover:text-gold transition-colors">
                      Homes for Sale in {area}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
