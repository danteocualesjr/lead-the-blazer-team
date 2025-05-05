
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import FeaturedListings from '@/components/FeaturedListings';
import RecentlySold from '@/components/RecentlySold';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <FeaturedListings />
        <RecentlySold />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
