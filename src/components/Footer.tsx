
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-miami-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">RentSmart</span>
                <span className="text-2xl font-bold text-miami-teal ml-1">Miami</span>
              </a>
            </div>
            <p className="text-gray-300 mb-4">
              Experiencia premium en alquiler de vehículos en Miami. Flota amplia y moderna, precios competitivos y servicio excepcional.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">Inicio</a></li>
              <li><a href="#vehicles" className="text-gray-300 hover:text-miami-teal transition-colors">Vehículos</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-miami-teal transition-colors">Servicios</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-miami-teal transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-miami-teal transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-miami-teal transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">Política de Reservas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-miami-teal transition-colors">Seguro y Coberturas</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Boletín de Noticias</h3>
            <p className="text-gray-300 mb-4">Suscríbete para recibir ofertas exclusivas y novedades sobre nuestros servicios.</p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Tu email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-miami-teal hover:bg-miami-teal/80">
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RentSmart Miami Wheels. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-miami-teal text-sm transition-colors">
                Política de Privacidad
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-miami-teal text-sm transition-colors">
                Términos de Servicio
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-miami-teal text-sm transition-colors">
                Mapa del Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
