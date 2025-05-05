
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const ContactForm = ({ className = "" }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <form className={`space-y-6 ${className}`} onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Input 
            placeholder="Full Name*" 
            className="bg-white/70" 
            required
          />
        </div>
        
        <div>
          <Input 
            placeholder="Email Address*" 
            type="email" 
            className="bg-white/70" 
            required
          />
        </div>
        
        <div>
          <Input 
            placeholder="Phone Number*" 
            type="tel" 
            className="bg-white/70" 
            required
          />
        </div>
        
        <div>
          <Textarea 
            placeholder="How can we help you?*" 
            className="bg-white/70 min-h-[120px]" 
            required
          />
        </div>
        
        <div className="flex items-top gap-2">
          <Checkbox id="consent" className="mt-1" />
          <label htmlFor="consent" className="text-sm">
            I agree to receive recurring marketing communication from or on behalf of Cummings & Co. Realtors (consent not required to make a purchase).
          </label>
        </div>
      </div>
      
      <Button type="submit" className="btn-primary w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
