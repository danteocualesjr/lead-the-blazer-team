
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
}

const TeamMember = ({ name, title, image, email, phone }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-80 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-display font-medium text-navy">{name}</h3>
        <p className="text-realEstate-medium mb-4">{title}</p>
        
        <div className="space-y-2">
          <a 
            href={`mailto:${email}`} 
            className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
          >
            <Mail className="h-4 w-4" />
            {email}
          </a>
          
          <a 
            href={`tel:${phone}`} 
            className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            {phone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
