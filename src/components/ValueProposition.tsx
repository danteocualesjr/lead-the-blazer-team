
import React from 'react';
import { CheckCircle, Users, Home, Clock } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      title: 'Work with the Best Real Estate Agents in Baltimore',
      description: 'Our team of expert agents has deep knowledge of the Baltimore market and a proven track record of success.',
      icon: <Users className="h-10 w-10 text-gold" />,
    },
    {
      title: 'Find the Best Homes for Sale',
      description: 'Access exclusive listings and get personalized recommendations based on your needs and preferences.',
      icon: <Home className="h-10 w-10 text-gold" />,
    },
    {
      title: 'Sell Your Home Fast',
      description: 'Our strategic marketing and vast network help sell your home quickly and for the best possible price.',
      icon: <Clock className="h-10 w-10 text-gold" />,
    },
  ];

  return (
    <section className="container-custom">
      <div className="text-center mb-16">
        <h2 className="section-title">Why Choose The Blazer Team</h2>
        <p className="section-subtitle">
          If you're looking for real estate agents to "sell my house fast" or buy a new home, you can count on The Blazer Team to give you the high-quality service you deserve.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card flex flex-col items-center text-center"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-display font-medium mb-4 text-navy">
              {feature.title}
            </h3>
            <p className="text-realEstate-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;
