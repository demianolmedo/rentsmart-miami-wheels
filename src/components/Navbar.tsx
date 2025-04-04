
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-miami-navy">RentSmart</span>
            <span className="text-2xl font-bold text-miami-teal ml-1">Miami</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#vehicles" className="text-gray-700 hover:text-miami-teal transition-colors">Vehículos</a>
          <a href="#services" className="text-gray-700 hover:text-miami-teal transition-colors">Servicios</a>
          <a href="#testimonials" className="text-gray-700 hover:text-miami-teal transition-colors">Testimonios</a>
          <a href="#faq" className="text-gray-700 hover:text-miami-teal transition-colors">FAQ</a>
          <a href="#contact" className="text-gray-700 hover:text-miami-teal transition-colors">Contacto</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone size={18} className="text-miami-teal mr-2" />
            <span className="text-gray-700 font-medium">+1 (305) 555-1234</span>
          </div>
          <Button className="btn-primary">Reservar Ahora</Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-miami-teal focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#vehicles" className="text-gray-700 py-2 hover:text-miami-teal transition-colors">Vehículos</a>
            <a href="#services" className="text-gray-700 py-2 hover:text-miami-teal transition-colors">Servicios</a>
            <a href="#testimonials" className="text-gray-700 py-2 hover:text-miami-teal transition-colors">Testimonios</a>
            <a href="#faq" className="text-gray-700 py-2 hover:text-miami-teal transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 py-2 hover:text-miami-teal transition-colors">Contacto</a>
            <div className="flex items-center py-2">
              <Phone size={18} className="text-miami-teal mr-2" />
              <span className="text-gray-700 font-medium">+1 (305) 555-1234</span>
            </div>
            <Button className="btn-primary w-full">Reservar Ahora</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
