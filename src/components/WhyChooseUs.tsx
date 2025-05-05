
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    "Deep local market knowledge of Baltimore neighborhoods",
    "Personalized service tailored to your unique needs",
    "Cutting-edge marketing strategies for sellers",
    "Extensive network of industry connections",
    "Transparent communication throughout the process"
  ];

  return (
    <section className="py-16 md:py-24 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-gold">
              Why Work With Us vs. a National Chain?
            </h2>
            
            <p className="text-white/80 mb-8">
              Buying or selling a property in Maryland is a big decision, which is why it's more important than ever that you choose the right real-estate professional to be on your side. At The Blazer Team, we're proud to call Baltimore home and know the local market like the back of our hand.
            </p>
            
            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/about">
              <Button className="btn-primary inline-flex">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" 
              alt="Baltimore real estate" 
              className="rounded-lg shadow-2xl mx-auto w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-gold text-navy p-4 text-xl font-display font-medium rounded-lg shadow-xl">
              <div className="text-3xl font-bold mb-1">$130M+</div>
              <div>Value of Real Estate Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
