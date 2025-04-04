
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
        duration: 5000
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-miami-navy">Contacta con Nosotros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas ayuda con tu reserva? Nuestro equipo está disponible para asistirte en todo lo que necesites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-miami-navy">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2" size={18} />
                    Enviar Mensaje
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-miami-navy text-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 text-miami-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Dirección Principal</h4>
                    <p className="text-gray-300">2100 NW 42nd Ave, Miami, FL 33126, Estados Unidos</p>
                    <p className="text-sm text-gray-400 mt-1">Aeropuerto Internacional de Miami, Terminal E</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 text-miami-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Teléfono</h4>
                    <p className="text-gray-300">+1 (305) 555-1234</p>
                    <p className="text-sm text-gray-400 mt-1">Lun - Dom: 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-3 text-miami-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">info@rentsmartmiami.com</p>
                    <p className="text-sm text-gray-400 mt-1">Soporte disponible 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-3 text-miami-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Horario de Atención</h4>
                    <p className="text-gray-300">24 horas, 7 días a la semana</p>
                    <p className="text-sm text-gray-400 mt-1">Incluyendo días festivos</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.688821015804!2d-80.29685492376536!3d25.79591231141258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9cda55a6f51%3A0x7ba6f26ec2119a8!2sMiami%20International%20Airport!5e0!3m2!1sen!2sus!4v1712287034037!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
