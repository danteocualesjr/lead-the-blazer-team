
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface SoldListing {
  id: number;
  image: string;
  price: string;
  address: string;
  soldDate: string;
}

const RecentlySold = () => {
  const soldListings: SoldListing[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: '$457,000',
      address: '123 Lakefront Way, Baltimore, MD 21220',
      soldDate: 'Sold: Apr 12, 2023',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: '$382,500',
      address: '456 Harbor View, Baltimore, MD 21224',
      soldDate: 'Sold: Feb 28, 2023',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      price: '$625,000',
      address: '789 Riverview Terrace, Baltimore, MD 21201',
      soldDate: 'Sold: Jan 15, 2023',
    },
  ];

  return (
    <section className="container-custom">
      <div className="text-center mb-16">
        <h2 className="section-title">Recently Sold</h2>
        <p className="section-subtitle">
          Take a look at our recent success stories from satisfied clients who've sold their properties with us.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {soldListings.map((listing) => (
          <Card key={listing.id} className="listing-card overflow-hidden border-none">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.address} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <span className="bg-gold text-navy py-2 px-4 rounded-md font-medium">SOLD</span>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-display font-medium text-navy">{listing.price}</h3>
                <span className="text-gold text-sm font-medium">{listing.soldDate}</span>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gold mr-1" />
                <p className="text-sm text-realEstate-medium">{listing.address}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button className="btn-primary">View All Sold Properties</Button>
      </div>
    </section>
  );
};

export default RecentlySold;
