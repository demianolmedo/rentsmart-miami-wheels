
import React from 'react';
import { Button } from '@/components/ui/button';
import SearchForm from './SearchForm';

const HeroSection = () => {
  return (
    <section className="relative bg-miami-navy text-white overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1552244461-9823b3af5137?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-miami-navy bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Alquila tu vehículo ideal en <span className="text-miami-teal">Miami</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-xl">
            Experiencia premium, precios competitivos y la flota más completa para tu viaje perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-lg px-8 py-6">Descubrir Flota</Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-miami-navy text-lg px-8 py-6">
              ¿Cómo Funciona?
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:pl-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-miami-navy text-2xl font-bold mb-6 text-center">Encuentra tu vehículo ideal</h2>
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
