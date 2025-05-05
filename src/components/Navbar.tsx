
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-display font-bold text-navy">
              The Blazer Team
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/sell" className="nav-link">
              Sell My Property!
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
            <Link to="/sitemap" className="nav-link">
              Sitemap
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="btn-primary">
              (410) 499-5404
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 top-20 bg-white z-40 md:hidden">
              <nav className="flex flex-col p-4">
                <Link to="/" className="p-4 border-b" onClick={closeMenu}>
                  Home
                </Link>
                <Link to="/about" className="p-4 border-b" onClick={closeMenu}>
                  About Us
                </Link>
                <Link to="/sell" className="p-4 border-b" onClick={closeMenu}>
                  Sell My Property!
                </Link>
                <Link to="/contact" className="p-4 border-b" onClick={closeMenu}>
                  Contact Us
                </Link>
                <Link to="/sitemap" className="p-4 border-b" onClick={closeMenu}>
                  Sitemap
                </Link>
                <Button className="btn-primary mt-4 justify-center" onClick={closeMenu}>
                  (410) 499-5404
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
