
import React from 'react';

const SellProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Home Value Report',
      description: 'We'll look at your property and provide a FREE Home Value Report based on comparable homes in your area.',
    },
    {
      number: '02',
      title: 'Target Sale Price',
      description: 'We'll recommend a target sale price based on market data, your timeline, and your specific needs.',
    },
    {
      number: '03',
      title: 'Flexible Agreement',
      description: 'Pay a fair commission with our Cancel Anytime policy. Our confidence in our service means zero commitment pressure.',
    },
    {
      number: '04',
      title: 'We Handle Everything',
      description: 'Live Your Life: We take care of 100% of the details from marketing to negotiations to closing the deal.',
    },
  ];

  return (
    <section className="container-custom">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Four-Step Selling Process</h2>
        <p className="section-subtitle">
          Selling Your Baltimore Home Should Be Easy, Fast, and Put The Most Money In Your Pocket
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative glass-card p-8 rounded-xl text-center"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gold text-navy rounded-full font-display font-medium text-lg mb-6">
              {step.number}
            </div>
            
            <h3 className="text-xl font-display font-medium mb-4 text-navy">
              {step.title}
            </h3>
            
            <p className="text-realEstate-medium">
              {step.description}
            </p>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gold z-10"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellProcess;
