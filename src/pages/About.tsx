
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Derek Blazer',
      title: 'Team Lead, Realtor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'derek@theblazerteam.com',
      phone: '(410) 499-5404',
    },
    {
      id: 2,
      name: 'Jessica Chroniger',
      title: 'Realtor',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      email: 'jessica@theblazerteam.com',
      phone: '(410) 555-1234',
    },
    {
      id: 3,
      name: 'Jontell Hinton',
      title: 'Realtor',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'jontell@theblazerteam.com',
      phone: '(410) 555-5678',
    },
    {
      id: 4,
      name: 'Thomas Chroniger',
      title: 'Realtor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      email: 'thomas@theblazerteam.com',
      phone: '(410) 555-9012',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80')" }}>
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-display font-medium mb-6">
            Meet The Blazer Team
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Buying or selling a property in Maryland is a big decision, which is why it's more important than ever that you choose the right real-estate professional to be on your side.
          </p>
        </div>
      </section>
      
      <section className="py-16 bg-realEstate-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="text-center glass-card p-8 rounded-xl">
              <div className="text-4xl font-bold text-navy mb-1">$130M+</div>
              <div className="text-realEstate-medium">Value of Real Estate Sold</div>
            </div>
            
            <div className="text-center glass-card p-8 rounded-xl">
              <div className="text-4xl font-bold text-navy mb-1">367</div>
              <div className="text-realEstate-medium">Properties Sold</div>
            </div>
            
            <div className="text-center glass-card p-8 rounded-xl">
              <div className="text-4xl font-bold text-navy mb-1">5/5</div>
              <div className="text-realEstate-medium">Five-Star Reviews</div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our experienced professionals are dedicated to providing exceptional service and making your real estate journey smooth and successful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                email={member.email}
                phone={member.phone}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-gold">
                Why Work With Us vs. a National Chain Brokerage?
              </h2>
              
              <p className="text-white/80 mb-6">
                With a national chain, you're just another transaction. With The Blazer Team, you're family. We offer personalized service tailored to your specific needs, with deep local knowledge that big chains simply can't match.
              </p>
              
              <p className="text-white/80 mb-6">
                We're proud to call Baltimore home. Knowing the local market like the back of our hand should be a given for any real-estate professional. Our team doesn't just work in Baltimore—we live here, we love it here, and we know every neighborhood inside and out.
              </p>
              
              <p className="text-white/80">
                Our commitment to the community extends beyond real estate. We actively support local businesses, participate in community events, and give back through charitable initiatives. When you work with us, you're supporting a team that's invested in making Baltimore an even better place to live.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" 
                alt="Baltimore skyline" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="section-title mb-12">Contact The Blazer Team</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <MapPin className="h-10 w-10 text-gold" />
              <div className="text-left">
                <h3 className="font-medium text-navy">Address</h3>
                <p>2314 Boston St., Baltimore, MD 21224</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="h-10 w-10 text-gold" />
              <div className="text-left">
                <h3 className="font-medium text-navy">Phone</h3>
                <p>(410) 499-5404</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-10 w-10 text-gold" />
              <div className="text-left">
                <h3 className="font-medium text-navy">Email</h3>
                <p>derek@theblazerteam.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
