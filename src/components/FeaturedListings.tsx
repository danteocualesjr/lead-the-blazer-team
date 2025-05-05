
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface Listing {
  id: number;
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

const FeaturedListings = () => {
  const listings: Listing[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: '$525,000',
      address: '123 Harbor View Dr, Baltimore, MD 21230',
      beds: 3,
      baths: 2.5,
      sqft: 2100,
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: '$699,900',
      address: '456 Federal Hill Ave, Baltimore, MD 21230',
      beds: 4,
      baths: 3,
      sqft: 2800,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: '$425,000',
      address: '789 Canton Square, Baltimore, MD 21224',
      beds: 2,
      baths: 2,
      sqft: 1750,
    },
  ];

  return (
    <section className="bg-realEstate-light py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Listings</h2>
          <p className="section-subtitle">
            Discover our handpicked selection of Baltimore's finest properties currently on the market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Card key={listing.id} className="listing-card overflow-hidden border-none">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.address} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-navy text-white py-1 px-3 rounded-full text-sm font-medium">
                  New Listing
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-display font-medium text-navy">{listing.price}</h3>
                  <span className="text-realEstate-medium text-sm">{listing.sqft} sqft</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gold mr-1" />
                  <p className="text-sm text-realEstate-medium">{listing.address}</p>
                </div>
                
                <div className="flex justify-between border-t border-realEstate-light pt-4">
                  <span className="text-realEstate-dark">{listing.beds} Beds</span>
                  <span className="text-realEstate-dark">{listing.baths} Baths</span>
                  <Button variant="link" className="text-gold p-0">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">View All Listings</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
