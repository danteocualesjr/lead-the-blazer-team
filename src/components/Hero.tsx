
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/4a13a5ee-59de-4222-82bc-306198c025c3.png')" }}>
      <div className="absolute inset-0 bg-navy/50"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-display font-bold leading-tight mb-6">
            YOUR BALTIMORE MARYLAND REAL ESTATE AGENT
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            At The Blazer Team, we help you sell your Baltimore home faster, for more money, and find your perfect new home with less hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary flex items-center justify-center gap-2 py-6 text-lg">
              <Search className="h-5 w-5" />
              Search for Homes
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 flex items-center justify-center gap-2 py-6 text-lg">
              <Home className="h-5 w-5" />
              Get Your Home's Value
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
