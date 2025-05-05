
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12 md:py-20 bg-realEstate-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-medium mb-6 text-navy">
              Contact Us
            </h1>
            <p className="text-xl text-realEstate-medium max-w-2xl mx-auto">
              Have questions about buying or selling a property? Get in touch with our team of experts and we'll be happy to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-display font-medium mb-6 text-navy">
                Direct Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Phone</h3>
                    <p className="text-realEstate-medium">(410) 499-5404</p>
                    <p className="text-sm text-realEstate-medium mt-1">
                      Available Monday-Friday, 9AM-6PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Email</h3>
                    <p className="text-realEstate-medium">
                      <a href="mailto:derek@theblazerteam.com" className="hover:text-gold transition-colors">
                        derek@theblazerteam.com
                      </a>
                    </p>
                    <p className="text-sm text-realEstate-medium mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Office Address</h3>
                    <p className="text-realEstate-medium">
                      2314 Boston St., Baltimore, MD 21224
                    </p>
                    <p className="text-sm text-realEstate-medium mt-1">
                      Canton Waterfront, Baltimore
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full">
                    <ExternalLink className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy mb-1">Website</h3>
                    <p className="text-realEstate-medium">
                      <a href="https://theblazerteam.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                        theblazerteam.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-8 rounded-xl">
                <h2 className="text-2xl font-display font-medium mb-6 text-navy">
                  Get More Information
                </h2>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="h-[400px] rounded-xl overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.1398243103993!2d-76.5862186!3d39.2807083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803fde225c8d5%3A0x8e8f6e51a4d89060!2s2314%20Boston%20St%2C%20Baltimore%2C%20MD%2021224!5e0!3m2!1sen!2sus!4v1652374564927!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
