
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SellProcess from '@/components/SellProcess';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';

const Sell = () => {
  const [address, setAddress] = useState('');

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle address submission logic
    console.log('Address submitted:', address);
    // This would normally trigger a valuation process or contact request
  };

  const guidancePoints = [
    {
      title: 'Strategic Pricing',
      description: 'Setting the right price from the start is crucial for attracting serious buyers and maximizing your sale price.',
    },
    {
      title: 'Managing Contingent Offers',
      description: 'We help you navigate offers that depend on the buyer selling their current home, ensuring you don\'t miss better opportunities.',
    },
    {
      title: 'Optimal Timing',
      description: 'When a property sits on the market too long, it can lose its appeal and cost you money every month it goes unsold.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80')" }}>
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-display font-medium mb-6">
            Sell Your Baltimore Home Quickly!
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join tons of highly satisfied homeowners who have worked with The Blazer Team to sell their home or commercial property quickly and for top dollar.
          </p>
          
          <form 
            onSubmit={handleAddressSubmit}
            className="max-w-md mx-auto glass-card p-6 rounded-xl"
          >
            <h3 className="text-xl text-white mb-4">Get Your Home's Value</h3>
            
            <div className="flex gap-2">
              <Input 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your property address"
                className="bg-white/90"
                required
              />
              
              <Button type="submit" className="btn-primary whitespace-nowrap">
                Get Value
              </Button>
            </div>
            
            <p className="text-white/70 text-sm mt-2">
              Or call us directly at (410) 499-5404
            </p>
          </form>
        </div>
      </section>
      
      <section className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Expert Guidance for Selling Your Home</h2>
          <p className="text-realEstate-medium mb-8">
            When selling your Baltimore home, you need an experienced team who understands the local market nuances and can guide you through the entire process.
          </p>
          
          <div className="space-y-6">
            {guidancePoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy mb-1">{point.title}</h3>
                  <p className="text-realEstate-medium">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-xl h-[400px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // This would be replaced with the actual video
            title="Derek Blazer explains double closing strategy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-gold">
            Selling Your Baltimore Home Should Be Easy, Fast, and Put The Most Money In Your Pocket
          </h2>
          
          <p className="text-white/80 max-w-3xl mx-auto">
            Our proven marketing strategies and vast network help sell your home quickly and for top dollar. We'll be with you every step of the way, handling all the details so you can focus on your next chapter.
          </p>
        </div>
      </section>
      
      <SellProcess />
      
      <section className="container-custom bg-realEstate-light rounded-xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Experience Saves You Time, Money, and Stress</h2>
          <p className="section-subtitle">
            With decades of combined experience in the Baltimore real estate market, we've seen it all and know exactly how to handle any situation that might arise during your home sale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-display font-medium mb-4 text-navy">Expert Negotiation</h3>
            <p className="text-realEstate-medium">
              Our skilled negotiators work tirelessly to secure the best possible terms and price for your property, protecting your interests every step of the way.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-display font-medium mb-4 text-navy">Professional Marketing</h3>
            <p className="text-realEstate-medium">
              We use professional photography, virtual tours, and targeted digital marketing to showcase your home to the right buyers, locally and globally.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-display font-medium mb-4 text-navy">Seamless Transactions</h3>
            <p className="text-realEstate-medium">
              From listing to closing, we manage all paperwork, inspections, and communications, ensuring a smooth and stress-free experience for you.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-display font-medium mb-4 text-navy">Local Market Expertise</h3>
            <p className="text-realEstate-medium">
              Our deep knowledge of Baltimore neighborhoods allows us to position your home effectively in the market, highlighting its unique value to potential buyers.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">
            Get Started Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sell;
